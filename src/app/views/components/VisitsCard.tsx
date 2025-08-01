import { DBLocationProps } from "@/app/types/definitions.";

export const VisitCard = ({
  views,
  mostVisitedCities,
  mostVisitedCountries,
}: {
  views: DBLocationProps[];
  mostVisitedCities: string[];
  mostVisitedCountries: string[];
}) => {
  return (
    <div className="table-info text-center my-4">
      <p>Total de Visitantes:</p>
      {views.slice(0, 1).map((view) => (
        <p
          key={view.id}
          className="font-semibold border p-1 rounded-md bg-[#eee]"
        >
          {view.id}
        </p>
      ))}
      <p>Ciudad de dónde más han visitado el perfil:</p>
      {mostVisitedCities.slice(0, 1).map((city, index) => {
        const country = mostVisitedCountries
          .slice(0, 1)
          .map((country) => country);
        return (
          <p
            className="font-semibold border p-1 rounded-md bg-[#eee]"
            key={index}
          >
            {city} - {country}
          </p>
        );
      })}
    </div>
  );
};
