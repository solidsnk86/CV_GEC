import { CSV_URL_EXPERIENCE } from "@/Constants";
import { useFetchData } from "@/app/hooks/useFetchData";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";
import Phone from "./icons/Phone";
import Mail from "./icons/Mail";

const columnName = [
  "EMPRESA",
  "PERIODO",
  "PUESTO",
  "DESEMPEÑO",
  "REFERENTE",
  "REFERENCIA",
  "REFERENTE2",
  "REFEMAIL",
];

const ExperienceSkeleton = () => (
  <div className="animate-pulse space-y-7">
    {/* Generar 2-3 elementos skeleton para simular experiencias */}
    {Array.from({ length: 3 }).map((_, index) => (
      <article key={index}>
        <header>
          {/* Skeleton para empresa - text-xl */}
          <div className="h-7 bg-gray-300 rounded w-full max-w-sm mb-1"></div>
          {/* Skeleton para periodo */}
          <div className="h-5 bg-gray-300 rounded w-32 mb-1"></div>
          {/* Skeleton para puesto */}
          <div className="h-5 bg-gray-300 rounded w-48"></div>
        </header>

        <footer>
          {/* Skeleton para desempeño - párrafo más largo */}
          <div className="space-y-2 mt-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
          </div>
        </footer>

        <div className="py-4">
          {/* Skeleton para sección de referencias */}
          <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>

          {/* Primera referencia con teléfono */}
          <div className="mb-1">
            <div className="flex items-center gap-1">
              <div className="h-3 bg-gray-300 rounded w-24"></div>
              <div className="w-[12px] h-[12px] bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-28"></div>
            </div>
          </div>

          {/* Segunda referencia con email */}
          <div>
            <div className="flex items-center gap-1">
              <div className="h-3 bg-gray-300 rounded w-20"></div>
              <div className="w-[12px] h-[12px] bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-40"></div>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export const Experience = () => {
  const { data, loading } = useFetchData(columnName, CSV_URL_EXPERIENCE);

  return (
    <Section className="flex flex-col justify-center gap-7">
      <SectionTitle title="Experiencia Laboral" />
      {loading ? (
        <ExperienceSkeleton />
      ) : (
        data.map((D) => (
          <article key={D.EMPRESA}>
            <header>
              <h1 className="text-xl">{D.EMPRESA}</h1>
              <span>{D.PERIODO}</span>
              <time>{D.PUESTO}</time>
            </header>
            <footer>
              <p>{D.DESEMPEÑO}</p>
            </footer>
            <div className="py-4">
              {D.REFERENTE || D.REFERENCIA ? (
                <>
                  <h6 className="text-sm">Referencia:</h6>
                  <p className="text-xs">
                    {D.REFERENTE}:
                    <a
                      className="hover:underline ease-in hover:text-zinc-700"
                      href={`tel:${D.REFERENCIA}`}
                      title={`Llamar y pedir referencias a ${D.REFERENTE}`}
                    >
                      <Phone className="inline mx-1 w-[12px] mb-[3px] no-print" />
                      {D.REFERENCIA}
                    </a>
                  </p>
                </>
              ) : null}
              {D.REFERENTE2 || D.REFEMAIL ? (
                <p className="text-xs">
                  {D.REFERENTE2}:
                  <a
                    className="inline hover:underline ease-in hover:text-zinc-700"
                    href={`mailto:${D.REFEMAIL}`}
                    title={`Pedir referencia por correo electrónico a ${D.REFERENTE2}`}
                  >
                    <Mail className="inline w-[12px] mx-1" />
                    {D.REFEMAIL}
                  </a>
                </p>
              ) : null}
            </div>
          </article>
        ))
      )}
    </Section>
  );
};

export default Experience;
