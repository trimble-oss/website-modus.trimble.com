---
title: "Utility Panel"
layout: "single"
description: "Utility panel is a container which provides extra content alongside the primary screen content."
components: true
componentsWeb: true
images:
  - "/img/components/headers/utility-panel.png"
tags: [usage]
---

## Overview

The utility panel is designed to add additional content (usually on the right-hand side of the user interface) to a full-screen application. It is located alongside the primary content of the page and activated by a call to action, e.g., by a [Button](/components/web/buttons/).

## Usage

#### Use When

- You need extra content alongside the primary content.
- You need to interact with the primary content (e.g. adding, editing, saving).
- You want to provide supplemental tasks required by the underlying page.

#### Don't Use When

- You need to navigate between pages of an application. Instead, use [Side Navigation](/components/web/side-navigation/).
- You need to display important warnings. Instead, use [Modal](/components/web/modal/).
- You are designing for a mobile application - use the mobile-specific utility panel – **_Coming soon!_**

## Types

When the utility panel is being used by the user, it opens a window (panel). This functionality either:

1. Overlays the page content (with or without a background overlay), or
2. Pushes the page’s content.

Do not use both types in one application.
When the utility panel is inactive, it is closed. It can be triggered again by a call to action.

### Float-Over-Page Overlay Utility Panel (recommended)

- The utility panel overlaps the content of the page.
- Use this type of side panel when the content on the page is difficult to resize.

<video width="400" controls autoplay="false" disablepictureinpicture disableremoteplayback muted="true">
  <source src="/img/components/utility-panel-overlay.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Push Utility Panel

- The utility panel pushes the content of the page. The content is scaled down.

<video width="400" controls autoplay="false" disablepictureinpicture disableremoteplayback muted="true">
  <source src="/img/components/utility-panel-push.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                                            |
| ---------- | ------- | -------------------- | ----------------------------------------------------------------------- |
| 06/20/2023 | 1.0.0   | New component added. | J. de Wit, C. Cuellar, A. Galstyan, E. Gunther, S. Kaukonen. D. Silcock |

{{</ whats-changed-table >}}
