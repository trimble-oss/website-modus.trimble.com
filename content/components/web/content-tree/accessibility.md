---
title: "Content Tree"
layout: "single"
description: "A content tree provides users with a way to navigate nested hierarchical information using a parent-child relationship model"
components: true
componentsWeb: true
component: content-tree
tags: [accessibility]
---

## Accessibility

- Availability of content tree items to assistive technology requires the use of `aria-controls` and toggling `aria-expanded` as regions are expanded and collapsed.
- The name of each item should include the attribute `role="button"`.
- Each tree item `button` is wrapped in an element with role `heading` that has a value set for `aria-level` that is appropriate for the information architecture of the page.
  - If the native host language has an element with an implicit `heading` and `aria-level`, such as an HTML heading tag, a native host language element may be used.
  - The `button` element is the only element inside the `heading` element. That is, if there are other visually persistent elements, they are not included inside the `heading` element.
- If the accordion panel associated with an accordion header is visible, the header `button` element has `aria-expanded` set to `true`. If the panel is not visible, `aria-expanded` is set to `false`.
- The accordion header `button` element has `aria-controls` set to the ID of the element containing the accordion panel content.
- "Enter" or "Space" key should expand and collapse items. "Tab" key moves focus to the next focusable element; all focusable elements in the content tree should be included in the page tab sequence. "Shift" + "Tab" moves focus to the previous focusable element.
- Avoid keyboard traps when adding components to the content tree. For example, the user expands a section, but is unable to tab to the next focusable element or to tab out of the content tree panel.
- Although the content tree element passes accessibility testing, content authors are responsible for ensuring the content in the content tree is accessible.
