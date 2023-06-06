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
---

## Specifications

There are two sizes of Chips:

- By default, Chips should have a height of 30px, border radius 16px and a font size 13px
- Smaller variant will have a height of 24px, border radius 16px and a font size 12px

<style>
[data-theme=dark] .chip-solid:not(:disabled):not(.disabled):not(.error):active, [data-theme=dark] .chip-solid:not(:disabled):not(.disabled):not(.error).active {
  background-color: #019AEB!important;
}
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.css">

<table class="table table-bordered w-100" style="width:fit-content">
  <thead class="thead-light">
    <tr>
      <th width="100"></th>
      <th>Example</th>
      <th width="100">Height</th>
    </tr>
  </thead>
  <tbody>
    <tr style="height:80px">
      <th scope="row">Default</th>
      <td class="anatomy-cell text-center">
        <div class="chip chip-solid chip-input anatomy-display-static" data-anatomy-colors="false" role="alert" data-toggle="popover" data-trigger="manual" data-html="true" data-placement="left" data-content="<small><b>font-size:</b> 13px<br><b>border-radius:</b> 16px<br></small>">
        <div class="chip-thumbnail">
          <img src="/img/headshot.png" height="24" width="24" alt="" />
        </div>
        <div class="chip-text">Clifford</div>
        <div class="chip-delete-right">
          <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
        </div>
      </div>
      </td>
      <td>30px</td>
    </tr>
    <tr style="height:80px">
      <th scope="row">Small</th>
      <td class="anatomy-cell text-center">
        <div class="chip chip-sm chip-solid chip-input anatomy-display-static" data-anatomy-colors="false" role="alert" data-toggle="popover" data-trigger="manual" data-html="true" data-placement="left" data-content="<small><b>font-size:</b> 12px<br><b>border-radius:</b> 16px<br></small>">
        <div class="chip-thumbnail">
          <img src="/img/headshot.png" height="16" width="16" alt="">
        </div>
        <div class="chip-text">Jane</div>
        <div class="chip-delete-right"><i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i></div>
      </div>
      </td>
      <td>24px</td>
    </tr>
  </tbody>
</table>

Input chips can be in any of the following states:

<table class="table table-bordered w-75">
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
        <div class="chip chip-solid chip-input">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Hover</th>
      <td>
        <div class="chip chip-solid chip-input hover">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input hover">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Active</th>
      <td>
        <div class="chip chip-solid chip-input active">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input active">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Error</th>
      <td>
        <div class="chip chip-solid chip-input error">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input error">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Disabled</th>
      <td>
        <div class="chip chip-solid chip-input disabled">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" loading="lazy" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Clifford</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
      <td>
        <div class="chip chip-outline chip-input disabled">
          <div class="chip-thumbnail">
            <img src="/img/headshot.png" loading="lazy" height="24" width="24" alt="" />
          </div>
          <div class="chip-text">Jeff</div>
          <div class="chip-delete-right">
            <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<br>

<div class="guide-example-block">
  <div class="guide-sample" id="filterChipsExample">
    <span class="h4 d-block">Choose Amenities</span>
    <div class="chip chip-solid chip-filter mr-2 active">
      <div class="chip-icon-left"><i class="modus-icons notranslate" aria-hidden="true">check</i></div>
      <div class="chip-text">Elevator</div>
    </div>
    <div class="chip chip-solid chip-filter mr-2">
      <div class="chip-text">Pets OK</div>
    </div>
    <div class="chip chip-solid chip-filter mr-2">
      <div class="chip-text">Washer/Dryer</div>
    </div>
    <div class="chip chip-solid chip-filter mr-2">
      <div class="chip-text">Pool</div>
    </div>
    <div class="chip chip-solid chip-filter mr-2">
      <div class="chip-text">Free Wi-Fi</div>
    </div>
  </div>
</div>

### Behaviors

- Tap a chip to select it.
- Multiple chips can be selected or unselected.
