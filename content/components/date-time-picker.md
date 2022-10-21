---
title: "Date & Time Picker"
layout: "single"
description: "Allows the user to select a single date, a date range, or time."
components: true
images:
  - "/img/components/headers/date-time-picker.png"
aliases:
  - "/components/date-picker/"
---

## Overview

Use the Date & Time Picker to select a date or a date range from the calendar view or by typing in the date and/or time as indicated by the placeholder text.

![Date Picker](/img/components/single-date-picker.png)
<style>
[data-theme="dark"] img[src="/img/components/single-date-picker.png"] {
 content: url(/img/components/single-date-picker-dark.png);
}
</style>

## Usage

**Use when**

- User needs to choose a single date in a calendar.
- User needs to choose a date range in a calendar.
- Asking the user to input a specific time.

**Don’t use when**

- User needs to pick multiple date ranges.
- There are multiple date pickers on the page.
- It's easier or more convenient for the user to enter a date.

## Specifications

- Label: communicates the context of the input field(s).
- Date/time field: text input where user can manually enter the date.
- Date/time format: format instructions should appear as helper text below or as placeholder text.
- Icon: use calendar and/or clock training icons in the input fields to communicate input field's purpose and to activate the calendar popover.
- Month and year controls: allows the user to navigate through past or future months in sequential order.
- Week day labels: two-letter days of the week.
- Previous/ next month controls: allows the user to navigate through past or future monhts in sequential order.
- Day: days in the month with an indicator of today's date and states.
- Time zone field (optional): allows the user to select a time zone from a dropdown menu.

### Behaviors

#### Date Picker

- Clicking on the calendar icon opens the calendar view with the current date highlighted. Use the previous and next arrows to move through the months. Hover over the year and use the up and down arrows to move quickly from year to year.
- When the user clicks in the date field, change the field to focused, place the text cursor in the field to allow the user to enter date manually.
- Close the calendar view when a date is selected, when tabbing to the next field, or when a user clicks anywhere outside of the calendar view.
- Hovering over (or tabbing into) month and year in the header of the calendar displays up and down arrows allowing for navigation to another year. Left and right arrows change the month,.

![Button States](/img/components/date-picker-button-states.png)

<style>
[data-theme="dark"] img[src="/img/components/date-picker-button-states.png"] {
 content: url(/img/components/date-picker-button-states-dark.png);
}
</style>

![Changing Month or Year](/img/components/date-picker-changing-month-year.png)

<style>
[data-theme="dark"] img[src="/img/components/date-picker-changing-month-year.png"] {
 content: url(/img/components/date-picker-changing-month-year-dark.png);
}
</style>

#### Date Range Picker

- When the user needs to filter/ search for an item (e.g. process, documents, invoice item) created within a specific time range, provide the ability for the user search within a date range.
- When the user clicks on the fields, follow the same behavior as date or time toggle.
- When the user hovers over a date in the future or past, highlight days in between, and highlight the day user's cursor is over.
- The date in the "From" field will always occur before the date in the "To" field.

**Invalid date range**

- Scenario 1 - When the "From" date occurs after the "To" date: When the user inputs the date in the "From" field that occurs after the date in the "To" field, dynamically clear the "From" field on blur and the field stays focused.
- Scenario 2 - When the "To" date occurs before the "From" date: When the user inputs the date in the "To" field that occurs before the date in the "From" field, dynamically clear the "To" field on blur and the field stays focused.

**Updating the date range**

- When the user is editing an existing date range and chooses a new date in either field ("From" or "To"), adjust the timeline to reflect the new date.
- When the user manually enters the date in either field ("From" or "To"), display the entered date range in the calendar.

![Date Range](/img/components/date-range-picker.png)

<style>
[data-theme="dark"] img[src="/img/components/date-range-picker.png"] {
 content: url(/img/components/date-range-picker-dark.png);
}
</style>

#### Time Picker

- Use the time picker input box to type in a specific time in hours and minutes.
- Clicking into the time zone dropdown, displays a list of time zones.

![Time Picker](/img/components/time-picker.png)

<style>
[data-theme="dark"] img[src="/img/components/time-picker.png"] {
 content: url(/img/components/time-picker-dark.png);
}
</style>

### Editorial

- Label: keep field labels short and informative. Use title case (only capitalize the first letter of each word) and describe the information that is being requested. Place labels directly above the field and align them to the left.
- Placeholder text: Use the placeholder text to prompt the user to enter the correct data format. Placeholder text can either be today's date or mm/dd/yyyy.

### Accessibility

- Make sure the user can interact with the Date & Time Picker using the keyboard. To give the input keyboard focus, use the `tab` key (or `shift` + `tab` when tabbing backwards)
- To activate the calendar popover, use the `enter`/`return` or `space` keys when the calendar icon is in focus.
- To activate the input, use the `enter`/`return` or `space` keys.
- Use a wrapping `<nav>` element to identify the calendar popover as a navigation section to screen readers and other assistive technologies. Provide a descriptive `aria-label` (for example, "Pick a date" or "Pick a date range") for the `<nav>` to reflect its purpose.
- Be sure to add `aria-label="Previous"` and ` aria-label="Next"` attributes to the previous/ next icons in the date picker.
- Provide clear and informative error messaging to help users understand what they needs to do to rectify the problem.

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors           |
| ---------- | ------- | -------------------- | ---------------------- |
| 10/11/2022 | 1.4.0   | Added new component. | D. Zambrano, E. Gunther |

{{</ whats-changed-table >}}
