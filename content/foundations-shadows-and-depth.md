---
title: "Shadows & Depth"
layout: "single"
description: "Shadows are used to focus the user’s attention and define spatial relationships."
image: "/img/headers/shadows-and-depth.jpg"
foundations: true
aliases:
  - "/depth.html"
  - "/shadows.html"
url: "/foundations/shadows-and-depth/"
---

Shadows provide cues about depth, direction of movement, and surface edges. A surface’s shadow is determined by its elevation and relationship to other surfaces.

Because shadows express the degree of elevation between surfaces, they must be used consistently throughout your product. Objects with deeper shadows must be positioned above objects with smaller shadows in the z-index.

Trimble uses three levels of elevation specified by different depths of drop shadows:

<div class="row mb-3">

  <div class="col-12 col-sm-6 col-md-4 h-100">
    <div class="card shadow-sm">
      <div class="card-header py-4 bg-light">
      <h3>Level 1</h3>
      </div>
      <div class="card-body py-1">
      <code>box-shadow:<br>
      0 0 2px rgba(0,95,158,.3);</code>
        <p class="mt-2">Used for: dropdowns, tooltips, default cards</p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 h-100">
    <div class="card shadow">
      <div class="card-header py-4 bg-light"><h3>Level 2</h3>
      </div>
      <div class="card-body py-1">
      <code>box-shadow:<br>
      0 0 4px rgba(0,95,158,.3);</code>
        <p class="mt-2">
Used for: sticky elements, cards active</p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 h-100">
    <div class="card shadow-lg">
      <div class="card-header py-4 bg-light"><h3>Level 3</h3>
      </div>
      <div class="card-body py-1">
      <code>box-shadow:<br>
      0 0 8px rgba(0,95,158,.3);</code>
        <p class="mt-2">Used for: dialogs, modals, cards hover</p>
      </div>
    </div>
  </div>

</div>

**Never use drop shadows on text, buttons, chips, sliders, or any other elements that do not include shadows in their guidelines.**

Standard drop shadow color is blue. Always adjust color opacity to retain a maximum contrast ratio of 1.5:1. **Avoid dark shadows.**

## Z-Index

Z-index is a CSS property that specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Z-index</th>
      <th>Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row" class="font-weight-bold">1000</td>
      <td>Dropdowns</td>
    </tr>
    <tr>
      <td scope="row" class="font-weight-bold">1020</td>
      <td>Sticky Elements</td>
    </tr>
    <tr>
      <td scope="row" class="font-weight-bold">1030</td>
      <td>Fixed Elements</td>
    </tr>
    <tr>
      <td scope="row" class="font-weight-bold">1040</td>
      <td>Modal Backdrops</td>
    </tr>
    <tr>
      <td scope="row" class="font-weight-bold">1050</td>
      <td>Modal Dialogs</td>
    </tr>
    <tr>
      <td scope="row" class="font-weight-bold">1060</td>
      <td>Popovers</td>
    </tr>
    <tr>
      <td scope="row" class="font-weight-bold">1070</td>
      <td>Tooltips</td>
    </tr>
  </tbody>
</table>
