---
title: "Tables"
layout: "single"
description: "Tables display information in a grid-like format of rows and columns. "
components: true
images:
  - "/img/headers/components/tables.png"
aliases:
  - "/elements/tables/"
bootstrapURL: "/components/tables/"
reactBootstrapURL: "/components/tables/"
---

## Overview

Tables are ideal for displaying data in rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights.

## Usage

**Use when**

- User needs to easily scan and compare data.
- User needs to view and edit data.
- Manipulating and navigating through a large amount of data.
- Previewing data before drilling down further.

**Don’t use when**

- You only have a small data set.
- A more detailed amount of information needs to be displayed by default.
- There is more than one piece of information within a cell.

## Specifications

### Typography

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Class</th>
      <th>Font Size</th>
      <th>Font Weight</th>
      <th>Font Color</th>
      <th>Text Transform</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>Body-1/ 14px</td>
      <td>SemiBold/ 600</td>
      <td>Gray 8 {{< color-preview hex="#464B52">}}</td>
      <td>Title Case</td>
    </tr>
    <tr>
      <td>Row</td>
      <td>Body-1/ 14px</td>
      <td>SemiBold/ 600</td>
      <td>Trimble Gray {{< color-preview hex="#252A2E">}}</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Link Text</td>
      <td>Body-1/14px</td>
      <td>SemiBold/ 600</td>
      <td>Blue Light {{< color-preview hex="#217CBB">}}</td>
      <td>Underline on hover</td>
    </tr>
  </tbody>
</table>

### Alignment

Follow these rules, when aligning alphanumeric and numeric input types in a column:
- Numerical data - right-aligned
- Textual data - left-aligned
- Align headers with their respective data
- Center-align images, components, icons, and buttons when in their own columns.

### Structure

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Class</th>
      <th>Height</th>
      <th>Min Width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header Default</td>
      <td>48px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>Header Condensed</td>
      <td>32px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>Row Default</td>
      <td>48px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>Row Condensed</td>
      <td>32px</td>
      <td>16px</td>
    </tr>
  </tbody>
</table>

### Background Color

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Class</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>Gray Light {{< color-preview hex="#F1F1F6">}}</td>
    </tr>
    <tr>
      <td>List Table Row</td>
      <td>White {{< color-preview hex="#ffffff">}}</td>
    </tr>
    <tr>
      <td>Row Stripe</td>
      <td>Row striping is not recommended. It should be used as a last resort to increase contrast between data rows. Make sure to retain appropriate contrast ratios (<a href="/foundations/accessibility/">Accessibility</a>), if you need to use row striping.</td>
    </tr>
    <tr>
      <td>Selected Row</td>
      <td>Blue Pale {{< color-preview hex="#DCEDF9">}}</td>
    </tr>
    <tr>
      <td>Row Hover</td>
      <td>Blue Pale {{< color-preview hex="#DCEDF9">}}</td>
    </tr>
    <tr>
      <td>Data Table Read-Only Row</td>
      <td>Gray 0 {{< color-preview hex="#E0E1E9">}}</td>
    </tr>
    <tr>
      <td>Data Table Editable Row</td>
      <td>White {{< color-preview hex="#ffffff">}}</td>
    </tr>
  </tbody>
</table>

### Custom Border/ Background Color

Consider using labels/ icons to highlight the cell rather than border/ background. If use dictates, the need for border/ background color, follow color palette guidelines.

![Table Colors](/img/table-colors.png)

## Types

There are three types of tables:
1. **List Table**. Read-only table. Values cannot be edited or manipulated; table actions are available but not cell actions (see below).
2. **Data Table**. Most (or all) cells are editable; Both table and cell actions are available (see below).
3. **Hybrid Table**. A list table with in-row actions, such as dropdown fields & text input fields.

## Behaviors

There are two categories of actions available in tables:

