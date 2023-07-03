---
title: "Spinners"
layout: "single"
description: "Spinners indicate progress by showing users a loading state."
components: true
componentsWeb: true
images:
  - "/img/components/headers/spinners.png"
bootstrapURL: "/components/spinners/"
reactBootstrapURL: "/components/spinners/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-spinner--default"
aliases:
  - "/components/spinners/"
tags: [usage]
---

## Overview

Spinners are used as indeterminate progress indicators to show the user that there are processes happening in the background.

<div class="guide-example-block d-flex">
  <div class="guide-sample text-center text-primary mx-3">
    <div class="spinner-border">
    <span class="sr-only visually-hidden">Loading...</span>
    </div>
  </div>
</div>

## Usage

#### Use When

- Indicating to the user that loading is occurring in the background.
- Loading times are indeterminate.

#### Don't Use When

- A loading scenario needs to indicate progress, usually with particularly long load times. Use a dynamically updating [Progress Bar](/components/web/progress-bars/) instead.
- A main loading state is needed, such as an app initialization. In this case, forego our simple spinner, and opt to use a custom, branded one instead.
