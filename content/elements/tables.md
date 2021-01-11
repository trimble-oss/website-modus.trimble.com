---
title: "Tables"
layout: "single"
description: "Tables display information in a grid-like format of rows and columns. "
components: true
images:
  - "/img/headers/elements/tables.png"
aliases:
  - "/tables.html"
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

**Alignment**

Column content types are built into the component props so the following alignment rules are followed:

- Numerical = Right aligned
- Textual data = Left aligned
- Align headers with their related data
- Center align images/elements/icons and buttons when in their own columns

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th class="icon-only"></th>
      <th>Name</th>
      <th class="text-right">Date</th>
      <th class="text-right">Sales Revenue</th>
      <th class="icon-only"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="icon-only">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked=""
            class="custom-control-input"
            id="tableCheckbox1"
            name="example1"
          />
          <label class="custom-control-label" for="tableCheckbox1"></label>
        </div>
      </th>
      <td>John Doe</td>
      <td class="text-right">06/10/19</td>
      <td class="text-right text-success">$100</td>
      <td scope="row" class="icon-only">
        <div class="dropdown">
          <button
            class="btn btn-icon-only btn-text-dark rounded-circle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="modus-icons">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td scope="row" class="icon-only">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="tableCheckbox2" name="example2" />
          <label class="custom-control-label" for="tableCheckbox2"></label>
        </div>
      </td>
      <td>Jane Doe</td>
      <td class="text-right">08/01/19</td>
      <td class="text-right text-success">$150</td>
      <td scope="row" class="icon-only">
        <div class="dropdown">
          <button
            class="btn btn-icon-only btn-text-dark rounded-circle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="modus-icons">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td scope="row" class="icon-only">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="tableCheckbox3" name="example3" />
          <label class="custom-control-label" for="tableCheckbox3"></label>
        </div>
      </td>
      <td>Bob Smith</td>
      <td class="text-right">09/04/19</td>
      <td class="text-right text-danger">-$50</td>
      <td scope="row" class="icon-only">
        <div class="dropdown">
          <button
            class="btn btn-icon-only btn-text-dark rounded-circle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="modus-icons">more_vertical</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

**Data tables should**

- Show values across multiple categories and measures.
- Allow for filtering and ordering when comparison is not a priority.
- Help users visualize and scan many values from an entire data set.
- Help users find other values in the data hierarchy through use of links.
- Minimize clutter by only including values that supports the data’s purpose.
- Include a summary row to surface the column totals.
- Not include calculations within the summary row.
- Focus on minimizing header titles.

<!--### Behaviors-->

### Editorial

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
