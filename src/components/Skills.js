import { CSV_URL_APTITUDES } from "@/Constants";
import { useData } from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["APTITUDES"];

const SkillsSkeleton = () => (
  <div className="grid xl:grid-cols-5 grid-cols-2 animate-pulse">
    {/* Generar 10 elementos skeleton para simular aptitudes */}
    {Array.from({ length: 6 }).map((_, index) => (
      <article key={index}>
        <div className="bg-gray-300 border border-gray-300 px-2 py-1 rounded xl:text-xs text-[10px] m-1 w-fit">
          {/* Diferentes anchos para simular texto variable */}
          <div
            className={`h-3 bg-gray-300 rounded ${
              index % 4 === 0
                ? "w-16"
                : index % 4 === 1
                ? "w-20"
                : index % 4 === 2
                ? "w-12"
                : "w-24"
            }`}
          />
        </div>
      </article>
    ))}
  </div>
);

export const Skills = () => {
  const { data, loading } = useData(columnName, CSV_URL_APTITUDES);

  return (
    <Section className="grid gap-4">
      <SectionTitle title="Aptitudes" />
      {loading ? (
        <SkillsSkeleton />
      ) : (
        <div className="grid xl:grid-cols-5 grid-cols-2">
          {data.map((D) => (
            <article key={D.APTITUDES}>
              <p className="bg-[#EEEEEE] border border-zinc-200 px-2 py-1 rounded xl:text-xs text-[10px] text-zinc-800 m-1 w-fit">
                {D.APTITUDES}
              </p>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Skills;
