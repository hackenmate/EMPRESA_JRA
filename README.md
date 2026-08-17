# JRA Servicios Ambientales

Sitio web corporativo de **J.R.A. Servicios Ambientales E.I.R.L.**, orientado a empresas que requieren gestión integral de residuos, transporte autorizado, reciclaje y servicios ambientales.

## Funcionalidades

- Presentación corporativa y propuesta de valor.
- Catálogo de servicios ambientales.
- Línea especializada de recolección de aceite vegetal usado.
- Galería de operación y flota.
- Registros y autorizaciones corporativas.
- Contacto directo por teléfono, correo y WhatsApp.
- Sello Ecoamigable con código QR verificable.
- Página pública de verificación mediante `?verificado=nombre-del-negocio`.
- Diseño responsive con animaciones y soporte para `prefers-reduced-motion`.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- react-qr-code
- Oxlint

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura principal

```text
src/
├── assets/brand/              # Identidad visual y fotografías
├── components/
│   └── SelloVerificacion.tsx  # Página pública del sello ecoamigable
├── App.tsx                    # Landing corporativa principal
├── index.css                  # Tema, estilos globales y accesibilidad
└── main.tsx                   # Entrada de React
```

## Datos de contacto utilizados en el sitio

- J.R.A. Servicios Ambientales E.I.R.L.
- Arequipa, Perú
- Sitio: www.jra.com.pe

> Antes de publicar cambios en producción, validar que teléfonos, correos, autorizaciones, registros y dirección comercial continúen vigentes.
