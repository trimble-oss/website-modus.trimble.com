---
title: "Alerts"
menuTitle: "Alerts"
layout: "single"
description: "Alerts provide contextual information about system status that persists until dismissed or resolved."
components: true
images:
  - "/img/headers/components/alerts.png"
aliases:
  - "/elements/alerts/"
bootstrapURL: "/components/alerts/"
reactBootstrapURL: "/components/alerts/"
---

## Overview

Alerts display in direct response to a user action (e.g. clicking the Submit button on a form) and can be informational or identify actions required on that page before the user can continue. They appear at the top of the content area, push other content down, and persist until the user dismisses them or navigates away from the page. There are four types of notifications: error, warning, success, and informational.

### Usage

**Use when**

- Providing a user contextual information or status of an action they’re trying to complete in a specific element on the visible page.

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="line-height: 1.25" scope="row">
        <div class="border">
          <div class="p-3 bg-primary text-white d-flex">
            <i class="material-icons" style="color: #fff;">menu</i>
            <span class="h1 ml-3 mb-0" style="color: #fff;">App Title</span>
          </div>
          <div class="alert alert-danger mx-3 mt-3 mb-0" role="alert">
            <i class="modus-icon material-icons alert-icon">error</i>
            <div>Error! Your username and password were incorrect</div>
          </div>
          <div class="p-3">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="do" scope="row">
        Alerts are contextual to their containing UI element.
      </td>
    </tr>
  </tbody>
</table>

**Don’t use when**

- Providing a user with a message related to a page-level or out-of-view event, like completion of a report generation. Instead, use a [Toast](/components/toasts/).
- Providing a user with a system-level message, like a network outage or browser incompatibility. Instead, use a [Modal](/components/modals/)
- Attaching an error message to an input.

## Specifications

- Container (Height: 56px; Radius: 2px; Color: white background, 1px border, 8px indicator line same color as border on the left; Padding: 16px; Margin: 16px) _required_
- Alert text (Font: Open Sans Bold 14px) _required_
- Leading Non-Interactive Icon/ Charm (16x16px) _optional_
- Button (text only, right aligned) or trailing close icon (16px16px) _optional_
- Link (underlined, only one per alert) _optional_

<div class="p-5 my-3 pr-5 bg-light">
  <div class="alert alert-success" style="max-width: 460px" role="alert" data-toggle="popover" data-trigger="manual" data-html="true" data-placement="right" data-content="<small><b>Height:</b> 56px<br><b>Background:</b> White<br><b>Border-radius:</b> 2px<br></small>">
      <i class="material-icons alert-icon">check_circle</i>
      <div data-toggle="popover" data-trigger="manual" data-html="true" data-placement="bottom" data-offset="19" data-content="<small><b>Font:</b> Open Sans Bold 14px</small>">You have completed a task.</div>
    </div>
</div>

<script>
$(function () {
  $('[data-toggle="popover"]').popover('show')
})
</script>

### Alerts

- Appear on top of the main content container.
- Stretch horizontally to fill 100% of the container they are placed in.
  - Always follow [typography line length guidelines](/foundations/typography/#line-length) when displaying alerts. Pair with another component, like a Form, or place in a fixed-width container to ensure alerts don't get too wide.
- Push other content down to make room for an alert on a page.
- Can include tint to add extra emphasis or to increase contrast with page content. When changing background color, make sure the text and icons pass [contrast ratio requirements](/foundations/accessibility/).
- Do not have a shadow.
- Remain on the page until dismissed.

### Basic Alerts

<div class="alert alert-primary" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>A basic Primary alert</div>
</div>
<div class="alert alert-secondary" role="alert">
  <i class="modus-icon material-icons alert-icon">help</i>
  <div>A basic secondary alert with a button</div>
  <a href="#" class="btn btn-sm btn-text-secondary">Button</a>
</div>
<div class="alert alert-dark" role="alert">
  <i class="modus-icon material-icons alert-icon">info</i>
  <div>A basic <u>dark alert</u> with <em>text formatting</em></div>
</div>
<div class="alert alert-success fade show" role="alert">
  <i class="material-icons alert-icon">check_circle</i>
  <div>Success! A basic success alert with a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
<div class="alert alert-danger fade show" role="alert">
  <i class="material-icons alert-icon">error</i>
  <div>Error! A basic error alert with a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>
<div class="alert alert-warning text-dark fade show" role="alert">
  <i class="modus-icon material-icons alert-icon">warning</i>
  <div>Warning! A basic warning alert with a dismiss icon</div>
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons">close</i>
  </button>
</div>

### Behaviors

- When applicable, dismiss by clicking the close icon.
- When dismissed or resolved, alerts slide up and fade out, relinquishing their space.

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening and whether they need to act to successfully keep moving through a task. Warning alerts might tell a user what could happen if they don’t address what they’re being warned about.
- For messages, use full sentences with punctuation. Use sentence case.
- Unordered lists offer a structured format to present:
  - Items needing resolution
  - Guidelines to successful completion
  - Ways to resolve problems

### Accessibility

- Include the `role="alert"` attribute.
- An alert is a special kind of assertive ARIA live region, so screen readers should immediately interrupt anything they were previously saying and instead read the announcement. Most screen readers say "Alert," before reading the text inside the alert.
- If user action is required in order to continue, use `role="alertdialog"`.
- Alerts should not be visually hidden if they are not being used. If you do not want a screen reader to pick up an alert, use the `aria-hidden='true'` HTML attribute and/or `{display: none;}` in your CSS.
- It's best to have only one alert message visible at a time because some screen readers will read all of the available alert messages each time that a new alert message is activated. When activating a new alert, it's best to deactivate any other alerts first.
- When constructing an alert message, consider how it will be read by a screen reader:
  - Write out dates, e.g., December 1, 2018 and not 12/1/2018.
  - Avoid non-text symbols like “/” and “+”.
  - When describing a date or time range use “to” instead of “–”.

{{< whats-changed-table >}}

| Date       | Version | Notes                                              | Contributors                   |
| ---------- | ------- | -------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Warning alert text color changed to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
