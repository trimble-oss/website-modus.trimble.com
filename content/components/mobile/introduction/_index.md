---
title: "Mobile"
layout: "single"
description: "The mobile library is specific to applications built for mobile devices."
components: true
images:
  - "/img/mobile/intro.png"
layout: single
component: Introduction
weight: 1
tags: [mobile, hide-styles, hide-usage, hide-accessibility]
sitemap:
  disable: true
---

<style>
header .nav-item {
  display: none !important;
}
article .nav-tabs {
  display: none !important;
  opacity: 0;
}
</style>

{{< img src="/img/mobile/intro.png" dark="/img/mobile/intro-dark.png" width="1087" height="385" class="w-100" loading="auto" >}}

## Overview

The mobile library for native apps Modus components and elements for designing and developing consistent mobile applications and workflows. These components are available for native or cross-platform applications on iOS and Android devices. Modus Mobile UI Kits are available in Figma and Adobe XD for designers.

## Modus Web UI Kits

Modus Mobile UI Kits are available in [Figma for designers](/designers/).

## Gestures

There are a range of gestures which can be used to interact with a mobile app:

- One-finger Single Tap
- One-finger Double Tap
- Two-finger Double Tap
- One-finger Press & Hold
- One-finger Panning
- Two-finger Rotate
- Two-finger Zoom-in (Spread)
- Two-finger Zoom-out (Pinch)
- Two-finger Tilt (2D/3D)

### One Finger Tap

A one-finger single tap is often used to trigger a single event and may vary based on use case. Common uses are but may not be limited to, making a selection, dropping a pin, displaying a map popup, displaying geolocation.

{{< img src="/img/mobile/maps-one-finger-tap.svg" dark="/img/mobile/maps-one-finger-tap-dark.svg" width="960" height="400" alt="Maps One Finger Tap" >}}

### One Finger Double Tap

A one-finger double tap is commonly used to zoom-in one level.

{{< img src="/img/mobile/maps-one-finger-double-tap.svg" dark="/img/mobile/maps-one-finger-double-tap-dark.svg" width="960" height="400" alt="Maps One Finger Double Tap" >}}

### Two Finger Double Tap

A two-finger double tap is commonly used to zoom-out one level.

{{< img src="/img/mobile/maps-two-finger-double-tap.svg" dark="/img/mobile/maps-two-finger-double-tap-dark.svg" width="960" height="400" alt="Maps One Finger Double Tap" >}}

### One-finger Press & Hold

A one-finger press & hold gesture can also be used to trigger a single event such displaying a popup or other information. This should only be used when the one-finger tap interaction is assigned to a different event.

{{< img src="/img/mobile/maps-one-finger-press-hold.svg" dark="/img/mobile/maps-one-finger-press-hold-dark.svg" width="960" height="400" alt="Maps One Finger Press & Hold" >}}

### One-finger Panning

Panning is typically a single-finger interaction. To pan, tap & hold the map with one finger and drag in any direction. A similar two-finger interaction can also be used when "tilt" is not part of the map interaction.

{{< img src="/img/mobile/maps-one-finger-panning.svg" dark="/img/mobile/maps-one-finger-panning-dark.svg" width="960" height="400" alt="Maps One Finger Panning" >}}

### Two-finger Rotate

To rotate a map, tap & hold 2 fingers on map and use a rotation gesture.

{{< img src="/img/mobile/maps-two-finger-rotate.svg" dark="/img/mobile/maps-two-finger-rotate-dark.svg" width="960" height="400" alt="Maps Two Finger Rotate" >}}

### Two-finger Zoom-In (Spread)

Zooming in can also be done by using two-fingers and a "spread" gesture.

{{< img src="/img/mobile/maps-two-finger-spread.svg" dark="/img/mobile/maps-two-finger-spread-dark.svg" width="960" height="400" alt="Maps Two-Finger Zoom in Spread" >}}

### Zoom-Out (Pinch)

To zoom out, using two-fingers, use a pinch gesture.

{{< img src="/img/mobile/maps-two-finger-pinch.svg" dark="/img/mobile/maps-two-finger-pinch-dark.svg" width="960" height="400" alt="Maps Two-Finger Zoom Out Pinch" >}}

### Tilt (2D/3D)

Some map applications can render their maps in both 2D & 3D view. To transition between 2D & 3D, with two-fingers use a push gesture to tilt map forward for 3D. To return to 2D, use two-fingers and a pull gesture.

{{< img src="/img/mobile/maps-tilt.svg" dark="/img/mobile/maps-tilt-dark.svg" width="960" height="848" alt="Maps Tilt" >}}
