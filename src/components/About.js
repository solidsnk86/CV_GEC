import { CSV_URL_ACERCA } from "@/Constants";
import { useData } from "@/components/Data";
import { Section } from "@/Section";
import { SectionTitle } from "@/components/SectionTitle";

const columnName = ["ACERCA"];

const AboutSkeleton = () => (
  <div className="animate-pulse">
    <div>
      <header className="flex w-full">
        {/* Skeleton para párrafos de texto - simulando 3-4 líneas */}
        <div className="space-y-1 w-full">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-11/12"></div>
          <div className="h-3 bg-gray-300 rounded w-4/5"></div>
          <div className="h-3 bg-gray-300 rounded w-11/12"></div>
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        </div>
      </header>
    </div>
  </div>
);

export const About = () => {
  const { data, loading } = useData(columnName, CSV_URL_ACERCA);

  return (
    <Section className="flex flex-col justify-center gap-7">
      <SectionTitle title="Acerca de mí" />
      {loading ? (
        <AboutSkeleton />
      ) : (
        data.map((D) => (
          <header key={D.ACERCA}>
            <div>
              <p>{D.ACERCA}</p>
            </div>
          </header>
        ))
      )}
    </Section>
  );
};

export default About;
