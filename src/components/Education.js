import { CSV_URL_EDUCATION } from "@/Constants";
import useData from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["FACULTAD", "EDUCACION", "AÑO"];

export const Education = () => {
  const { data } = useData(columnName, CSV_URL_EDUCATION);

  return (
    <Section className="flex flex-col justify-center mx-auto gap-7">
      <SectionTitle title="Educación" />
      {data.map((D) => (
        <article>
          <header>
            <h1 className="text-xl">{D.FACULTAD}</h1>
            <span>{D.AÑO}</span>
          </header>
          <footer>
            <p>{D.EDUCACION}</p>
          </footer>
        </article>
      ))}
    </Section>
  );
};

export default Education;
