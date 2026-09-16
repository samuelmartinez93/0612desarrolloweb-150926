# Seguimiento del proyecto

## Estado actual

- Proyecto Next.js con Tailwind CSS.
- El servidor de desarrollo se ejecuta en `http://localhost:3000`.
- Repositorio remoto: `origin` en GitHub, rama `master`.

## Página principal

Archivo: `app/page.tsx`

- La página contiene tres secciones verticales, cada una con altura `50vh` y ancho `100vw`.
- La primera sección es el hero, con fondo `#3b0764`.
- Dentro del hero hay un bloque centrado de `1200px × 1200px`, con fondo `#161218`.
- El hero usa `overflow-hidden` para que ese bloque no invada las secciones siguientes.
- La segunda sección tiene fondo `#84cc16`.
- La tercera sección tiene fondo `#f59e0b`.

## Nota de responsive

- No se usa `min-height: 450px`, ya que impedía mantener las proporciones basadas en `vh` al reducir la altura de la ventana.
