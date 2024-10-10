---
title: "Progress Bars"
layout: "single"
description: "Progress indicators express an unspecified wait time or display the length of a process."
components: true
componentsWeb: true
images:
  - "/img/components/headers/progress-bars.png"
aliases:
  - "/components/progress/"
  - "/components/progress-bars/"
bootstrapURL: "/docs/v2/components/progress-bars/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-progress-bar--default"
tags: [usage]
---

## Overview

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen. Progress indicators generally have negative connotations among users. Use them sparingly. Instead, focus on optimizing loading.

<div class="guide-example-block mb-2 bg-secondary bg-opacity-10">
  <div class="guide-sample p-4 p-md-5 mx-auto text-center">
    <div class="progress progress-sm">
      <div
        id="progressExample"
        class="progress-bar"
        role="progressbar"
        aria-label="example progress bar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</div>

## Usage

#### Use when

- You want to reduce a user's uncertainty. Reassure the user that your app/ website is working.
- You want to reduce the user's perception of time and offer them a reason to wait.

#### Don't use when

- You want to indicate progress inside smaller elements, such as buttons, chips, or badges.

{{< whats-changed-table >}}

| Date       | Version | Notes                                      | Contributors                   |
| ---------- | ------- | ------------------------------------------ | ------------------------------ |
| 11/23/2020 | 1.0.0   | Background color changed to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
