---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
componentsWeb: true
images:
  - "/img/components/headers/tabs.png"
bootstrapURL: "/components/tabs/"
reactBootstrapURL: "/components/tabs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tabs--default"
tags: [styles]
---

## Specifications

<div class="guide-example-block my-3 py-4 bg-light">
  <div class="guide-content-sample anatomy-display-container">
    <ul class="nav nav-tabs mb-5 py-4">
      <li class="nav-item">
        <a class="nav-link active anatomy-display-static" href="#">Default</a>
      </li>
    </ul>
    <ul class="nav nav-tabs mb-5">
      <li class="nav-item">
        <a class="nav-link hover text-decoration-none anatomy-display-static" href="#">Hover</a>
      </li>
    </ul>
    <ul class="nav nav-tabs nav-tabs-sm py-4">
      <li class="nav-item">
        <a
          class="nav-link active anatomy-display-static"
          href="#"
          data-anatomy-colors="false"
          >Small</a
        >
      </li>
    </ul>
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
</style>

### Colors

| Element      | Property      | Color                                                                                                 |
| ------------ | ------------- | ----------------------------------------------------------------------------------------------------- |
| Tab Container | Border Bottom | {{< color-preview nameL="Gray 1" hexL="#CBCDD6" nameD="Gray 6" hexD="#6a6e79" >}}                    |
| Default Tab  | Color         | {{< color-preview nameL="Trimble Gray" hexL="#252A2E" nameD="White" hexD="#ffffff" >}}                |
|              | Background    | Transparent                                                                                           |
| Active Tab   | Color         | {{< color-preview nameL="Trimble Blue Light" hexL="#217cbb" nameD="Dark Mode Blue" hexD="#019aeb" >}} |
|              | Bottom Border | {{< color-preview nameL="Trimble Blue Light" hexL="#217cbb" nameD="Dark Mode Blue" hexD="#019aeb" >}} |
|              | Background    | Transparent                                                                                           |
| Hover Tab    | Color         | {{< color-preview nameL="Trimble Blue Light" hexL="#217cbb" nameD="White" hexD="#ffffff" >}}          |
|              | Background    | {{< color-preview nameL="Blue Pale" hexL="#dcedf9" nameD="Gray 8" hexD="#464b52" >}}                  |
| Disabled Tab | Color         | {{< color-preview nameL="Gray 2" hexL="#B7B9C3" nameD="White" hexD="#ffffff" >}}                      |
|              | Background    | Transparent                                                                                           |
{class="table table-sm table-bordered"}
