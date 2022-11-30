---
title: "Tables"
layout: "single"
description: "Tables display information in a grid-like format of rows and columns. "
components: true
componentsWeb: true
images:
  - "/img/components/headers/tables.png"
bootstrapURL: "/components/tables/"
reactBootstrapURL: "/components/tables/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-data-table--default
tags: [styles]
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

### Custom Border/ Background Color

Consider using labels/ icons to highlight the cell rather than border/ background. If use dictates, the need for border/ background color, follow color palette guidelines.

{{< img src="/img/components/table-colors.svg" dark="/img/components/table-colors-dark.svg" class="w-100" alt="Table Colors" >}}

## Types

There are three types of tables:

1. **List Table**. Read-only table. Values cannot be edited or manipulated; table actions are available but not cell actions (see below).
2. **Data Table**. Most (or all) cells are editable; Both table and cell actions are available (see below).
3. **Hybrid Table**. A list table with in-row actions, such as dropdown fields & text input fields.

## Behaviors

There are two categories of actions available in tables:

1. Table Actions:

- **Row Selection**: for a list table, clicking anywhere in the row will select it; for data tables, the left most column contains a checkbox that selects the row when checked (see Cell Actions below).
- **Column Sorting**: - Ascending order (A-Z, 1-9), indicated by arrow facing up ↑ - Descending order (Z-A, 9-1), indicated by arrow facing down ↓ - Sorted column: Use arrow symbol indicator in column header - Column with no sort: No symbol - Sorting Behavior: - When no sort is present: on-hover, display arrow symbol with tooltip “Sort ascending” - Click once: Sort ascending, arrow symbol persists - On-hover: Display sort descending symbol with tooltip, “Sort descending” - Click again: Sort descending, arrow symbol persists - On-hover: Hide arrow symbol with tooltip, “Remove sort” - Click again: Remove sort, remove arrow symbol entirely
  <br><br>
  {{< img src="/img/components/tables-changing-sort.svg" dark="/img/components/tables-changing-sort-dark.svg" class="w-100" alt="Changing a Sort Type" >}}
  <br><br> - **Column/ Row Reordering:** - User should be able to left click and hold the column header to drag and drop the column in a new order. A visual indicator should be used between the header cells where the column will be dropped. - A separate menu for column order can be utilized in conjunction with but not without the drag and drop function. i.e. if there is a column order menu, you must also retain drag-and-drop functionality - Draggable rows should use the “Drag 2” icon located before the first cell of the table.
  - **Changing Width:** - When hovering above the dividing line between two columns, there should be a visual indicator that the column is adjustable. Recommend indicator: Border becomes thicker (>2) and/or changes to the primary action color. - Auto-Fit: User should be able to double click the adjustable border in order to fit content to the column.
  - **Hiding/ Showing Columns:** - Right clicking on a column header should give the user a context menu option to collapse/show columns. When a column is collapsed, the border between headers should be increased to 3px. Single clicking the visual indicator will show the column. Right clicking the visual indicator will open the context menu. - Unless use case dictates, Hiding a column does NOT “deactivate” a column and its content. Meaning that even though a column is hidden, the table will still use its content in filters, groups, sorts, etc.
  - **Changing Views:** A view is a default or custom table layout that is saved based on the user’s last selection. User should have a way to reset a view and/or to choose from a list of default views.
  - **Global Search:** - Search field should be located above the table header and/or collocated with any horizontal toolbar. - Search field should use the Modus “Input with icon on left,” and utilize the magnifying glass icon. - Once a string is entered, the “content close” icon should appear at the right internal edge of the field, allowing the user to cancel the search / delete the string. - App Specific: It is at the product team's discretion to update the table real time as a string is entered or after a return. - Optional: Magnifying glass icon can be used on its own, upon a user clicking the icon it should expand into the input field state prescribed above.
  - **Pagination:** - Pagination should appear at the bottom of the table - Use Modus icons “Arrow Left” & “Arrow Right” for page # “up” and page # “down” respectively.
  - **Filtering:** - Indicate what filters are currently active - Provide the user with a central location to control all filters - Loading ( If a user lands on/at a table that needs time to load ) - If a "skeleton state" table is feasible, this is ideal, though Modus does not have guidelines around this. Designers are expected to use their best judgment for style until guidelines are released. Please share your product's use of skeleton states with Modus so we may use it as input in future guidelines. - If a skeleton state is not feasible, the modus spinner should be used over the area of the table.
    <br><br>
    {{< img src="/img/components/table-filters.svg" dark="/img/components/table-filters-dark.svg" class="w-100 border" alt="Filtering Options" >}}
    <br><br> - **Sticky Columns / Rows:** - System driven fixed or “sticky” columns and rows are allowed in all table types. Use the read-only styling for these rows' backgrounds. Additionally, any table utilizing this type of behavior should also have grid lines to clearly distinguish between columns. - User driven fixed columns and rows should utilize a 2x wide border between the fixed content and the rest of the table.

