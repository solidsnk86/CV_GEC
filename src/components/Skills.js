import { CSV_URL_APTITUDES } from "@/Constants";
import useData from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["APTITUDES"];

export const Skills = () => {
  const { data } = useData(columnName, CSV_URL_APTITUDES);

  return (
    <Section className="grid xl:gap-4 gap-1">
      <SectionTitle title="Aptitudes" />
      <div className="grid grid-cols-5 my-4">
        {data.map((D) => (
          <article key={D.APTITUDES}>
            <p className="bg-[#EEEEEE] border border-zinc-200 px-2 py-1 rounded-md xl:text-xs text-[10px] text-zinc-800 m-1 w-fit">
              {D.APTITUDES}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