1. Table Actions:
  - **Row Selection**: for a list table, clicking anywhere in the row will select it; for data tables, the left most column contains a checkbox that selects the row when checked (see Cell Actions below).
  - **Column Sorting**:
    - Ascending order (A-Z, 1-9), indicated by arrow facing up ↑
    - Descending order (Z-A, 9-1), indicated by arrow facing down ↓
    - Sorted column: Use arrow symbol indicator in column header
    - Column with no sort: No symbol
    - Sorting Behavior:
          - When no sort is present: on-hover, display arrow symbol with tooltip “Sort ascending”
      - Click once: Sort ascending, arrow symbol persists
      - On-hover: Display sort descending symbol with tooltip, “Sort descending”
      - Click again: Sort descending, arrow symbol persists
      - On-hover: Hide arrow symbol with tooltip, “Remove sort”
      - Click again: Remove sort, remove arrow symbol entirely
<br><br>
      ![Changing a Sort Type](/img/changing-sort.png)
<br><br>
    - **Column/ Row Reordering:**
      - User should be able to left click and hold the column header to drag and drop the column in a new order. A visual indicator should be used between the header cells where the column will be dropped.
      - A separate menu for column order can be utilized in conjunction with but not without the drag and drop function. i.e. if there is a column order menu, you must also retain drag-and-drop functionality
      - Draggable rows should use the “Drag 2” icon located before the first cell of the table.
    - **Changing Width:**
      - When hovering above the dividing line between two columns, there should be a visual indicator that the column is adjustable. Recommend indicator:  Border becomes thicker (>2) and/or changes to the primary action color.
      - Auto-Fit: User should be able to double click the adjustable border in order to fit content to the column.
    - **Hiding/ Showing Columns:**
      - Right clicking on a column header should give the user a context menu option to collapse/show columns. When a column is collapsed, the border between headers should be increased to 3px. Single clicking the visual indicator will show the column. Right clicking the visual indicator will open the context menu.
      - Unless use case dictates, Hiding a column does NOT “deactivate” a column and its content. Meaning that even though a column is hidden, the table will still use its content in filters, groups, sorts, etc.
    - **Changing Views:** A view is a default or custom table layout that is saved based on the user’s last selection. User should have a way to reset a view and/or to choose from a list of default views.
    - **Global Search:**
      - Search field should be located above the table header and/or collocated with any horizontal toolbar.
      - Search field should use the Modus “Input with icon on left,” and utilize the magnifying glass icon.
      - Once a string is entered, the “content close” icon should appear at the right internal edge of the field, allowing the user to cancel the search / delete the string.
      - App Specific: It is at the product team's discretion to update the table real time as a string is entered or after a return.
      - Optional: Magnifying glass icon can be used on its own, upon a user clicking the icon it should expand into the input field state prescribed above.
    - **Pagination:**
      - Pagination should appear at the bottom of the table
      - Use Modus icons “Arrow Left” & “Arrow Right” for page # “up” and page # “down” respectively.
    - **Filtering:**
      - Indicate what filters are currently active
      - Provide the user with a central location to control all filters
      - Loading ( If a user lands on/at a table that needs time to load )
      - If a "skeleton state" table is feasible, this is ideal, though Modus does not have guidelines around this. Designers are expected to use their best judgment for style until guidelines are released. Please share your product's use of skeleton states with Modus so we may use it as input in future guidelines.
      - If a skeleton state is not feasible, the modus spinner should be used over the area of the table.
<br><br>
      ![Filtering Options](/img/table-filters.png)
<br><br>
    - **Sticky Columns / Rows:**
      - System driven fixed or “sticky” columns and rows are allowed in all table types. Use the read-only styling for these rows' backgrounds. Additionally, any table utilizing this type of behavior should also have grid lines to clearly distinguish between columns.
      - User driven fixed columns and rows should utilize a 2x wide border between the fixed content and the rest of the table.

