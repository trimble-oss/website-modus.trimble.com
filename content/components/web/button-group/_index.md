---
title: "Button Group"
layout: "single"
description: "Group a series of buttons together on a single line."
components: true
componentsWeb: true
images:
  - "/img/components/headers/button-group.png"
# bootstrapURL: "/components/button-group/"
tags: [usage]
aliases:
  - "/components/web/button-groups/"
hidden: true
draft: true
private: true
---

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon1" autocomplete="off" checked>
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon1">
  <svg width="24" height="24" fill="currentColor">
    <use xlink:href="/modus-solid-icons.svg#wifi" /></svg>
  </label>
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon2" autocomplete="off">
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon2">
  <svg width="24" height="24" fill="currentColor">
    <use xlink:href="/modus-solid-icons.svg#wifi-off" /></svg>
  </label>
  <input type="radio" class="btn-check" name="btnRadioIcon" id="btnRadioIcon3" autocomplete="off">
  <label class="btn btn-outline-primary btn-icon-only" for="btnRadioIcon3">
  <svg width="24" height="24" fill="currentColor">
    <use xlink:href="/modus-solid-icons.svg#wifi-no-internet" /></svg>
  </label>
</div>

<style>
  .btn-group:not(.btn-group-sm):not(.btn-group-lg) label.btn-icon-only {
    padding-top: 2px;
    padding-right: .25rem!important;
    padding-left: .25rem!important;
  }
</style>
