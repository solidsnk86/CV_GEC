/* eslint-disable @next/next/no-img-element */
import {
  CSV_URL_HEADER,
  MAIL,
  TEL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "@/Constants";
import Linkedin from "@/components/icons/Linkedin";
import { Section } from "@/Section";
import Phone from "@/components/icons/Phone";
import Mail from "@/components/icons/Mail";
import Whatsapp from "@/components/icons/Whatsapp";
import Worldmap from "@/components/icons/Worldmap";
import { useFetchData } from "@/app/hooks/useFetchData";

const columnName = [
  "NOMBRE",
  "SOY",
  "CIUDAD",
  "EMAIL",
  "TEL",
  "IMAGEN",
  "ACTUALIZACION",
];

const HeaderSkeleton = () => (
  <div className="container xl:flex animate-pulse px-2">
    <div className="info">
      <header>
        {/* Skeleton para nombre - text-3xl font-bold (h-9) */}
        <div className="h-9 bg-gray-300 rounded w-64 mb-2"></div>

        {/* Skeleton para SOY - h2 texto normal (h-6) */}
        <div className="h-6 bg-gray-300 rounded w-48 mb-3"></div>

        {/* Skeleton para ciudad - span con icono */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-5 bg-gray-300 rounded w-32"></div>
        </div>

        {/* Skeleton para footer print - texto normal */}
        <div className="print">
          <div className="h-4 bg-gray-300 rounded w-80 mb-4"></div>
        </div>

        {/* Skeleton para iconos sociales - iconos SVG típicos 24x24 */}
        <div className="social-icons no-print flex gap-3 mb-4">
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>

        {/* Skeleton para actualización - text-[10px] muy pequeño */}
        <div className="py-2 flex space-x-3 update items-center">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          <div className="h-2.5 bg-gray-300 rounded w-36"></div>
        </div>
      </header>
    </div>

    {/* Skeleton para imagen - figure con img */}
    <figure>
      <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
    </figure>
  </div>
);

export const Header = () => {
  const { data, loading } = useFetchData(columnName, CSV_URL_HEADER);

  return (
    <Section>
      {loading ? (
        <HeaderSkeleton />
      ) : (
        data.map((D) => (
          <div className="container xl:flex" key={D.NOMBRE}>
            <div className="info">
              <header>
                <h1 className="text-3xl font-bold">{D.NOMBRE}</h1>
                <h2>{D.SOY}</h2>
                <span className="place">
                  <Worldmap className="mb-[1.5px]" /> {D.CIUDAD}
                </span>
                <footer className="print flex">
                  {MAIL} • {D.TEL} • {LINKEDIN_URL}
                </footer>
                <footer className="social-icons no-print">
                  <a
                    href={`tel:${TEL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Llamar a ${D.NOMBRE}`}
                  >
                    <Phone />
                  </a>
                  <a
                    href={`mailto:${MAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Enviar un email a ${D.NOMBRE}`}
                  >
                    <Mail />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visitar el perfil de ${D.NOMBRE} en LinkedIn`}
                  >
                    <Linkedin />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Enviar un mensaje de whatsapp a ${D.NOMBRE}`}
                  >
                    <Whatsapp />
                  </a>
                </footer>
                <ul className="py-2 flex space-x-3 update">
                  <span className="list" />
                  <p className="text-[10px]">Actualizado: {D.ACTUALIZACION}</p>
                </ul>
              </header>
            </div>
            <figure>
              <img
                src={D.IMAGEN}
                alt={D.NOMBRE}
                title={`Foto de perfil de ${D.NOMBRE}`}
                loading="lazy"
              />
            </figure>
          </div>
        ))
      )}
    </Section>
  );
};

export default Header;
