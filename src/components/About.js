import { CSV_URL_HEADER } from "@/Constants";
import useData from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnIndex = 6;

export const About = () => {
  const { data } = useData([columnIndex], CSV_URL_HEADER);

  return (
    <Section className="flex flex-col justify-center mx-auto gap-7">
      <SectionTitle title="Acerca de mí" />
      {data.map((D) => (
        <div key={D[columnIndex]}>
          <header>
            <p>{D[columnIndex]}</p>
          </header>
        </div>
      ))}
    </Section>
  );
};

export default About;
