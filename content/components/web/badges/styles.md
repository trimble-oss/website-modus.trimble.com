---
title: "Badges"
layout: "single"
description: "Badges are non-interactive labels which hold small amounts of information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/badges.png"
bootstrapURL: "/docs/v2/components/badges/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-badge--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

Badges should be centered vertically inside of their containing element.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th width="90px"></th>
      <th>Example</th>
      <th width="250px">Use case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" height="203">Small</th>
      <td class="text-start py-5">
        <br /><br />
        <div
          class="badge badge-sm bg-primary me-4 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="">
          Badge
        </div>
        <br />
      </td>
      <td>Inside lists or other elements</td>
    </tr>
    <tr>
      <th scope="row" height="203">Default</th>
      <td class="text-start py-5">
        <br /><br />
        <div
          class="badge bg-primary me-3 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="">
          Badge
        </div>
        <br />
      </td>
      <td>Stand-alone or inside lists</td>
    </tr>
    <tr>
      <th scope="row" height="203">Large</th>
      <td class="text-start py-5">
        <br /><br />
        <div
          class="badge badge-lg bg-primary me-2 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="">
          Badge
        </div>
        <br />
      </td>
      <td>Stand-alone for emphasis</td>
    </tr>
  </tbody>
</table>

### Colors

<!-- prettier-ignore-start -->
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
|                       | Text       | {{< color-preview nameL=" " hexL="#252A2E" nameD=" " hexD="#252A2E" >}} |
| Badge (Danger)        | Background | {{< color-preview nameL=" " hexL="#da212c" nameD=" " hexD="#da212c" >}} |
|                       | Text       | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#ffffff" >}} |
{class="table table-bordered table-sm table-colors"}
<!-- prettier-ignore-end -->
