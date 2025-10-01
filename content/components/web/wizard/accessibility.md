---
title: "Wizard"
layout: "single"
description: "A step-by-step process that guides users through a series of tasks or decisions"
components: true
componentsWeb: true
component: wizard
hideToc: true
tags:
  - accessibility
  - search_exclude
---

## Accessibility


If possible, the first step of a form should explain how many steps will follow.
Each step should inform the user about the progress they are making.

1. Add “(Step `[current number]` of `[total`)” to `<title>` element (for example, Step 2 of 4: Shipping Address – Complete Purchase – Shop)
2. Add “(Step `[current number]` of `[total`)” next to the Page/Step main heading (for example “Shipping Address (Step 2 of 4)”)
3. Use the correct semantic heading level for the stepper.
4. Use the landmark role navigation (`role=navigation`) must be assigned to the component.
5. Use the `aria-label=“progress”` for the stepper component to provide helpful context to screen readers
6. Use visually hidden text make the completion status of each step explicit. (Completed / In progress / Not started)
7. Mark the currently active step with `aria-current="step"`.
8. For icon indicators without labels - additional descriptive information can be included via a tooltip. Both tooltip and tooltipText must be included to ensure that each step has an accessible name.<br><br>
   - a. Hide unlabeled segments. There is no content inside the segments when labels aren’t used, so it is safe to add `aria-hidden="true"` to the element
9. The progress lines connecting the steps are pure aesthetic and don’t need attributes.
10. Keyboard shortcuts:
   - a. <kbd>Shift</kbd> + <kbd>Tab</kbd> = Focuses previous link
   - b. <kbd>Tab</kbd> = Focuses next link
   - c. <kbd>Home</kbd> = Focuses first link
   - d. <kbd>End</kbd>	= Focuses last link
   - e. <kbd>Space</kbd> / <kbd>Enter</kbd>	= Activates the currently focused link

<style>
  main ul:last-of-type {
    list-style: none;
    margin-top: -8px;
  }
</style>
