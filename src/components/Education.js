import { CSV_URL_EDUCATION } from "@/Constants";
import { useData } from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["FACULTAD", "EDUCACION"];

const EducationSkeleton = () => (
  <div className="animate-pulse space-y-7">
    {/* Generar 2-3 elementos skeleton para simular entradas de educación */}
    {Array.from({ length: 3 }).map((_, index) => (
      <article key={index}>
        <header>
          {/* Skeleton para título de facultad - text-xl */}
          <div className="h-5 bg-gray-300 rounded w-80 mb-1"></div>
          {/* Skeleton para año */}
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </header>
        <footer>
          {/* Skeleton para descripción de educación - párrafo */}
          <div className="space-y-1 mt-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </footer>
      </article>
    ))}
  </div>
);

export const Education = () => {
  const { data, loading } = useData(columnName, CSV_URL_EDUCATION);

  return (
    <Section className="flex flex-col justify-center gap-7">
      <SectionTitle title="Educación" />
      {loading ? (
        <EducationSkeleton />
      ) : (
        data.map((D, i) => (
          <article key={`name-${D.FACULTAD}-${i}`}>
            <header>
              <h1 className="text-xl">{D.FACULTAD}</h1>
              <span>{D.AÑO}</span>
            </header>
            <footer>
              <p>{D.EDUCACION}</p>
            </footer>
          </article>
        ))
      )}
    </Section>
  );
};

export default Education;
