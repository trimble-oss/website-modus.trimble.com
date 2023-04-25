---
title: "Badges"
layout: "single"
description: "Badges are non-interactive labels which hold small amounts of information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/badges.png"
bootstrapURL: "/components/badges/"
reactBootstrapURL: "/components/badges/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-badge--default"
tags: [styles]
---

## Specifications

Badges come in 3 defined heights:

- **Small**: 14px
- **Default**: 20px
- **Large**: 28px

Badges should be centered vertically inside of their containing element.

**Font weight:** 700

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Example</th>
      <th>Height</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Small</th>
      <td class="anatomy-cell">
        <span
          data-anatomy-colors="false"
          class="badge badge-sm badge-primary anatomy-display-static"
          >Badge</span
        >
      </td>
      <td>14px</td>
      <td>Inside lists or other elements</td>
    </tr>
    <tr>
      <th scope="row">Default</th>
      <td class="anatomy-cell">
        <span
          data-anatomy-colors="false"
          class="badge badge-primary anatomy-display-static"
          >Badge</span
        >
      </td>
      <td>20px</td>
      <td>Stand-alone or inside lists</td>
    </tr>
    <tr>
      <th scope="row">Large</th>
      <td class="anatomy-cell">
        <span
          data-anatomy-colors="false"
          class="badge badge-lg badge-primary anatomy-display-static"
          >Badge</span
        >
      </td>
      <td>28px</td>
      <td>Stand-alone for emphasis</td>
    </tr>
  </tbody>
</table>

### Colors

| Element               | Property   | Color                                                                   |
| --------------------- | ---------- | ----------------------------------------------------------------------- |
| Badge (Primary)       | Background | {{< color-preview nameL=" " hexL="#0063a3" nameD=" " hexD="#019aeb" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#ffffff" >}} |
| Badge (Secondary)     | Background | {{< color-preview nameL=" " hexL="#6a6e79" nameD=" " hexD="#6a6e79" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#ffffff" >}} |
| Badge (Tertiary)      | Background | {{< color-preview nameL=" " hexL="#cbcdd6" nameD=" " hexD="#cbcdd6" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#252a2e" nameD=" " hexD="#252a2e" >}} |
| Badge (High Contrast) | Background | {{< color-preview nameL=" " hexL="#252a2e" nameD=" " hexD="#F1F1F6" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#171C1E" >}} |
| Badge (Success)       | Background | {{< color-preview nameL=" " hexL="#006638" nameD=" " hexD="#1E8A44" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#ffffff" >}} |
| Badge (Warning)       | Background | {{< color-preview nameL=" " hexL="#fbad26" nameD=" " hexD="#fbad26" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#252A2E" nameD=" " hexD="#ffffff" >}} |
| Badge (Danger)        | Background | {{< color-preview nameL=" " hexL="#da212c" nameD=" " hexD="#da212c" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#ffffff" >}} |
{class="table table-bordered table-sm table-colors"}