2. Table Actions *(available for data tables only)*:
  - **Row Selection:** The left most column contains a checkbox that selects the row when checked. In a data table, row selection Table Action is not available (see above).
    - The checkbox would be the first row on the left of the table
    - User cannot hide this column
    - User cannot change the order of this column (move it from being the first column)
    - User cannot resize this column
    - The checkbox used is the Modus standard [checkbox](/components/checkboxes/).
    - Clicking the checkbox selects row
    - There needs to be a checkbox in header that allows the user to select all or to deselect all
  - **Inline Editing:** Values can be selected (by clicking once into a cell) and overwritten (by typing over the selected values). When the text is selected and clicked again, the text will unselect and the cursor will move to the end of the line of text in that cell. User can then type to add text to the current text in the cell.
    - Cell Error State: When user exits out of the cell, his input will be validated and if the input is invalid, the cell borders become red to indicate an error and, while the user is in the field, the error message will also display to provide additional information about the error and how to correct it. When the user is correcting the error, the validation only runs again, when he exits the cell (not while typing in the cell).

|                   | Background                               | Border                                             | Cell Text |
| ----------------- | ---------------------------------------- | -------------------------------------------------- | ----------|
| Selected Cell     | White {{< color-preview hex="#ffffff">}} | Blue Light {{< color-preview hex="#217CBB">}}, 2px | Body 2    |
| Invalid Cell Data | White {{< color-preview hex="#ffffff">}} | Red {{< color-preview hex="#DA212C">}}, 2px        | Body 2    |
{.table .table-bordered}

*Examples:*

![Selecting Example](/img/tables-selecting.png)
<br><br>
![Error State](/img/tables-error.png)
<br><br>

  - **Forced Data Formatting:** If user inputs incorrect data format then follow error handling guidelines
  - **Undo:** User must have at least one mechanism to undo. Ex. ctrl+z, snack bar, icon action button, etc.
  - **Deleting Rows:**
    - Inline Trash Can icon, must be located to the right of all content cells
    - More Button, Must be located to the right of all content cells and any other icons / actions/ buttons
    - Trash Can icon located in an action / toolbar.
  - **Interactive Elements:**
    - [Buttons](/components/buttons/): Use an icon button in lieu of a regular button, whenever possible. If a label on a button is required, use a text button.
    - [Chips](/components/chips/): Chips must be actionable with either active/ inactive states or a “close” (x) icon. If no action is required, use a [badge](/components/badge/).

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

### Accessibility

- The table container has role `table`.
- Each row container has role `row` and is either a DOM descendant of or owned by the `table` element or an element with role `rowgroup`.
- Each cell is either a DOM descendant of or owned by a `row` element and has one of the following roles:
  - `columnheader` if the cell contains a title or header information for the column.
  - `rowheader` if the cell contains title or header information for the row.
  - `cell` if the cell does not contain column or row header information.
- If there is an element in the user interface that serves as a label for the table, `aria-labelledby` is set on the table element with a value that refers to the labelling element. Otherwise, a label is specified for the table element using `aria-label`.
- If the table has a caption or description, `aria-describedby` is set on the table element with a value referring to the element containing the description.
- If the table contains sortable columns or rows, `aria-sort` is set to an appropriate value on the header cell element for the sorted column or row..
- If there are conditions where some rows or columns are hidden or not present in the DOM (e.g., there are widgets on the page for hiding rows or columns), the following properties are applied:
  - `aria-colcount` or `aria-rowcount` is set to the total number of columns or rows, respectively.
  - `aria-colindex` or `aria-rowindex` is set to the position of a cell within a row or column, respectively.
- If the table includes cells that span multiple rows or multiple columns, then `aria-rowspan` or `aria-colspan` is applied as described in grid and table properties.
- Make sure content in a table can be navigated through with a keyboard, so it can be read by a screen reader.
- Make sure any interactive elements within a table are focusable and are part of the page's tab sequence.
