import { CSV_URL_EXPERIENCE } from "@/Constants";
import useData from "@/components/Data";
import Phone from "./icons/Phone";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";
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

export const Experience = () => {
  const { data } = useData(columnName, CSV_URL_EXPERIENCE);

  return (
    <Section className="flex flex-col justify-center mx-auto gap-7">
      <SectionTitle title="Experiencia Laboral" />
      {data.map((D) => (
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
      ))}
    </Section>
  );
};

export default Experience;
