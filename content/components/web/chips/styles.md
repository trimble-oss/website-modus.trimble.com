---
title: "Chips"
layout: "single"
description: "Chips represent small blocks of information and are commonly used for input or filtering."
components: true
componentsWeb: true
images:
  - "/img/components/headers/chips.png"
bootstrapURL: "/components/chips/"
reactBootstrapURL: "/components/chips/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-chip--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

<style>
[data-bs-theme=dark] .chip-solid:not(:disabled):not(.disabled):not(.error):active, [data-bs-theme=dark] .chip-solid:not(:disabled):not(.disabled):not(.error).active {
  background-color: #019AEB!important;
}
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.css">

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th width="100"></th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="height:180px">
      <th scope="row">Default</th>
      <td class="text-center align-middle py-5"><br><br>
        <button class="chip chip-solid chip-input pe-none"
          type="button"
          data-bs-toggle="popover"
          data-bs-custom-class="popover-css-inspector"
          data-bs-container="td"
          data-bs-placement="left"
          data-css-inspector-hide="text-align"
          style="font-size: 12px">
        <div class="chip-thumbnail">
          <img src="/img/headshot.png" height="24" width="24" alt="" />
        </div>
        <div class="chip-text">Clifford</div>
        <div class="chip-delete-right">
          <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
        </div>
      </button><br><br><br>
      </td>
    </tr>
    <tr>
      <th scope="row">Small</th>
      <td class="text-center align-middle py-3" style="height:180px">
        <button class="chip chip-sm chip-solid chip-input pe-none"
          type="button"
          data-bs-toggle="popover"
          data-bs-custom-class="popover-css-inspector"
          data-bs-container="td"
          data-bs-placement="left"
          data-css-inspector-hide="text-align"
          style="font-size: 12px">
        <div class="chip-thumbnail">
          <img src="/img/headshot.png" height="16" width="16" alt="">
        </div>
        <div class="chip-text">Jane</div>
        <div class="chip-delete-right"><i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i></div>
      </button>
      </td>
    </tr>
  </tbody>
</table>

Input chips can be in any of the following states:

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Solid</th>
      <th>Outline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Default</th>
      <td>
        <button class="chip chip-solid chip-input pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
      <td>
        <button class="chip chip-outline chip-input pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jane</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td>
        <button class="chip chip-solid chip-input hover pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
      <td>
        <button class="chip chip-outline chip-input hover pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jane</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
    </tr>
    <tr>
      <th scope="row">Active</th>
      <td>
        <button class="chip chip-solid chip-input active pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
      <td>
        <button class="chip chip-outline chip-input active pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jane</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
    </tr>
    <tr>
      <th scope="row">Error</th>
      <td>
        <button class="chip chip-solid chip-input error pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
      <td>
        <button class="chip chip-outline chip-input error pe-none">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jane</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td>
        <button class="chip chip-solid chip-input disabled" disabled>
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" loading="lazy" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
      <td>
        <button class="chip chip-outline chip-input disabled" disabled>
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" loading="lazy" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jane</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </button>
      </td>
    </tr>
  </tbody>
</table>
<br>

<div class="guide-example-block">
  <div class="guide-sample" id="filterChipsExample">
    <span class="h4 d-block">Choose Amenities</span>
    <button class="chip chip-solid chip-filter me-2 active">
      <div class="chip-icon-left"><i class="modus-icons notranslate" aria-hidden="true">check</i></div>
      <div class="chip-text">Elevator</div>
    </button>
    <button class="chip chip-solid chip-filter me-2">
      <div class="chip-text">Pets OK</div>
    </button>
    <button class="chip chip-solid chip-filter me-2">
      <div class="chip-text">Washer/Dryer</div>
    </button>
    <button class="chip chip-solid chip-filter me-2">
      <div class="chip-text">Pool</div>
    </button>
    <button class="chip chip-solid chip-filter me-2">
      <div class="chip-text">Free Wi-Fi</div>
    </button>
  </div>
</div>

### Behaviors

- Tap a chip to select it.
- Multiple chips can be selected or unselected.
