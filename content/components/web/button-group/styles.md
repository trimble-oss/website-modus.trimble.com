---
title: "Button Group"
layout: "single"
description: "Group a series of buttons together on a single line."
components: true
componentsWeb: true
images:
  - "/img/components/headers/button-group.png"
# bootstrapURL: "/components/button-group/"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
hidden: true
private: true
---

<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <input type="radio" class="btn-check" name="btnRadioLg" id="btnRadioLg1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnRadioLg1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnRadioLg" id="btnRadioLg2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadioLg2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnRadioLg" id="btnRadioLg3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadioLg3">Radio 3</label>
</div><br><br>
<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnRadio" id="btnRadio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnRadio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnRadio" id="btnRadio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnRadio" id="btnRadio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadio3">Radio 3</label>
</div>
<br><br>
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <input type="radio" class="btn-check" name="btnRadioSmall" id="btnRadioSmall1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnRadioSmall1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnRadioSmall" id="btnRadioSmall2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadioSmall2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnRadioSmall" id="btnRadioSmall3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnRadioSmall3">Radio 3</label>
</div>

<hr>

### Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>

<hr>

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon1" autocomplete="off" checked>
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon1"><svg width="24" height="24" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#wifi" /></svg></label>

  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon2" autocomplete="off">
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon2"><svg width="24" height="24" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#wifi-off" /></svg></label>

  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon3" autocomplete="off">
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon3"><svg width="24" height="24" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#wifi-no-internet" /></svg></label>
</div>

<style>
  .btn-group:not(.btn-group-sm):not(.btn-group-lg) label.btn-icon-only {
    height: 32px;
    width: 32px;
    padding-top: 2px;
  }
</style>

<hr>

### Vertical button group

<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="vbtn-radio1">Radio 1</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio2">Radio 2</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio3">Radio 3</label>
</div>
