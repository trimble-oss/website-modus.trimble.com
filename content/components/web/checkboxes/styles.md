---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
componentsWeb: true
images:
  - "/img/components/headers/checkboxes.png"
keywords: forms, form
bootstrapURL: "/docs/v2/components/checkboxes/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-checkbox--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

- Checkboxes use the same `:hover` and `:active` styles as the primary [Button](/components/web/buttons/) when checked.

<div class="guide-example-block bg-secondary py-5" style="padding-left: 240px !important; --bs-bg-opacity: 0.03; min-height: 120px">
  <div class="guide-sample py-2">
  <div class="form-check my-2">
  <input class="form-check-input pe-none"
    type="checkbox"
    id="flexCheckChecked"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="color font-size margin padding"
    checked>
  <label class="form-check-label pe-none"
    for="flexCheckChecked"
    style="font-size: 14px;"
    data-bs-toggle="popover"
    data-bs-placement="right"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="bg-color b-radius height margin padding">
    Checked checkbox
  </label>
</div>
</div>
</div>

<div class="guide-example-block bg-secondary py-5" style="padding-left: 240px !important; --bs-bg-opacity: 0.03; min-height: 120px">
  <div class="guide-sample py-2">
  <div class="form-check-sm my-2">
  <input class="form-check-input pe-none"
    type="checkbox"
    id="flexCheckSmallChecked"
    data-bs-toggle="popover"
    data-bs-placement="left"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="color font-size margin padding"
    checked>
  <label class="form-check-label pe-none"
    for="flexCheckSmallChecked"
    style="font-size: 12px;"
    data-bs-toggle="popover"
    data-bs-placement="right"
    data-bs-custom-class="popover-css-inspector"
    data-css-inspector-hide="bg-color b-radius height margin padding">
    Checked Small checkbox
  </label>
</div>
</div>
</div>

### Behaviors

- Reflects the affirmative (“yes” or “true”) of its label when checked.
- Choices made via checkbox should always be submitted or saved using a [Button](/components/web/buttons/).
- A checkbox’s label is included in the clickable target area.
- The default view of a set of checkboxes is having no option selected.

### Editorial

- Checkbox labels may be capitalized in two ways, depending on their length and placement on the UI:
  - Use title case for short labels (fewer than 3 words) that are to the left or above a checkbox.
  - Use sentence case for longer labels (more than 3 words) that are placed to the right of a checkbox, especially if the label reads like a phrase.

**Default**

- Use full sentences with punctuation.
- If user is consenting to something, start the sentence with “I,” and also run the phrasing you choose by compliance.

**Groups**

- Use full sentences with punctuation for the checkbox group label.
- Try to keep checkbox labels brief and start them with verbs.
