---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
componentsWeb: true
images:
  - "/img/components/headers/tabs.png"
BootstrapURL: "/docs/v2/components/tabs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tabs--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

<style>
[data-bs-theme="light"] .nav-tabs .nav-link.hover {
  background-color: #E0E1E9 !important;
}
</style>

## Specifications

<div class="guide-example-block my-3 py-4 bg-secondary bg-opacity-10">
  <div class="guide-content-sample text-center">
    <div class="py-5">
    <div class="py-5">
      <ul class="nav nav-tabs" style="margin-left: 340px; max-width: fit-content">
        <li class="nav-item pe-none">
          <a
            class="nav-link pe-none"
            href="#"
            data-bs-placement="left"
            data-bs-toggle="popover"
            data-bs-custom-class="popover-css-inspector"
            data-css-inspector-hide="margin height"
            data-css-inspector-show=""
            data-bs-container=".guide-content-sample">Default</a>
        </li>
      </ul>
    </div>
    </div>
    <div class="py-5">
    <div class="py-5">
      <ul class="nav nav-tabs" style="margin-left: 340px; max-width: fit-content">
        <li class="nav-item pe-none">
          <a
            class="nav-link active pe-none"
            href="#"
            data-bs-placement="left"
            data-bs-toggle="popover"
            data-bs-custom-class="popover-css-inspector"
            data-css-inspector-hide="margin height"
            data-css-inspector-show="b-color"
            data-bs-container=".guide-content-sample">Active/Selected</a>
        </li>
      </ul>
    </div>
    </div>
    <div class="py-5">
    <div class="py-5">
      <ul class="nav nav-tabs" style="margin-left: 340px; max-width: fit-content">
        <li class="nav-item pe-none">
          <a
            class="nav-link hover text-decoration-none pe-none"
            href="#"
            data-bs-placement="left"
            data-bs-toggle="popover"
            data-bs-custom-class="popover-css-inspector"
            data-css-inspector-hide="b-color margin height"
            data-bs-container=".guide-content-sample">Hover</a>
        </li>
      </ul>
    </div>
    </div>
     <div class="py-5">
    <div class="py-5">
      <ul class="nav nav-tabs" style="margin-left: 340px; max-width: fit-content">
        <li class="nav-item pe-none">
          <a
            class="nav-link disabled text-decoration-none pe-none"
            href="#"
            data-bs-placement="left"
            aria-disabled="true"
            data-bs-toggle="popover"
            data-bs-custom-class="popover-css-inspector"
            data-css-inspector-hide="b-color margin height"
            data-bs-container=".guide-content-sample">Disabled</a>
        </li>
      </ul>
    </div>
    </div>
    <div class="py-5">
    <div class="py-5">
      <ul class="nav nav-tabs nav-tabs-sm" style="margin-left: 340px; max-width: fit-content">
        <li class="nav-item pe-none">
          <a
            class="nav-link active pe-none"
            data-bs-placement="left"
            data-bs-toggle="popover"
            data-bs-custom-class="popover-css-inspector"
            data-css-inspector-hide="margin"
            data-bs-container=".guide-content-sample"
            href="#">Small</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</div>

- Tabs should always be placed on top of the content they represent.
- Tabs differ from primary forms of navigation, such as Navbars, in that they are considered to be related to each other (i.e. types of media, genres of music, etc…)
- Users shouldn’t need to simultaneously see content from multiple tabs.
- The currently selected tab should be appropriately highlighted.
- Always have one tab pre-selected.
- Tabs should be easy to scan and thus should have short, meaningful labels or icons. Avoid long text labels that don’t truncate or wrap.
- Labels should either be all text or all icons, not both intermixed.
- Avoid nesting tabs.
- Make unselected tabs visible to avoid potentially hiding features/content from the user.
- Maintain consistency by not removing tabs when their function is unavailable. Instead offer an explanation as to why a tab’s content is unavailable and present the user with an action to remedy it.
- Always arrange tabs in an order that makes sense for the user.

### Behaviors

- Try to organize tabs so that the most relevant, pre-selected tab is also the leftmost tab.
- When clicked, tabs should transition between views and highlight the selected tab.
- Disabled tabs should have a reduced opacity, not have hover styles, and not be interactive.
- Tab content should not disrupt the overall page layout in ways that negatively impact user experience.
- At a smaller screen size, the tabs collapse into a dropdown.

### Editorial

- Tab labels should be in all uppercase.
- Avoid tab labels that contain more than 2 words.
- Avoid truncating tab labels.

<style>
.popover,
.bs-popover-left {
  margin-left: -5rem !important;
}
[data-bs-theme="light"] .nav-tabs .nav-link.hover {
  isolation: isolate;
  border-color: var(--bs-nav-tabs-link-hover-border-color);
  border-bottom: .1875rem solid #dcedf9;
}

[data-bs-theme="dark"] .nav-tabs .nav-link.hover {
  color: #f1f1f6;
  background-color: #464b52 !important;
  border-bottom-color: #6a6e79 !important;
}
</style>


