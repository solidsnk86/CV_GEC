import { CSV_URL_EDUCATION } from "@/Constants";
import useData from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["OBJETIVO"];

export const Footer = () => {
  const { data } = useData(columnName, CSV_URL_EDUCATION);
  return (
    <Section>
      <SectionTitle title="Objetivos y Remuneración Pretendida" />
      {data.map((D) => (
        <div key={D.OBJETIVO}>{D.OBJETIVO}</div>
      ))}
    </Section>
  );
};

export default Footer;
