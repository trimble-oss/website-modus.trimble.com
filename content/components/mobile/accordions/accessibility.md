---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
components: true
component: accordions
images:
  - "/img/mobile/headers/accordions.png"
tags: [mobile, accessibility]
---

## Accessibility

- Availability of accordion content to assistive technology requires the use of `aria-controls` and toggling `aria-expanded` as regions are expanded and collapsed.
- Each accordion header must have a unique title that clearly describes the accordion panel content so that assistive technology users have the necessary information to efficiently navigate the content without having to expand every section. The title of each accordion header should include the attribute `role="button"`.
- Each accordion header `button` is wrapped in an element with role `heading` that has a value set for `aria-level` that is appropriate for the information architecture of the page.
  - If the native host language has an element with an implicit `heading` and `aria-level`, such as an HTML heading tag, a native host language element may be used.
  - The `button` element is the only element inside the `heading` element. That is, if there are other visually persistent elements, they are not included inside the `heading` element.
- If the accordion panel associated with an accordion header is visible, the header `button` element has `aria-expanded` set to `true`. If the panel is not visible, `aria-expanded` is set to `false`.
- The accordion header `button` element has `aria-controls` set to the ID of the element containing the accordion panel content.
- If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header `button` element has `aria-disabled` set to `true`.
- Tapping on an accordion should expand and collapse headers.
- Although the accordion element passes accessibility testing, content authors need to ensure the content that is added to the accordion is accessible. For example, if you add an image to the accordion header or panel you need to include alternative text to pass accessibility testing.
