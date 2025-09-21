# HC Store — Landing Page (HTML/CSS/JS) 👋

Landing page responsive hecha con HTML, CSS y JS.
Incluye un **header**, **hero**, **tres tarjetas de producto** y **footer** de contacto.  
La interacción en JS permite cambiar la **imagen/color** del producto mediante **swatches**.

## Demo
https://reto-frontend-nine.vercel.app/

## Qué incluye
- **Header** con logo y navegación (Inicio / Productos / Contacto).
- **Hero** con título, subtítulo y botón que hace scroll a *Productos*.
- **Sección de 3 tarjetas** (imagen, título, texto y swatches).
- **Footer** con teléfono, email y redes.
- **Interacción JS**: al hacer clic en un swatch, cambia la imagen del producto.

## Cómo visualizarlo
1. **Clonar o descargar**
   - Git:  
     ```bash
     git clone https://github.com/Adolfo-Arellano/Reto-Frontend.git
     cd Reto-Frontend
     ```
   - O descarga el **ZIP** desde GitHub y descomprímelo.
2. **Abrir `index.html` en el navegador (elige una)**
   - **Doble clic** sobre `index.html` (si se abre un editor, usa “Abrir con”).
   - **Arrastrar** `index.html` a una ventana del navegador.
   - **Abrir con**: clic derecho → **Abrir con** → Chrome / Edge / Firefox / Safari.
   - **Terminal**:
     - Windows: `start chrome index.html` (puedes cambiar el navegador)
     - macOS: `open -a "Google Chrome" index.html`
     - Linux: `xdg-open index.html`
   - **Live Server (VS Code / Cursor...)**:
     - Instala la extensión **Live Server** → clic derecho en `index.html` → **Open with Live Server**.

## Detalles técnicos
- **Swatches (JS):**
  - Cada botón de color trae `data-img="assets/{nombre del modelo}.png"` y `data-label="Color"`.
  - Se escucha **un solo** `clic` por card y se actualiza `img.src` y `alt`.
- **Accesibilidad:**
  - Imágenes con `alt` descriptivo.
  - Swatches con `aria-pressed="true/false"` para indicar el activo.
- **Responsive:**
  - Grid de productos con `repeat(auto-fit, minmax(320px, 1fr))`, que se adapta de 1 a 3 columnas según el ancho.
