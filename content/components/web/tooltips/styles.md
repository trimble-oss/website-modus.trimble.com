---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
componentsWeb: true
images:
  - "/img/components/headers/tooltips.png"
bootstrapURL: "/components/tooltips/"
reactBootstrapURL: "/components/tooltips/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tooltip--default"
tags: [styles]
---

## Specifications

- Icon tooltips and interactive tooltips may be positioned top, bottom, left, or right to the trigger item.
- Top and bottom pointers can be positioned (in addition to center) from left or right. The pointer is then placed relatively 16px from the edge of the tooltip. Non-centered pointer is used, for example, when a tooltip points to a control placed at the edge of the screen.
- The container of the tooltip text may be aligned to start, center or end.
- Do not make the tooltip larger than the element it appears from.

<img src="/img/components/tooltips-positions.svg" class="img-fluid" width="800" height="300" alt="Tooltip positions"/>
<style>
[data-theme="dark"] img[src="/img/components/tooltips-positions.svg"] {
 content: url(/img/components/tooltips-positions-dark.svg);
}
</style>

### Behaviors

- Icon tooltips appear on hover and focus.

### Editorial

- Keep it brief—aim for fewer than 10 words.
- End full sentences with a period. Using “&” is OK. No “!”.
- For brevity, don’t spell out numbers: Use 12, not twelve.
- Use tooltips to present small amounts of data. Tooltips are similar to toasts, or micro-conclusions, which give the user a short confirmation.
- Use the past tense rather than present perfect (was submitted vs. has been submitted). We avoid the past perfect tense because it lacks clarity for translators.
- Use sentence case for tooltips.
- Never add a link to text in a tooltip.

### Colors

<!-- prettier-ignore-start -->
| Element | Property   | Color                                                                                  |
| ------- | ---------- | -------------------------------------------------------------------------------------- |
| Tooltip | Text       | {{< color-preview nameL="White" hexL="#ffffff" nameD="Trimble Gray" hexD="#252a2e" >}} |
|         | Background | {{< color-preview nameL="Gray 7" hexL="#585c65" nameD="Gray 0" hexD="#e0e1e9" >}}      |
{class="table table-sm table-bordered"}
<!-- prettier-ignore-end -->
