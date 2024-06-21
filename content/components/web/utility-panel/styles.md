---
title: "Utility Panel"
layout: "single"
description: "Utility panel is a container for additional content and/or functionality related to the primary screen."
components: true
componentsWeb: true
images:
  - "/img/components/headers/utility-panel.png"
tags: [styles]
---

## Specifications

### Placement

- The utility panel is the top-most element.
- The utility panel is usually on the opposite side of the screen than the [Side Navigation](/components/web/side-navigation/) but can also be attached to the bottom.
- The footer is displayed below the side navigation menu.

### Shadows

- Use [Level 2 shadow](/foundations/shadows-and-depth/) for the utility panel.

### Sizing

- The user may resize the width of the utility panel (_optional_).
  - This feature is not supported on mobile.
  - The minimal width is 320px.

### Colors

<!-- prettier-ignore-start -->
| Element       | Property     | Color                                                                                   |
| ------------- | ------------ | --------------------------------------------------------------------------------------- |
| Utility Panel | Background   | {{< color-preview nameL="White" hexL="#ffffff" nameD="Trimble Gray" hexD="#252a2e" >}}  |
|               | Header Title | {{< color-preview nameL="White" hexL="#ffffff" nameD="Gray 0" hexD="#e0e1e9" >}}        |
|               | Text         | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="Gray 0" hexD="#e0e1e9" >}} |
|               | Chevron      | {{< color-preview nameL="Gray 6" hexL="#6a6e79" nameD="Gray 0" hexD="#e0e1e9" >}}       |
|               | Divider Line | {{< color-preview nameL="Gray 0" hexL="#e0e1e9" nameD="Gray 0" hexD="#e0e1e9" >}}       |
{class="table table-sm table-bordered border border-opacity-50"}
<!-- prettier-ignore-end -->

### Typography

<!-- prettier-ignore-start -->
| Class            | Font Size     | Font Weight    | Text Transform |
| ---------------- | ------------- | -------------- | -------------- |
| Header Title     | H4 / 16px     | Semibold / 600 | Title Case     |
| Accordion Header | H5 / 14px     | Semibold / 600 | Title Case     |
| Body             | Body 1 / 16px | Regular / 400  | None           |
| Tabs             | H5 / 14px     | Bold / 800     | Upper Case     |
{ .table .table-bordered}
<!-- prettier-ignore-end -->

### Structure

<!-- prettier-ignore-start -->
| Class                        | Height |
| ---------------------------- | ------ |
| Header Title                 | 48px   |
| Tabs                         | 48px   |
| Accordion Header (Condensed) | 32px   |
| Accordion Header (Condensed) | 48px   |
{ .table .table-bordered}
<!-- prettier-ignore-end -->

## Behaviors

**Accordions Sections**

- The accordion sections are optional to use but usually help organizing the content.

{{< img src="/img/components/side-panel-accordion-example.svg" class="border bg-light" width="200" alt="Utility Panel with accordions example" loading="auto" >}}

- If the content exceeds the side panel height, a scrollbar is used on the right side of the content. The header and footer must be on top of the content.
- The utility panel can expand by clicking and dragging on the left side. Minimum width is 320px.

**Tabs**

- Tabs can be used to organize information in more than one panel for additional information.

**Footer**

- The footer may contain up to two buttons. A primary button can be used, such as Save, Commit, Create, or Edit.

## Editorial

- Use title case for titles.
- Titles should describe the functionality of the panel.
- Content can scroll in the panel, if necessary. Avoid long copy in panels.
- Copy wraps in a panel.
