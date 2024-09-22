---
title: "Pagination"
layout: "single"
description: "Pagination affords navigation between pages of content, and it highlights the page currently in view."
components: true
componentsWeb: true
images:
  - "/img/components/headers/pagination.png"
BootstrapURL: "/docs/v2/components/pagination/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-pagination--default"
component: pagination
tags: [accessibility]
---

## Accessibility

- Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.
- Pagination is built with the ordered list `ol` HTML elements, so screen readers can announce the number of available links.
- As pages likely have more than one such navigation section, it’s advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.
