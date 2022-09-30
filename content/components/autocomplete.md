---
title: "Autocomplete"
layout: "single"
description: "The autocomplete is a text input field enhanced by a panel of suggested options."
images:
  - "/img/components/headers/autocomplete.png"
components: true
keywords: typeahead
---

## Overview

An autocomplete dropdown allows the user to search and select one option from a set of choices. When the user enters text into the input field, a list of suggestions are provided.

![Autocomplete Example](/img/components/autocomplete-overview.svg)

## Usage

**Use when**

- Searching and results can be auto-populated.
- Application requires predictive, suggestive or instant search results
- Filtering list items.
- Single selection from a list is necessary.

**Don’t use when**

- Providing only two options. Instead, use [Radio Buttons](/components/radio-buttons/) or a [Switch](/components/switches/).

## Types

Autocomplete comes in three varieties:

- **Basic Autocomplete**: Typical “search-as-you-type” function that matches what a person is typing, usually the beginning of a word, or a prefix, part of a word or with a word list.
- **Autocomplete Suggestions**:  Suggestions not only predict user intentions, but they also help users construct more useful searches than they might on their own. Suggestions go beyond matching text strings by including new search items within the suggested results. It is useful during information-seeking tasks, where there isn’t a single “right answer.”
- **Instant Results**: Sometimes users may prefer to autocomplete actual search results instead of retooling their search phrase. For example, the display of rich information right in the autocomplete instead of a list of suggestions that lead to a search results page.

![Autocomplete Types](/img/components/autocomplete-types.svg)

## Specifications

<div class="theme-l">

![Anatomy](/img/components/autocomplete-anatomy.svg)

</div>

See [Inputs](/components/inputs/) and [Lists](/components/lists/) for additional specifications.

<span class="theme-l">

- Label Text Color: {{< color-preview hex="#464b52">}}
- Input Text Color: {{< color-preview hex="#252A2E">}}
- Placeholder Text Color: {{< color-preview hex="#B7B9C3">}}
- Border Color: {{< color-preview hex="#E0E1E9">}} (bottom border {{< color-preview hex="#6A6E79">}} )
- List Subcategory Label Color: {{< color-preview hex="#6a6e79">}}

</span>

There are two sizes of autocomplete input fields defined:

- **Default:** default form inputs should have a height of 32px (8px padding) and a font size of 12px (.75rem). Used for most forms.
- **Large:** larger variant should have a height of 48px (16px padding) and a font size of 14px (.875rem). Used for forms in in-cab applications

![Autocomplete Sizing](/img/components/autocomplete-sizing.svg)

**Text input field**
Users input text and they are provided with a list of suggestions to choose from. When the user selects an option, the choice is then displayed in the field.

**Selection menu**
A list of selectable options that can be grouped into sub-categories. Sub-category titles should be written in all caps. The list of options should appear in alphabetical order by default. In some cases it might be best to list in order of importance.

**Clear text icon**
Clears all text from the input field or reverts to the default selection (or previous selection).

**Chip** (optional)
A chip *can* be used to clear the filled selection instead of the default “X” clear icon but only in the larger (48px) variant. **Please use one or the other but never both.**

![Autocomplete Chip](/img/components/autocomplete-clear.svg)

### Behaviors

- In cases where the available options are longer than the dropdown field, the dropdown menu will grow to the width of the longest option. Alternately, the long list item name will truncate at a specified max-width set.
- When the user clicks in the field, then change the field to “focused”, open the drop menu, place a text cursor in the field, and allow the user to lookup or select a value from the dropdown.
- When the user starts typing, swap the chevron icon for the clear option (for easy deletion of the entered search value).
- If the user enters a value that doesn’t exist in the dropdown, notify the user that the value entered returned no results. The message should read: "No results found." Additionally, if possible display tip, "Check spelling or try a different keyword."
- If the label is longer than the width of the dropdown menu, then expand the menu to fit the longest option. If the menu has a fixed width then truncate the label when the max width is exceeded.
- When the list exceeds 1,499 options, lazy load the content and provide pagination at the bottom of the list.
- For validation and states follow the [Inputs](/components/inputs/#behaviors) guidelines.

![No Results Example](/img/components/autocomplete-no-results.svg)

### Editorial

- When possible, add helper text below an input field to further clarify selections or validation errors.
- Always mark **required** fields with an * .
- Provide input constraints, such as a character limit within a text entry box to provide guidelines and improve form efficiency.

### Accessibility

- Always use a `label`. Use a hidden `label`, or a `title` or `aria-label` attribute when a visible text label is not needed.
- Associate form labels with controls.
- Never replace `label` with `placeholder` text.
- Always specify the correct input type (e.g. `date`, `email`, `tel`, `number`)
- Match `for` and `id` values that associate the label with its form control. Because `id` attribute values must be unique on each page, a form control can only have one associated `label`.
- Whenever possible use the `autocomplete` ARIA attribute to help users (especially users with cognitive disabilities) fill out the form: `aria-autocomplete=true` (see additional resources for [Legacy ARIA 1.0 Combobox with Both List and Inline Autocomplete](https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.0pattern/combobox-autocomplete-both.html) and [Editable Combobox with Both List and Inline Autocomplete](https://w3c.github.io/aria-practices/examples/combobox/combobox-autocomplete-both.html).
- On required fields, use the `required` attribute. It causes screen readers to announce “required” and also triggers the browser to warn the user with a visual tooltip if the user leaves the field blank. Screen readers also announce the tooltip content, when it appears.
- When performing form validation, apply the `aria-invalid="true"` attribute to a form control. It will cause screen readers to announce “invalid” when that control gets in focus.
- Use `aria-labelledby` to overcome the 1:1 limitations of label.
- Use `aria-describedby` (in addition to a label) to associate descriptive text to the form control.
- Make sure the form is keyboard accessible: all input fields need to be focusable. The tab sequence needs to be logical and intuitive.
- Do not rely on JavaScript alone for form submission, validation, and error recovery.
- Alert the user of any validation errors in an apparent and accessible manner. Provide informative feedback messages.
- Allow the user to easily access the form controls that need to be modified.
- Allow resubmission and revalidation of the form information.

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 03/30/2022 | 1.3.0   | New component submitted. | S. Edwards, E. Gunther, C. Rodriguez, D. Zambrano  |

{{</ whats-changed-table >}}
