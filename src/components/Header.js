import { CSV_URL_HEADER } from "@/Constants";
import Linkedin from "@/components/icons/Linkedin";
import { Preloader } from "@/components/Preloader";
import { Section } from "@/Section";
import useData from "@/components/Data";
import { MAIL, TEL, LINKEDIN_URL, WHATSAPP_URL } from "@/Constants";
import Phone from "@/components/icons/Phone";
import Mail from "@/components/icons/Mail";
import Whatsapp from "@/components/icons/Whatsapp";
import Worldmap from "@/components/icons/Worldmap";

const columnName = [
  "NOMBRE",
  "SOY",
  "CIUDAD",
  "EMAIL",
  "TEL",
  "IMAGEN",
  "ACTUALIZACION",
];

export const Header = () => {
  const { data, loading } = useData(columnName, CSV_URL_HEADER);

  if (loading) {
    return <Preloader />;
  }
  return (
    <Section>
      {data.map((D) => (
        <div className="container xl:flex" key={D.NOMBRE}>
          <div className="info">
            <header>
              <h1 className="text-3xl font-bold">{D.NOMBRE}</h1>
              <h2>{D.SOY}</h2>
              <span>
                <Worldmap /> {D.CIUDAD}
              </span>
              <footer className="social-icons">
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
              <ul className="py-2 flex space-x-3">
                <span className="list" />
                <p className="text-xs">Actualizado: {D.ACTUALIZACION}</p>
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
      ))}
    </Section>
  );
};

export default Header;
