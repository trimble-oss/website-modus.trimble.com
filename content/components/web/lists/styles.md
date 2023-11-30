---
title: "Lists"
layout: "single"
description: "A list can be used to display content related to a single subject."
components: true
componentsWeb: true
images:
  - "/img/components/headers/lists.png"
bootstrapURL: "/components/lists/"
reactBootstrapURL: "/components/lists/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-list--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

<style>
.list-group {
  max-width: 400px;
}
</style>

## Specifications

Lists are available in three sizes: default, condensed (small) and large.

<!--
- Default list: 40px height; 16px font size.
- Small list: 32px height; 12px font size.
- Large list: 48px height; 16px font size.
-->

### Default list

<div class="guide-example-block my-2 py-5 bg-secondary bg-opacity-10"><br>
  <div class="mx-auto"><br>
    <ul class="list-group" style="margin-left: 260px">
      <li class="list-group-item list-group-item-action active d-flex justify-content-between pe-none"
      style="height:40px; font-size:16px"
      data-bs-toggle="popover"
      data-bs-container="main"
      data-bs-placement="left"
      data-bs-custom-class="popover-css-inspector"
      data-css-inspector-hide="b-width width"
      data-css-inspector-show="">
        <span>List Item (Active)</span>
        <div style="width:32px;text-align:center">
          <i class="modus-icons notranslate" aria-hidden="true">check</i>
        </div>
      </li>
      <li class="list-group-item list-group-item-action d-flex justify-content-between" style="height: 40px;">
        <span style="font-size: 16px;">List Item with Menu</span>
        <div class="dropdown">
          <button
            class="btn btm-sm btn-icon-only btn-text-dark rounded-circle"
            style="margin-top:-8px"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-end"
            x-placement="bottom-end"
            style="position: absolute; transform: translate3d(-171px, 33px, 0); top: 0; left: 0; will-change: transform;"
          >
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
<div class="form-check">
  <input class="form-check-input me-2" type="checkbox" id="flexCheckDefault">
  <label for="flexCheckDefault">
    List Item with Checkbox
  </label>
</div>
      </li>
      <li class="list-group-item d-flex align-items-center">
        <i class="modus-icons notranslate me-2" aria-hidden="true" style="font-size: 16px;">dashboard</i>
        <div>List Item with Left Icon</div>
      </li>
    </ul>
  </div>
</div>

### Condensed list

<div class="guide-example-block my-2 py-4 bg-secondary bg-opacity-10"><br>
  <div class="mx-auto"><br>
    <ul class="list-group list-group-sm" style="margin-left: 260px">
  <li class="list-group-item list-group-item-action active pe-none"
      style="height:32px"
      data-bs-toggle="popover"
      data-bs-container="main"
      data-bs-placement="left"
      data-bs-custom-class="popover-css-inspector"
      data-css-inspector-hide="bg-color b-radius b-width color width"
      data-css-inspector-show=""
      >List Item (active)</li>
    <li class="list-group-item list-group-item-action" style="height: 32px;">
    <div class="form-check form-switch d-flex align-items-center">
    <input class="form-check-input me-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
    <label class="" for="flexSwitchCheckChecked">Left Switch</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action d-flex justify-content-between" style="height: 32px;">
  <div>
      <label for="flexSwitchCheckDefault">Right Switch</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
    </div>
  </li>

  <li class="list-group-item list-group-item-action d-flex align-items-center" style="height: 32px;">
    <div class="form-check">
      <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" checked>
    </div>
   <div>
     <label for="flexCheckDefault">Left checkbox</label>
   </div>
  </li>
</ul>
</div>
</div>

### Large list

<div class="guide-example-block my-2 py-5 bg-secondary bg-opacity-10"><br>
  <div class="mx-auto">
    <ul class="list-group list-group-lg" style="margin-left: 240px">
  <li class="list-group-item list-group-item-action active pe-none"
      style="height:48px; font-size:16px"
      data-bs-toggle="popover"
      data-bs-container="main"
      data-bs-placement="left"
      data-bs-custom-class="popover-css-inspector z-1"
      data-css-inspector-hide="bg-color b-radius b-width width"
      data-css-inspector-show="b-color"
      >List Item (active)</li>
  <li class="list-group-item  d-flex justify-content-between" style="min-height: 48px">
    <div class="form-check form-switch d-flex align-items-center">
      <input class="form-check-input me-2" type="checkbox" role="switch" id="LargeflexSwitchCheckDefault" checked>
      <label for="LargeflexSwitchCheckDefault">Left Switch</label>
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between" style="min-height: 48px">
  <div>
    <label for="LargeRflexSwitchCheckChecked" style="margin-top: 0;">Right Switch</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="LargeRflexSwitchCheckChecked" checked>
  </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" style="min-height: 48px">
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
    <label for="flexCheckDefault">
      Left checkbox
    </label>
    </div>
  </li>
</ul>
</div>
</div>

## Behaviors

- Basic lists contain a set of items displayed in rows. Each item is represented as a text label. Depending on the purpose of the list, each row may also be accompanied by a control, such as a checkbox or radio button. The user can also select a row to perform an action on the corresponding item.
- Complex lists contain a set of items displayed in rows. Each item is represented as a text label. In addition to the item label, the rows in a complex list contain multiple pieces of information for each item. Depending on the purpose of the list, each row may also be accompanied by a control. The user can also select a row to perform an action on the corresponding item.
  - Use when the user can benefit from viewing more information about each list item without needing to select the item first.
  - Use when the available space in the design does not let us display a table.

## Editorial

**Length**

- Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a [Table](/components/web/tables/).

**Order**

- Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts. Alternatively, organize in alphabetical or numeric order.

**Text**

- Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).
- We don’t always have control over the content in a list. Sometimes a list displays user-generated content, such as customer names. The default order of such a list is alphabetical or numeric by date.
- When we have control over list content, present the list items in sentence case (example: Your business name). The default order is alphabetical or numeric by date.
- In instruction copy, use the words, “select” and “clear” to guide users to make selections. Don’t use the word “deselect.” It’s robotic and can’t be translated easily.
- Don’t use punctuation in list items unless one of the list items includes more than one sentence. In that case, all the list items will have end punctuation.
