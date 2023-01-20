---
sitemap_exclude: true
title: "Map Views"
layout: "single"
description: ""
components: true
component: map-views
images:
  - "/img/mobile/headers/map-views.png"
tags: [mobile, usage]
---
## Overview

Maps in a mobile environment should be interactive whenever possible. There are a range of gestures which can be used to interact with the map

## Common Gestures

- One-finger Single Tap
- One-finger Double Tap
- Two-finger Double Tap
- One-finger Press & Hold
- One-finger Panning
- Two-finger Rotate
- Two-finger Zoom-in (Spread)
- Two-finger Zoom-out (Pinch)
- Two-finger Tilt (2D/3D)

## Common Gestures

### One Finger Tap

A one-finger single tap is often used to trigger a single event and may vary based on use case. Common uses are but may not be limited to, making a selection, dropping a pin, displaying a map popup, displaying geolocation.

{{< img src="/img/mobile/maps-one-finger-tap.svg" dark="/img/mobile//maps-one-finger-tap-dark.svg" width="961" height="170" class="w-100" alt="Maps One Finger Tap" loading="auto" >}}

### One Finger Double Tap

A one-finger double tap is commonly used to zoom-in one level.

{{< img src="/img/mobile/maps-one-finger-double-tap.svg" dark="/img/mobile//maps-one-finger-double-tap-dark.svg" width="961" height="170" class="w-100" alt="Maps One Finger Double Tap" loading="auto" >}}

### Two Finger Double Tap

A two-finger double tap is commonly used to zoom-out one level.

{{< img src="/img/mobile/maps-two-finger-double-tap.svg" dark="/img/mobile//maps-two-finger-double-tap-dark.svg" width="961" height="170" class="w-100" alt="Maps One Finger Double Tap" loading="auto" >}}

### One-finger Press & Hold

A one-finger press & hold gesture can also be used to trigger a single event such displaying a popup or other information. This should only be used when the one-finger tap interaction is assigned to a different event.

{{< img src="/img/mobile/maps-one-finger-press-hold.svg" dark="/img/mobile//maps-one-finger-press-hold-dark.svg" width="961" height="170" class="w-100" alt="Maps One Finger Press & Hold" loading="auto" >}}

### One-finger Panning

Panning is typically a single-finger interaction. To pan, tap & hold the map with one finger and drag in any direction. A similar two-finger interaction can also be used when "tilt" is not part of the map interaction.

{{< img src="/img/mobile/maps-one-finger-panning.svg" dark="/img/mobile//maps-one-finger-panning-dark.svg" width="961" height="170" class="w-100" alt="Maps One Finger Panning" loading="auto" >}}

### Two-finger Rotate

To rotate a map, tap & hold 2 fingers on map and use a rotation gesture.

{{< img src="/img/mobile/maps-two-finger-rotate.svg" dark="/img/mobile//maps-two-finger-rotate-dark.svg" width="961" height="170" class="w-100" alt="Maps Two Finger Rotate" loading="auto" >}}

### Two-finger Zoom-In (Spread)

Zooming in can also be done by using two-fingers and a "spread" gesture.

{{< img src="/img/mobile/maps-two-finger-spread.svg" dark="/img/mobile//maps-two-finger-spread-dark.svg" width="961" height="170" class="w-100" alt="Maps Two-Finger Zoom in Spread" loading="auto" >}}

### Zoom-Out (Pinch)

To zoom out, using two-fingers, use a pinch gesture.

{{< img src="/img/mobile/maps-two-finger-pinch.svg" dark="/img/mobile//maps-two-finger-pinch-dark.svg" width="961" height="170" class="w-100" alt="Maps Two-Finger Zoom Out Pinch" loading="auto" >}}

### Tilt (2D/3D)

Some map applications can render their maps in both 2D & 3D view. To transition between 2D & 3D, with two-fingers use a push gesture to tilt map forward for 3D. To return to 2D, use two-fingers and a pull gesture.

{{< img src="/img/mobile/maps-tilt.svg" dark="/img/mobile//maps-tilt-dark.svg" width="961" height="170" class="w-100" alt="Maps Tilt" loading="auto" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
