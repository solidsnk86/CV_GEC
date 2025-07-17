# 📄 Currículum Web Minimalista

Con opción de impresión y descarga en PDF, completamente editable directamente desde **Google Sheets**.

### ✨ Inspirado en el diseño de [Bartosz Jarocki](https://github.com/BartoszJarocki/cv)

Este currículum incorpora un sistema de seguimiento de **geolocalización**, que muestra datos como ciudad, código postal, país, bandera e incluso coordenadas.  
Los datos son obtenidos a través de la API de geolocalización de [Microlink](https://geolocation.microlink.io), que devuelve un JSON procesado mediante `fetch`.

Una vez obtenida la información, se guarda en una base de datos gestionada por **Supabase** (basada en PostgreSQL).  
Posteriormente, estos datos pueden recuperarse desde la base de datos y mostrarse nuevamente en el currículum.  
Además, toda la información del currículum puede editarse de forma sencilla mediante una hoja de **Google Sheets**, desde la que se sincroniza dinámicamente con la aplicación.

✅ **En resumen:**
- Obtiene datos de geolocalización vía API y los almacena en Supabase.
- Los datos pueden editarse fácilmente en Google Sheets.
- La información siempre se sincroniza y actualiza automáticamente.

🔗 **[Ver currículum en vivo](https://cv-gec.vercel.app/)**

---

## 🛠️ Tecnologías

| [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React"/>](https://reactjs.org/) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40" alt="Next.js"/>](https://nextjs.org/) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" alt="TypeScript"/>](https://www.typescriptlang.org/) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" alt="JavaScript"/>](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
|:---:|:---:|:---:|:---:|
| **React** | **Next.js** | **TypeScript** | **JavaScript** |

| [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="CSS3"/>](https://developer.mozilla.org/en-US/docs/Web/CSS) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="40" alt="TailwindCSS"/>](https://tailwindcss.com/) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" width="40" alt="Supabase"/>](https://supabase.io/) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="40" alt="PostgreSQL"/>](https://www.postgresql.org/) |
|:---:|:---:|:---:|:---:|
| **CSS3** | **TailwindCSS** | **Supabase** | **PostgreSQL** |


---

<div align="center">
  <p>© 2023 SolidSnk86</p>
</div>
