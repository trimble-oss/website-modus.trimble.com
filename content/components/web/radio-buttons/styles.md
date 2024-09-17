---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when options are mutually exclusive."
components: true
componentsWeb: true
images:
  - "/img/components/headers/radio-buttons.png"
keywords: forms, form
bootstrapURL: "/docs/v2/components/radio-buttons/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-radio-group--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

<div
  class="guide-example-block bg-secondary py-5 mb-2"
  style="padding-left: 290px; --bs-bg-opacity: 0.03">
  <div class="guide-sample py-3">
    <div class="form-check my-2 mb-5 pb-5">
      <input
        class="form-check-input pe-none"
        style="height:16px; width:16px;"
        type="radio"
        name="Radios"
        id="Radios1"
        value="option1"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius color font-size margin padding"
        data-css-inspector-show="b-color" />
      <label
        class="form-check-label pe-none"
        for="Radios1"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="bg-color b-radius height margin padding"
        data-css-inspector-show="">
        Radio
      </label>
    </div>
    <hr class="visually-hidden" style="margin-top: 90px;">
    <div class="form-check-sm my-2 mt-5" style="margin-top: 90px;">
      <input
        class="form-check-input pe-none"
        type="radio"
        name="Radios"
        id="Radios2"
        value="option1"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius b-width bg-color color font-size margin padding"
        data-css-inspector-show="" />
      <label
        class="form-check-label pe-none"
        for="Radios2"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="bg-color b-radius height margin padding"
        data-css-inspector-show="">
        Small Radio
      </label>
    </div>
  </div>
</div>

- Always stack radio buttons vertically. Horizontal variation should not be used.
- Uses the same `:hover` and `:active` styles as the primary [Button](/components/web/buttons/).
- A set of radio buttons should not default to having one option selected.
- A heading much accompany a set of radio buttons.
- Small radio buttons can only be used within tables

<table class="table table-bordered">
  <tr>
    <td width="50%">
   <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Radio 1
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Radio 2
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
  <label class="form-check-label" for="exampleRadios3">
    Radio 3
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4">
  <label class="form-check-label" for="exampleRadios4">
    Radio 4
  </label>
</div>
    </td>
    <td>
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">Radio 1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">Radio 2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">Radio 3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3">
  <label class="form-check-label" for="inlineRadio4">Radio 4</label>
</div>
</div>
    </td>
  </tr>
  <tr>
    <td class="do">
      <strong class="text-success">Do</strong> stack options for clear visual
      scanning
    </td>
    <td class="dont">
      <strong class="text-danger">Don’t</strong> span horizontally as it is more
      difficult to scan
    </td>
  </tr>
</table>

### Behaviors

- A set of radio buttons should default to having one option selected, generally the first option. However, if pre-selection of an option results in incorrect assumptions (i.e., "Male" or "Female") then no option should be selected by default.
- If selecting no option is a viable choice, include a radio button within the group with an appropriate label, i.e. “None”.
- A radio button’s label is part of the clickable area of the control.

### Editorial

- If necessary, a heading can accompany a set of radio buttons to provide further clarity for the user. Use sentence-case (only the first word in a phrase and any proper nouns capitalized).
- Always use a clear and concise label for radio buttons. Be explicit about the action that will follow if the radio button is selected. Labels appear to the right of radio buttons. Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words.
