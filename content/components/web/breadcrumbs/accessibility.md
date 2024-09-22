---
title: "Breadcrumbs"
layout: "single"
description: "The breadcrumb element is a secondary navigation pattern that shows hierarchy among content."
components: true
componentsWeb: true
images:
  - "/img/components/headers/breadcrumbs.png"
bootstrapURL: "/docs/v2/components/breadcrumbs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-breadcrumb--default"
tags: [accessibility]
---

## Accessibility

- **The default breadcrumb navigation is not accessible.** Use the accessible option for compliance.
- Place breadcrumb navigation in a `nav` element with `role="navigation"`. The `nav` element should also be marked with `aria-label="breadcrumbs"` to clearly describe the type of navigation.
- Breadcrumbs should remain in the same relative order and location on each page.
- The link text should be clear, reflect the breadcrumb location accurately, and easy to understand for all users.
- Make sure the tab order matches the hierarchy.
- Apply `aria-current="page"` to the last item of the set to indicate that it represents the current page.
- For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).
