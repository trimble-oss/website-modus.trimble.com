---
title: "Toolbar"
layout: "single"
description: "Toolbar consists of a series of icon buttons occupying minimum workspace."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toolbar.png"
tags: [usage]
---

## Overview

A toolbar is a floating element consisting of a row or a column of icon butttons used to activate controls in an application. It can consist of a series of icon buttons separated or combined together. Toolbars are fixed in one position on the screen.

A toolbar allows for a maximum workspace and maintains an unobstructed view of the UI content.

## Usage

#### Use when

- Full-screen usage and unobstructed view of the content is critical, e.g., in graphic applications.
- Providing a contextual menu benefits the user’s productivity.
- Offering tools near to the objects being worked on is essential.

#### Don't use when

- You need to navigate between content within the application. Instead, use [Side Navigation](/components/web/side-navigation/) or [Content Tree](/components/web/content-tree/).
- A more robust set of tools needs to be displayed. Instead, use [Utility Panel](/components/web/utility-panel/).
- Actions are directly coupled with specific elements on the page.

## Types

Toolbars can be classified by their layout as follows:

### With Separate Buttons

Icon buttons are aligned next to each other (horizontally or vertically), but not connected.

{{< img src="/img/components/floating-toolbar-single-buttons-example.svg" dark="/img/components/floating-toolbar-single-buttons-example-dark.svg" class="bg-light" width="220" height="166" alt="Floating Toolbar single buttons example" loading="lazy" >}}

### With Combined Buttons

Icon buttons are connected vertically or horizontally.

{{< img src="/img/components/floating-toolbar-combined-vertical-example.svg" dark="/img/components/floating-toolbar-combined-vertical-example-dark.svg" class="bg-light" width="220" height="166" alt="Floating Toolbar vertical example" loading="lazy" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                              |
| ---------- | ------- | -------------------- | --------------------------------------------------------- |
| 09/18/2023 | 1.0.0   | New component added. | K. Davies, E. Gunther, S. Kaukonen, S.A. Reda, D. Silcock |

{{</ whats-changed-table >}}
