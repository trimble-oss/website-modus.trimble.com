---
title: "Shadows and Depth"
menuTitle: "Shadows & Depth"
layout: "single"
description: "Shadows are used to focus the user’s attention and define spatial relationships."
foundations: true
group: foundations
bootstrapURL: "/foundations/shadows-and-depth/"
---

Shadows provide cues about depth, direction of movement, and surface edges. A surface’s shadow is determined by its elevation and relationship to other surfaces.

Because shadows express the degree of elevation between surfaces, they must be used consistently throughout your product. Objects with deeper shadows must be positioned above objects with smaller shadows in the z-index.

Trimble uses three levels of elevation specified by different depths of drop shadows:

<div class="row mb-3">

  <div class="col-12 col-sm-6 col-md-4 h-100">
    <div class="card shadow-sm">
      <div class="card-header py-4 bg-dark bg-opacity-10">
      <h3>Level 1</h3>
      </div>
      <div class="card-body py-1">
      <code>box-shadow:<br>
      0 0 2px rgba(37,42,46,.3);</code>
        <p class="mt-2">Used for: dropdowns, tooltips, default cards</p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 h-100">
    <div class="card shadow">
      <div class="card-header py-4 bg-dark bg-opacity-10">
      <h3>Level 2</h3>
      </div>
      <div class="card-body py-1">
      <code>box-shadow:<br>
      0 0 4px rgba(37,42,46,.3);</code>
        <p class="mt-2">
Used for: sticky elements, cards active</p>
      </div>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 h-100">
    <div class="card shadow-lg">
      <div class="card-header py-4 bg-dark bg-opacity-10">
      <h3>Level 3</h3>
      </div>
      <div class="card-body py-1">
      <code>box-shadow:<br>
      0 0 8px rgba(37,42,46,.3);</code>
        <p class="mt-2">Used for: dialogs, modals, cards hover</p>
      </div>
    </div>
  </div>

</div>

**Never use drop shadows on text, buttons, chips, sliders, or any other elements that do not include shadows in their guidelines.**

Standard drop shadow color is gray. Always adjust color opacity to retain a maximum contrast ratio of 1.5:1. **Avoid dark shadows.**

## Z-Index

Z-index is a CSS property that specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

{{< table "table table-bordered" >}}

| Z-index | Use             |
| ------- | --------------- |
| 1000    | Dropdowns       |
| 1020    | Sticky Elements |
| 1030    | Fixed Elements  |
| 1040    | Modal Backdrops |
| 1050    | Modal Dialogs   |
| 1060    | Popovers        |
| 1070    | Tooltips        |

{{</ table >}}
