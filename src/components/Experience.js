import { CSV_URL_EXPERIENCE } from "@/Constants";
import useData from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = [
  "EMPRESA",
  "PERIODO",
  "PUESTO",
  "DESEMPEÑO",
  "FACULTAD",
  "EDUCACION",
  "AÑO",
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
        </article>
      ))}
    </Section>
  );
};

export default Experience;
