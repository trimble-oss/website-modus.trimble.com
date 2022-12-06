---
title: "Dropdowns"
layout: "single"
description: ""
components: true
component: dropdowns
images:
  - "/img/in-field/headers/dropdowns.png"
tags: [in-field, styles]
---

## Specifications

{{< img src="/img/in-field/dropdowns-spec.svg" dark="/img/in-field/dropdowns-spec-dark.svg" width="1088" height="471" alt="Dropdowns Spec" lazyload="auto" >}}

### Behaviors

- Make sure the items in the list are in logical order (alphabetical, chronological, order of importance, etc.)
- If no item is preselected, use something like “Select a vendor” or “Select an account” in ghost or hint text format. If you can’t gray out the text, you can use some kind of indicator, like parentheses.
- If you need to, you can display ”None” as one of the options. It should have the same text formatting as the other options in the list.
- Dropdowns are activated by tapping.

<!-- prettier-ignore-start -->
| Default    | Pressed | Active    | Active Focus | Disabled |
| ---------- | ------- | --------- | ------------ | -------- |
| {{< img src="/img/in-field/dropdown-default.svg" dark="/img/in-field/dropdown-default-dark.svg" width="124" alt="" >}}   | {{< img src="/img/in-field/dropdown-pressed.svg" dark="/img/in-field/dropdown-pressed-dark.svg" width="124" alt="" >}}     | {{< img src="/img/in-field/dropdown-active.svg" dark="/img/in-field/dropdown-active-dark.svg" width="124" alt="" >}}    | {{< img src="/img/in-field/dropdown-active-focus.svg" dark="/img/in-field/dropdown-active-focus-dark.svg" width="124" alt="" >}}   | {{< img src="/img/in-field/dropdown-disabled.svg" dark="/img/in-field/dropdown-disabled-dark.svg" width="124" lt="" >}}
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### Editorial

- Use title case for titles, unless the title is phrased as a question (e.g. Are you sure want to continue?). Use sentence case for questions.
- Titles should clearly describe what’s inside the modal and the action required.
- Consider using words from the context of the page that launched the modal.
- Content can scroll in the modal, if necessary. Avoid long copy in modals.
- Present drop-down selections in sentence case (“Select an account”). If the drop-down list contains formal names, such as customer names or accounts, then those selections will appear in title case.
- Don’t use “deselect.” Instead, use “clear.” The term “deselect” causes a problem for localization.
- The list of options should be sorted in a consistent order (alphabetical, chronological, the most selected option, or by order of importance).
- Don’t end text in a select with a period.
- Keep option names as brief as possible. Aim for under 5 words.
