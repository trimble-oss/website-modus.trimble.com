---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
componentsWeb: true
BootstrapURL: "/docs/v2/components/tabs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tabs--default"
component: tabs
tags: [accessibility]
---

## Accessibility

- The element that serves as the container for the set of tabs has role `tablist`.
- Each element that serves as a tab has role `tab` and is contained within the element with role `tablist`.
- Each element that contains the content panel for a `tab` has role `tabpanel`.
- If the tab list has a visible label, the element with role `tablist` has `aria-labelledby` set to a value that refers to the labelling element. Otherwise, the `tablist` element has a label provided by `aria-label`.
- Each element with role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
- The active `tab` element has the state `aria-selected` set to `true` and all other `tab` elements have it set to `false`.
- Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.
- If a `tab` element has a pop-up menu, it has the property `aria-haspopup` set to either `menu` or `true`.
- If the `tablist` element is vertically oriented, it has the property `aria-orientation` set to `vertical`. The default value of `aria-orientation` for a tablist element is horizontal.
- When focus moves into the tab list, focus is placed on the active tab element. When the tab list contains the focus, focus moves to the next element in the page tab sequence outside the tablist, which is typically either the first focusable element inside the tab panel or the tab panel itself.
