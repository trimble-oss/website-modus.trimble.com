---
title: "Alerts"
menuTitle: "Alerts"
layout: "single"
description: "Alerts provide contextual information about system status that persists until dismissed or resolved."
components: true
componentsWeb: true
images:
  - "/img/components/headers/alerts.png"
bootstrapURL: "/components/alerts/"
reactBootstrapURL: "/components/alerts/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-alert--default"
aliases:
  - "/components/alerts/"
tags: [usage]
---

## Overview

Alerts display in direct response to a user action (e.g. clicking the Submit button on a form) and can be informational or identify actions required on that page before the user can continue. They appear at the top of the content area, push other content down, and persist until the user dismisses them or navigates away from the page. There are four types of notifications: error, warning, success, and informational.

### Usage

**Use when**

- Providing a user contextual information or status of an action they’re trying to complete in a specific element on the visible page.

### Example

<table class="table table-bordered">
  <tbody>
    <tr>
      <td style="line-height: 1.25" scope="row">
        <div class="border">
          <div class="alert alert-danger mx-3 mt-3 mb-0" role="alert">
            <i class="modus-icons alert-icon" aria-hidden="true">warning</i>
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
                  autocomplete="email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  autocomplete="off"
                />
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

- Providing a user with a message related to a page-level or out-of-view event, like completion of a report generation. Instead, use a [Toast](/components/web/toasts/).
- Providing a user with a system-level message, like a network outage or browser incompatibility. Instead, use a [Modal](/components/web/modals/)
- Attaching an error message to an input.

{{< whats-changed-table >}}

| Date       | Version | Notes                                              | Contributors                   |
| ---------- | ------- | -------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Warning alert text color changed to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
