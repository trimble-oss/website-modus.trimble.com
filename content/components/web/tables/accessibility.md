---
title: "Tables"
layout: "single"
description: "Tables display information in a grid-like format of rows and columns. "
components: true
componentsWeb: true
images:
  - "/img/components/headers/tables.png"
bootstrapURL: "/docs/v2/content/tables/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-table--default
component: tables
tags: [accessibility]
---

## Accessibility

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
