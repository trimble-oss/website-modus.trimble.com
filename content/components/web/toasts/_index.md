---
title: "Toasts"
menuTitle: "Toasts"
layout: "single"
description: "Toasts provide non-intrusive, short-lasting contextual feedback to the user."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toasts.png"
keywords: alert
bootstrapURL: "/components/toasts/"
reactBootstrapURL: "/components/toasts/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-toast--default"
aliases:
  - "/components/toasts/"
tags: [usage]
---

## Overview

Toasts display low priority, event-driven feedback which usually doesn’t require any user interaction. They appear for a set time and disappear automatically. They are appropriate for informing the user about action confirmations without being intrusive or infer unnecessary attention (e.g. "Message Sent" or "Changes Saved").

## Usage

#### Use when

- Notifying the user of global information, such as a change in server connection status.
- Confirming the success of a global action.
- Displaying quick snippets of information that disappear on their own after a set amount of time has passed.

## Example

<table class="table table-bordered">
  <tbody>
    <tr>
      <td scope="row">
        <div class="border position-relative">
          <div class="p-3">
            <div class="list-group">
              <li class="list-group-item active list-item-left-control">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    checked
                    class="custom-control-input"
                    id="email1"
                    name="email1"
                  />
                  <label class="custom-control-label" for="email1"></label>
                </div>
                <span>Email 1</span>
              </li>
              <li class="list-group-item active list-item-left-control">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    checked
                    class="custom-control-input"
                    id="email2"
                    name="email2"
                  />
                  <label class="custom-control-label" for="email2"></label>
                </div>
                <span>Email 2</span>
              </li>
              <li class="list-group-item list-item-left-control">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="email3"
                    name="email3"
                  />
                  <label class="custom-control-label" for="email3"></label>
                </div>
                <span>Email 3</span>
              </li>
              <li class="list-group-item list-item-left-control">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="email4"
                    name="email4"
                  />
                  <label class="custom-control-label" for="email4"></label>
                </div>
                <span>Email 4</span>
              </li>
              <li class="list-group-item list-item-left-control">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="email5"
                    name="email5"
                  />
                  <label class="custom-control-label" for="email5"></label>
                </div>
                <span>Email 5</span>
              </li>
            </div>
          </div>
          <div
            class="toast toast-success show position-absolute"
            style="width: 350px; bottom: 2rem; left: calc(50% - 175px);"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            3 Emails Deleted
            <button
              type="button"
              class="btn btn-text-dark"
              data-dismiss="toast"
              aria-label="Close"
            >
              Undo
            </button>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="do" scope="row">
        Toasts notify the user of global actions, such as deleting a set of
        emails, and can offer the user a chance to undo that action in case of
        user error.
      </td>
    </tr>
  </tbody>
</table>

#### Don't use when

- Displaying critical information that require immediate user action. Instead, use an [alert](/components/web/alerts/)
- The information being displayed is highly contextual to the user action.

{{< whats-changed-table >}}

| Date       | Version | Notes                                       | Contributors                   |
| ---------- | ------- | ------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Background colors changed to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
