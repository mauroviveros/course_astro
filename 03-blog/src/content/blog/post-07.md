---
title: Animaciones web suaves y funcionales
date: 2023-07-09
description: Aprende a usar transiciones y keyframes para mejorar la experiencia sin afectar el rendimiento.
author: jane-doe
image: 'images/post-05.png'
tags: [CSS, Animaciones, UX]
---

# Animaciones web suaves y funcionales

Las animaciones pueden hacer que una interfaz se sienta más viva, pero también pueden convertirse en una distracción si no se usan con intención. El objetivo es comunicar estado y guiar al usuario.

## Cuándo animar

Las mejores animaciones suelen responder a tres casos:

- Feedback: confirmar acciones del usuario.
- Transición: suavizar cambios entre estados.
- Jerarquía: dirigir la atención a elementos importantes.

Si una animación no cumple alguno de estos objetivos, probablemente no sea necesaria.

## Propiedades recomendadas

Para mantener buen rendimiento, prioriza `transform` y `opacity`, ya que suelen aprovechar aceleración por GPU.

```css
.card {
  transition: transform 240ms ease, opacity 240ms ease;
}

.card:hover {
  transform: translateY(-4px);
  opacity: 0.96;
}
```

Evita animar propiedades costosas como `width`, `height` o `box-shadow` en elementos complejos.

## Microinteracciones con keyframes

Cuando necesitas una animación más expresiva, `@keyframes` es ideal.

```css
@keyframes pop-in {
  0% {
    transform: scale(0.96);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.toast {
  animation: pop-in 220ms ease-out;
}
```

Este patrón funciona muy bien para notificaciones, menús y modales.

## Accesibilidad primero

No olvides respetar la preferencia de movimiento reducido:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

Animar con criterio mejora la UX; animar por decorar, casi nunca.
