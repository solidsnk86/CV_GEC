# 📄 Currículum Web Minimalista

Con opción de impresión y descarga en PDF, completamente editable directamente desde **Google Sheets**.

### ✨ Inspirado en el diseño de [Bartosz Jarocki](https://github.com/BartoszJarocki/cv)

Este currículum incorpora un sistema de seguimiento de **geolocalización** que muestra datos como ciudad, código postal, país, bandera e incluso coordenadas.  
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

| React | Next.js | TypeScript | JavaScript |
|------|---------|------------|------------|
| ![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |

| CSS | Tailwind CSS | Supabase | PostgreSQL |
|-----|--------------|-----------|------------|
| ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Supabase](https://img.shields.io/badge/Supabase-3540C8?style=for-the-badge&logo=supabase&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) |

---

<div align="center">
  <p>© 2023 SolidSnk86</p>
</div>