2. Table Actions _(available for data tables only)_:

- **Row Selection:** The left most column contains a checkbox that selects the row when checked. In a data table, row selection Table Action is not available (see above).
  - The checkbox would be the first row on the left of the table
  - User cannot hide this column
  - User cannot change the order of this column (move it from being the first column)
  - User cannot resize this column
  - The checkbox used is the Modus standard [checkbox](/components/web/checkboxes/).
  - Clicking the checkbox selects row
  - There needs to be a checkbox in header that allows the user to select all or to deselect all
- **Inline Editing:** Values can be selected (by clicking once into a cell) and overwritten (by typing over the selected values). When the text is selected and clicked again, the text will unselect and the cursor will move to the end of the line of text in that cell. User can then type to add text to the current text in the cell.
  - Cell Error State: When user exits out of the cell, his input will be validated and if the input is invalid, the cell borders become red to indicate an error and, while the user is in the field, the error message will also display to provide additional information about the error and how to correct it. When the user is correcting the error, the validation only runs again, when he exits the cell (not while typing in the cell).

<!-- prettier-ignore-start -->
|                   | Background                                                                              | Border (2px)                                                                                 | Cell Text |
| ----------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------- |
| Selected Cell     | {{< color-preview hexL="#ffffff" nameL="White" hexD="#019AEB" nameD="Highlight Blue">}} | {{< color-preview hexL="#217CBB" nameL="Blue Light" hexD="#019AEB" nameD="Highlight Blue">}} | Body 2    |
| Invalid Cell Data | {{< color-preview hexL="#ffffff" nameL="White" hexD="#171C1E" nameD="Gray 10">}}        | {{< color-preview hex="#DA212C" name="Red">}}                                                | Body 2    |
{.table .table-bordered}
<!-- prettier-ignore-end -->

_Examples_

{{< img src="/img/components/tables-selecting.svg" dark="/img/components/tables-selecting-dark.svg" class="w-100" alt="Selecting Cells Example" >}}

{{< img src="/img/components/tables-error.svg" dark="/img/components/tables-error-dark.svg" class="w-100" alt="Error State" >}}

- **Forced Data Formatting:** If user inputs incorrect data format then follow error handling guidelines
- **Undo:** User must have at least one mechanism to undo. Ex. <kbd>ctrl</kbd>+<kbd>z</kbd>, snack bar, icon action button, etc.
- **Deleting Rows:**
  - Inline Trash Can icon, must be located to the right of all content cells
  - More Button, Must be located to the right of all content cells and any other icons / actions/ buttons
  - Trash Can icon located in an action / toolbar.
- **Interactive Elements:**
  - [Buttons](/components/web/buttons/): Use an icon button in lieu of a regular button, whenever possible. If a label on a button is required, use a text button.
  - [Chips](/components/web/chips/): Chips must be actionable with either active/ inactive states or a “close” (x) icon. If no action is required, use a [badge](/components/web/badges/).

## Editorial

**Headers**

- Should be informative and descriptive.
- Should be concise and scannable.
- Should include units of measurement symbols so they aren’t repeated throughout the columns.
- Should use sentence case (first word capitalized, rest lowercase)

**Column content**

- Should be concise and scannable.
- Shouldn't include units of measurement symbols (put those symbols in the headers)
- Should use sentence case (first word capitalized, rest lowercase)

**Decimals**

- Keep decimals consistent. For example, don’t use 3 decimals in one row and 2 in others.
