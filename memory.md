# Seguimiento del proyecto

## Estado actual

- Proyecto Next.js con Tailwind CSS.
- El servidor de desarrollo se ejecuta en `http://localhost:3000`.
- Repositorio remoto: `origin` en GitHub, rama `master`.
- Último commit subido: `d29ed97` — `modificación colores y texto lorem`.
- Hay cambios posteriores sin subir en `app/page.tsx`.
- La fuente global configurada en `app/layout.tsx` es Syne Mono mediante `next/font/google`.

## Página principal

Archivo: `app/page.tsx`

- La página contiene tres secciones verticales de ancho `100vw`.
- La primera sección es el hero, con altura `100vh` y fondo `#3b0764`.
- Dentro del hero hay un bloque centrado de `1200px × 1200px`, con fondo `#161218`.
- El hero usa `overflow-hidden` para que ese bloque no invada las secciones siguientes.
- El bloque del hero contiene un texto Lorem Ipsum breve, centrado con Flexbox, en blanco y a `24px`.
- La segunda sección mide `50vh` y tiene fondo `#84cc16`.
- La tercera sección mide `50vh` y tiene fondo `#f59e0b`.

## Nota de responsive

- No se usa `min-height: 450px`, ya que impedía mantener las proporciones basadas en `vh` al reducir la altura de la ventana.

## Despliegue en Vercel

- Si el texto no aparece en producción, comprobar que Vercel haya desplegado la rama `master` y el commit esperado.
- Antes de un nuevo despliegue, subir también los cambios pendientes de `app/page.tsx`.
