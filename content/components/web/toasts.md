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
---

## Overview

Toasts display low priority, event-driven feedback which usually doesn’t require any user interaction. They appear for a set time and disappear automatically. They are appropriate for informing the user about action confirmations without being intrusive or infer unnecessary attention (e.g. "Message Sent" or "Changes Saved").

## Usage

**Use when**

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

**Don't use when**

- Displaying critical information that require immediate user action. Instead, use an [alert](/components/alerts/)
- The information being displayed is highly contextual to the user action.

## Specifications

- Container (Height: 42px; Radius: 2px; Padding: 16px; Margin: 16px; solid color; no border; [level 3 shadow](/foundations/shadows-and-depth/)) _required_
- Toast text (Font: Open Sans Semibold 14px) _required_
- Leading non-interactive icon (16x16px) _optional_
- Trailing close icon (16x16px) or a Text Only [Button](/components/buttons/) _optional_

<div class="guide-example-block my-3 py-3 bg-light">
  <div class="guide-content-sample anatomy-display-container">
    <div
      class="toast show anatomy-display-static"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-anatomy-colors="false">
      Aww yeah, you read a toast.
      <button type="button" class="close" data-dismiss="alert">
      <i class="modus-icon material-icons notranslate">close</i>
      </button>
    </div>
  </div>
</div>

**Toasts**

- Appear on the bottom, relative to the bottom edge of the browser/ device.
- Fill as much horizontal space as needed.
- Float above the content.
- Fade out automatically after some some.
- Can sometimes be dismissed with a close icon.
- Cannot include links.

**Basic Toasts**

<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-dark show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a dark toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-primary show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a primary toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-secondary show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a secondary toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-tertiary show text-dark" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a tertiary toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-danger show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a danger toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-warning show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a warning toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>
<div class="toast toast-success show" role="alert" aria-live="assertive" aria-atomic="true">
  Aww yeah, you read a success toast.
  <button type="button" class="close" data-dismiss="alert">
    <i class="modus-icon material-icons notranslate">close</i>
  </button>
</div>

### Behaviors

- When applicable, dismiss by clicking the close icon.
- Toasts fade out automatically after 30 seconds.

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening in friendly, non-technical language.
- If the message requires a user to take action in order to continue or complete a task, use an [alert](/components/alerts/)
  instead.
- For messages, use full sentences with punctuation. Use sentence case.

### Accessibility

- If it’s an important message like an error, use `role="alert" aria-live="assertive"`, otherwise use `role="status" aria-live="polite"` attributes.
- Toasts should not be visually hidden if they are not being used. If you do not want a screen reader to pick up a toast, use the `aria-hidden='true'` HTML attribute and/or `{display: none;}` in your CSS.
- When constructing a toast message, consider how it will be read by a screen reader:
  - Write out dates, e.g., December 1, 2018 and not 12/1/2018.
  - Avoid non-text symbols like “/” and “+”.
  - When describing a date or time range use “to” instead of “–”.
- Toasts should be used sparingly and only in instances that warrant removing the user from their current task. Too many toasts can be disorienting to users with cognitive issues.

{{< whats-changed-table >}}

| Date       | Version | Notes                                       | Contributors                   |
| ---------- | ------- | ------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Background colors changed to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
