---
title: "Spinners"
layout: "single"
description: "Spinners indicate progress by showing users a loading state."
components: true
componentsWeb: true
component: spinners
tags: [accessibility]
---

## Accessibility

- Each spinner should include `role="status"` and a nested `<span class="sr-only">Loading...</span>`.
- Spinners should rotate slower when the `@media (prefers-reduced-motion: reduce)` media query is set
