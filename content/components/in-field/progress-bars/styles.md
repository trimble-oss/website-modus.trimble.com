---
title: "Progress Bars"
layout: "single"
description: "Progress indicators express an unspecified wait time or display the length of a process."
components: true
component: progress-bars
images:
  - "/img/infield/headers/progress-bars.png"
tags: [infield, styles]
---

## Specifications

A progress bar is represented by a white bar that is filled with color over time as loading occurs. 

### Anatomy

<!-- prettier-ignore-start -->
| Size    | Example                                                                                                                | Height |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |--------|
| Default | {{< img src="/img/in-field/progress-bar-spec.svg" dark="/img/in-field/progress-bar-spec-dark.svg" width="700" alt="Example Size" >}} | 16dp   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

## Behaviors

- A progress indicator should fill up to completion as background loading tasks are complete.
- Whenever possible, show the user a textual representation of their progress that corresponds to the loading indicator.
