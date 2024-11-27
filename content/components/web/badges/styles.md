---
title: "Badges"
layout: "single"
description: "Badges are non-interactive labels which hold small amounts of information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/badges.png"
bootstrapURL: "/docs/v2/components/badge/"
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
          Primary Badge
        </div>
         <br /><br /><br><br>
        <div
          class="badge bg-secondary me-3 me-xxl-auto mt-5"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="font-weight font-size height padding text-align b-radius margin">
          Secondary Badge
        </div>
        <br />
        <div
          class="badge text-bg-tertiary me-3 me-xxl-auto mt-5"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="font-weight font-size height padding text-align b-radius margin">
          Tertiary Badge
        </div>
        <br />
        <div
          class="badge bg-high-contrast me-3 me-xxl-auto mt-5"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="font-weight font-size height padding text-align b-radius margin">
          High Contrast Badge
        </div>
         <br />
        <div
          class="badge bg-success me-3 me-xxl-auto mt-5"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="font-weight font-size height padding text-align b-radius margin">
          Success Badge
        </div>
          <br />
        <div
          class="badge bg-danger me-3 me-xxl-auto mt-5"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="font-weight font-size height padding text-align b-radius margin">
          Danger Badge
        </div>
        <br />
        <div
          class="badge text-bg-warning me-3 me-xxl-auto mt-5"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="font-weight font-size height padding text-align b-radius margin">
          Warning Badge
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
     <tr>
      <th scope="row" height="327">Text</th>
      <td class="text-start py-4">
        <div
          class="badge text-primary me-2 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="padding text-align margin height border-radius bg-color b-radius font-weight">
          Primary
        </div>
        <br /><br><br>
        <div
          class="badge text-secondary me-2 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="padding text-align margin height border-radius bg-color b-radius font-weight">
          Secondary
        </div>
        <br /><br><br>
        <div
          class="badge text-body me-2 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="padding text-align margin height border-radius bg-color b-radius font-weight">
          High Contrast
        </div>
         <br /><br><br>
        <div
          class="badge text-danger me-2 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="padding text-align margin height border-radius bg-color b-radius font-weight">
          Danger
        </div>
         <br /><br><br>
        <div
          class="badge text-success me-2 me-xxl-auto"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="padding text-align margin height border-radius bg-color b-radius font-weight">
          Success
        </div>
        <br />
      </td>
      <td>Display a more subtle label</td>
    </tr>
  </tbody>
</table>
