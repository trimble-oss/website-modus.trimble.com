---
title: "Autocomplete"
layout: "single"
description: "The autocomplete is a text input field enhanced by a panel of suggested options."
images:
  - "/img/components/headers/autocomplete.png"
components: true
componentsWeb: true
keywords: typeahead
tags: [styles]
---

## Specifications

<div class="theme-l">

![Anatomy](/img/components/autocomplete-anatomy.svg)

</div>

See [Inputs](/components/web/inputs/) and [Lists](/components/web/lists/) for additional specifications.

There are two sizes of autocomplete input fields defined:

- **Default:** default form inputs should have a height of 32px (8px padding) and a font size of 12px (.75rem). Used for most forms.
- **Large:** larger variant should have a height of 48px (16px padding) and a font size of 14px (.875rem). Used for forms in in-cab applications

{{< img src="/img/components/autocomplete-sizing.svg" dark="/img/components/autocomplete-sizing-dark.svg" class="w-100" alt="Autocomplete Sizing" >}}

**Text input field**
Users input text and they are provided with a list of suggestions to choose from. When the user selects an option, the choice is then displayed in the field.

**Selection menu**
A list of selectable options that can be grouped into sub-categories. Sub-category titles should be written in all caps. The list of options should appear in alphabetical order by default. In some cases it might be best to list in order of importance.

**Clear text icon**
Clears all text from the input field or reverts to the default selection (or previous selection).

**Chip** (optional)
A chip _can_ be used to clear the filled selection instead of the default “X” clear icon but only in the larger (48px) variant. **Please use one or the other but never both.**

{{< img src="/img/components/autocomplete-clear.svg" dark="/img/components/autocomplete-clear-dark.svg" class="w-100" alt="Autocomplete Chip" >}}

## Colors

| Element          | Property            | Color                                                                   |
| ---------------- | ------------------- | ----------------------------------------------------------------------- |
| Label            | Label               | {{< color-preview nameL=" " hexL="#464b52" nameD=" " hexD="#b7b9c3" >}} |
| Input            | Color               | {{< color-preview nameL=" " hexL="#252a2e" nameD=" " hexD="#ffffff" >}} |
|                  | Background          | {{< color-preview nameL=" " hexL="#ffffff" nameD=" " hexD="#171c1e" >}} |
|                  | Placeholder         | {{< color-preview nameL=" " hexL="#b7b9c3" nameD=" " hexD="#7d808d" >}} |
|                  | Border              | {{< color-preview nameL=" " hexL="#e0e1e9" nameD=" " hexD="#ffffff" >}} |
|                  | Border (Bottom 2px) | {{< color-preview nameL=" " hexL="#6a6e79" nameD=" " hexD="#6a6e79" >}} |
| List Subcategory | Label               | {{< color-preview nameL=" " hexL="#6a6e79" nameD=" " hexD="#6a6e79" >}} |
{class="table table-sm table-bordered table-colors"}

<style>
[data-theme="dark"] .table-colors tr:last-child {
  display: none;
}
</style>

### Behaviors

- In cases where the available options are longer than the dropdown field, the dropdown menu will grow to the width of the longest option. Alternately, the long list item name will truncate at a specified max-width set.
- When the user clicks in the field, then change the field to “focused”, open the drop menu, place a text cursor in the field, and allow the user to lookup or select a value from the dropdown.
- When the user starts typing, swap the chevron icon for the clear option (for easy deletion of the entered search value).
- If the user enters a value that doesn’t exist in the dropdown, notify the user that the value entered returned no results. The message should read: "No results found." Additionally, if possible display tip, "Check spelling or try a different keyword."
- If the label is longer than the width of the dropdown menu, then expand the menu to fit the longest option. If the menu has a fixed width then truncate the label when the max width is exceeded.
- When the list exceeds 1,499 options, lazy load the content and provide pagination at the bottom of the list.
- For validation and states follow the [Inputs](/components/web/inputs/#behaviors) guidelines.

{{< img src="/img/components/autocomplete-no-results.svg" dark="/img/components/autocomplete-no-results-dark.svg" class="w-100" alt="No Results Example" >}}

### Editorial

- When possible, add helper text below an input field to further clarify selections or validation errors.
- Always mark **required** fields with an \* .
- Provide input constraints, such as a character limit within a text entry box to provide guidelines and improve form efficiency.
