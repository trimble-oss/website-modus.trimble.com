---
title: "Tables"
layout: "single"
description: "Tables display information in a grid-like format of rows and columns."
components: true
component: tables
images:
  - "/img/mobile/headers/tables.png"
tags: [mobile, styles]
---

## Specifications

### Typography

<!-- prettier-ignore-start -->
| Class     | Font Size    | Font Weight   | Font Color                                                                                    | Text Transform     |
| --------- | ------------ | ------------- | --------------------------------------------------------------------------------------------- | ------------------ |
| Header    | Body-1/ 14px | SemiBold/ 600 | {{< color-preview nameL="Gray 8" hexL="#464B52" nameD="Gray 0" hexD="#E0E1E9" >}}             | Title Case         |
| Row       | Body-1/ 14px | SemiBold/ 600 | {{< color-preview nameL="Trimble Gray" hexL="#252A2E" nameD="White" hexD="#fff" >}}           | None               |
| Link Text | Body-1/14px  | SemiBold/ 600 | {{< color-preview nameL="Blue Light" hexL="#217CBB" nameD="Highlight Blue" hexD="#019AEB" >}} | Underline on hover |
{class="table table-bordered"}
<!-- prettier-ignore-end -->

### Alignment

Follow these rules, when aligning alphanumeric and numeric input types in a column:

- Numerical data - right-aligned
- Textual data - left-aligned
- Align headers with their respective data
- Center-align images, components, icons, and buttons when in their own columns.

### Structure

<!-- prettier-ignore-start -->
| Class            | Height | Min Width |
| ---------------- | ------ | --------- |
| Header Default   | 48px   | 16px      |
| Header Condensed | 32px   | 16px      |
| Row Default      | 48px   | 16px      |
| Row Condensed    | 32px   | 16px      |
{class="table table-bordered"}
<!-- prettier-ignore-end -->

### Background Color

<!-- prettier-ignore-start -->
| Class                    | Color                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| Header                   | {{< color-preview hexL="#F1F1F6" nameL="Gray Light" hexD="#464B52" nameD="Gray 8" >}}        |
| List Table Row           | {{< color-preview hexL="#ffffff" nameL="White" hexD="#171C1E" nameD="Gray 10" >}}            |
| Selected Row             | {{< color-preview hexL="#dcedf9" nameL="Blue Pale" hexD="#019AEB" nameD="Highlight Blue" >}} |
| Row Hover                | {{< color-preview hexL="#dcedf9" nameL="Blue Pale" hexD="#019AEB" nameD="Highlight Blue" >}} |
| Data Table Read-Only Row | {{< color-preview hexL="#E0E1E9" nameL="Gray 0" hexD="#171C1E" nameD="Gray 10" >}}           |
| Data Table Editable Row  | {{< color-preview hexL="#ffffff" nameL="White" hexD="#171C1E" nameD="Gray 10" >}}            |
{class="table table-bordered"}
<!-- prettier-ignore-end -->

Note: Row striping is not recommended. It should be used as a last resort to increase contrast between data rows. If you need to use row striping make sure to retain appropriate contrast ratios ([Accessibility](/foundations/accessibility/))

- **Width:** A table can have a set static width or dynamically fill the width of a page or screen.  It is important to make sure that the cells have the appropriate settings to scale accordingly as well.
- **Height:** The height of a table cell is inherited from the [List](/components/mobile/lists/) Item size.
- **Dividers:** The tables component comes with the option to show or hide dividers depending on preference and/or product needs.
 - **Scrollable:** Tables can be scrollable just like lists if they are at a fixed size.  For more information, see List Scrolling.
 - **Mobile stacking:** - In some instances, it may be desirable to display a large amount of information in a limited horizontal space, such as a mobile phone.  The compact display option for tables converts each row into a card, complete with its own header column.  This is designed to scroll infinitely if needed.

## Types

### Horizontal Filled Layout

{{< img src="/img/mobile/tables-horizontal.svg" dark="/img/mobile/tables-horizontal-dark.svg" width="960" height="278" alt="Tables Horizontal" loading="auto" >}}

### Compact Mobile Layout (Row Cards)

{{< img src="/img/mobile/tables-row.svg" dark="/img/mobile/tables-row-dark.svg" width="569" height="649" alt="Tables Row" loading="auto" >}}

## Editorial

**Headers**

- Should be informative and descriptive.
- Should be concise and scannable.
- Should include units of measurement symbols so they aren’t repeated throughout the columns.
- Should use sentence case (first word capitalized, rest lowercase)

**Column content**

- Should be concise and scannable.
- Shouldn’t include units of measurement symbols (put those symbols in the headers)
- Should use sentence case (first word capitalized, rest lowercase)

**Decimals**

- Keep decimals consistent. For example, don’t use 3 decimals in one row and 2 in others.

