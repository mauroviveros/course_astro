---
title: Guía rápida de tipografía para interfaces web
date: 2023-07-16
description: Principios esenciales para elegir fuentes, tamaños y espaciados que mejoren legibilidad y jerarquía.
author: jane-doe
image: 'images/post-05.png'
tags: [Tipografía, Diseño UI, Frontend]
---

# Guía rápida de tipografía para interfaces web

Una buena tipografía puede mejorar la percepción de calidad de un producto digital en segundos. No se trata solo de “qué fuente usar”, sino de construir una jerarquía clara y legible.

## Empieza por la lectura

Antes de elegir estilos, define el contexto: ¿es un blog, dashboard o landing? Cada tipo de contenido requiere distintos ritmos de lectura.

Para contenido largo, prioriza fuentes con buena legibilidad en párrafos y una altura de línea cómoda.

```css
body {
  font-family: "Merriweather", serif;
  font-size: 18px;
  line-height: 1.7;
}
```

## Construye una escala tipográfica

Usar una escala consistente evita decisiones improvisadas en cada sección.

```css
:root {
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
}
```

Con una escala, los títulos, subtítulos y cuerpo mantienen proporción visual.

## Contraste y espaciado

Dos errores comunes son bajo contraste y líneas demasiado juntas. Asegúrate de que el texto se lea fácilmente en móviles y pantallas de baja calidad.

- Usa suficiente contraste entre texto y fondo.
- Evita bloques muy anchos de texto.
- Incrementa interlineado en párrafos largos.

## Combinar fuentes sin complicarse

Una combinación clásica es serif para títulos y sans-serif para cuerpo, o viceversa, pero limita la interfaz a dos familias tipográficas para mantener coherencia.

La tipografía correcta no llama la atención por sí sola: deja que el contenido brille.
