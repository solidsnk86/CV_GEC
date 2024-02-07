import { CSV_URL_ACERCA } from "@/Constants";
import useData from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["ACERCA"];

export const About = () => {
  const { data } = useData(columnName, CSV_URL_ACERCA);

  return (
    <Section className="flex flex-col justify-center mx-auto gap-7">
      <SectionTitle title="Acerca de mí" />
      {data.map((D) => (
        <div key={D.ACERCA}>
          <header>
            <p>{D.ACERCA}</p>
          </header>
        </div>
      ))}
    </Section>
  );
};

export default About;
