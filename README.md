<div align="center">
<img src="solidsnk86.png" height="90px" width="auto" /> 
<h2>
    "Un <em>currículum</em> minimalista diseñado para la web, con la opción de imprimir o descargar en formato PDF. Este currículum es completamente editable directamente desde Google Sheets."
</h2>

<div align="center">

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on%20Vercel-Hosted-ff6000.svg?logo=vercel&logoColor=white)](https://neotecs.vercel.app/)

[![Supabase](https://img.shields.io/badge/Supabase-3540C8.svg?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

</div>

## 🛠️ Stack

- [![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)

- [![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

- [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- [![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

- [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Para Empezar

### 1. Puedes usar este repositorio para tu proyecto personal

- Yo uso [pnpm](https://pnpm.io/installation) como gestor de dependencias y empaquetador.

### 2. Lanza el servidor de desarrollo:

```bash
pnpm dev
# Si no usas pnpm
npm run dev
```

<p>
Basado en el diseño de <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>
</p>

Este currículum vitae incorpora un sistema de seguimiento de geolocalización, que incluye información sobre la ciudad, el código postal, el país, su bandera y su ubicación geográfica. La recopilación de estos datos se realiza a través de una API de geolocalización proporcionada por [microlink](https://geolocation.microlink.io). La API devuelve los datos en formato <abbr title="Graphics Interchange Format">JSON</abbr>, los cuales son obtenidos mediante un proceso de fetch.

Una vez obtenidos los datos, se procede a almacenarlos en una tabla de la base de datos de `supabase`, que está basada en `PostgreSQL`. Estos datos almacenados incluyen información relevante sobre la geolocalización. Posteriormente, estos datos son recuperados de la base de datos mediante un nuevo fetch.

En resumen, el flujo de trabajo consiste en la obtención de datos de geolocalización a través de la API de microlink, el almacenamiento de estos datos en una base de datos `supabase`, y finalmente, la recuperación de los datos almacenados mediante un nuevo fetch para ser integrados nuevamente en el currículum vitae.

#

<div align="center">
  <p>NeoTecs Dev ©2023</p>
</div>
