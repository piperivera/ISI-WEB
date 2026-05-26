# ISI

Sitio corporativo de ISI construido con Astro y Tailwind CSS. El resultado final es estatico, rapido y compatible con Hostinger al subir el contenido de `dist/`.

## Estructura

```text
.
|-- src/
|   |-- components/      # Header, footer, tarjetas, CTA, formulario
|   |-- data/            # Textos, enlaces, servicios y medios
|   |-- layouts/         # Layout base del sitio
|   |-- pages/           # Paginas Astro
|   `-- styles/          # Sistema visual global
|-- public/
|   `-- images/          # Imagenes locales del sitio
|-- docs/
|   |-- DESIGN.md
|   `-- screenshots/     # Referencias visuales de Stitch
|-- dist/                # Build listo para subir a Hostinger
|-- package.json
|-- astro.config.mjs
`-- tailwind.config.mjs
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

Este proyecto compila con Node 20 usando Astro 5. Cuando el entorno local suba a Node 22.12 o superior, se puede actualizar Astro a la rama 6 para resolver tambien auditorias de dependencias de desarrollo.

## Deploy en Hostinger

1. Ejecutar `npm run build`.
2. Subir el contenido de `dist/` a `public_html`.
3. Mantener `src/`, `node_modules/` y archivos de configuracion solo en desarrollo local.

## Notas

- El estilo esta centralizado en `src/styles/global.css`.
- Los textos y rutas principales viven en `src/data/site.ts`.
- Las paginas reutilizan los mismos componentes para mantener consistencia visual.
