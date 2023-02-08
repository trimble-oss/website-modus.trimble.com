---
sitemap_exclude: true
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
images:
  - "/img/mobile/headers/sliders.png"
keywords: forms, form, range
component: sliders
tags: [mobile, styles]
---

## Specifications

- Always use with a label, even if that label is hidden.
- When a label is visible, it should clearly communicate the purpose of the range input and its values (min, max, step, value).
- Label sliders as optional when input is not required.
- Validate input as soon as users have finished interacting with a field (but not before).
- Always use with two text field components when range slider has dual thumbs to provide accessible alternatives to both the lower and upper thumbs.

### Sizes

Sliders are available in the following sizes: Small, Medium (Default), and Large.

{{< img src="/img/mobile/sliders-sizes.svg" dark="/img/mobile/sliders-sizes-dark.svg" width="962" height="344" alt="Sliders Sizes" loading="auto" >}}

### States

Sliders have the following states: Default, Focus, and Disabled.

{{< img src="/img/mobile/sliders-states.svg" dark="/img/mobile/sliders-states-dark.svg" width="961" height=120" alt="Sliders States" loading="auto" >}}

### Types

#### Continuous Sliders

Continuous sliders allow users to make selections along a subjective range thus don’t require a specific value.

{{< img src="/img/mobile/sliders-continuous.svg" dark="/img/mobile/sliders-continuous-dark.svg" width="961" height="797" alt="Sliders Continuous With No Labels" loading="auto" >}}

#### Discrete Sliders

Discrete sliders display a numeric value label upon dragging the handle, or allow users to input an exact value. Tick marks are also often used with discrete slides but are optional.

{{< img src="/img/mobile/sliders-discrete.svg" dark="/img/mobile/sliders-discrete-dark.svg" width="961" height="286" alt="Sliders Discrete with Tooltip showing" loading="auto" >}}

## Behaviors

- Adjust a slider’s value(s) by clicking and dragging its handle(s), or by clicking anywhere on its bar.
- Changes made with sliders are immediate.
