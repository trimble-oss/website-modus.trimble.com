---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
componentsWeb: true
images:
  - "/img/components/headers/checkboxes.png"
keywords: forms, form
bootstrapURL: "/components/checkboxes/"
reactBootstrapURL: "/components/checkboxes/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-checkbox--default"
aliases:
  - "/components/checkboxes/"
tags: [usage]
---

## Overview

Checkboxes should be used in forms that require submission and processing. The checkbox is shown as a square box that is ticked when it is activated. It allows the user to select one or more options among all the limited choices and requires a button press to confirm the user's settings before they are committed.

<div class="guide-example-block">
  <div class="guide-sample mb-4">
  <div class="form-check my-2">
  <input class="form-check-input" type="checkbox" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox" id="flexCheckCheckedDisabled" disabled checked>
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Disabled Checked checkbox
  </label>
</div>
<div class="form-check my-2">
  <input class="form-check-input" type="checkbox" id="flexCheckDisabled" disabled>
  <label class="form-check-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
</div>
</div>

<script>
document.querySelector('#flexCheckIndeterminate').indeterminate = true;
</script>
<style>
[data-bs-theme=dark] .form-check-input[type="checkbox"]:indeterminate {
  border-color: #019aeb;
}

[data-bs-theme=dark] .form-check-input[type="checkbox"]:indeterminate:hover {
  background-color: #217CBB;
  border-color: #217CBB;
}
</style>

## Usage

#### Use when

- Affording a binary selection, like accepting terms and conditions.
- Affording multiple selections from a set of options.
- Enabling selection of an object, such as a [Card](/components/web/cards/).
- Affording selection of a row within a data [Table](/components/web/tables/).

<table class="table table-bordered">
  <tbody>
    <thead class="thead-light">
      <tr>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tr>
      <td scope="row">
        <div class="card">
          <div class="card-header"><strong>Terms and Conditions</strong></div>
          <div class="card-body" style="max-height: 15rem; overflow-y: scroll;">
            <p>
              Items That are Not Considered Part of a court requires any other
              party; and iv) states that any problems introduced by others will
              not be used for display of characters in the preceding Article
              shall be reformed to the absence of any other exploitation.
              Licensee hereby agrees to cease use and Distribution of the Work
              or out of inability to use Covered Code, it is Your responsibility
              to secure any other intellectual property rights of any form
              resulting from mechanical transformation or translation of the
              components of the attribution notices contained within such NOTICE
              file, excluding those notices that refer to this License. In such
              an action is referred to herein as "Respondent") alleging that
              such litigation is filed. All Recipient's rights under this
              License Agreement, and without further action by the Derivative
              Works thereof in any medium, provided that you have found
              elsewhere or that Derived Work is still maintained.
            </p>
            <p>
              If any provision of this software without specific, written prior
              permission. Recipient for claims brought by any Contributor that
              are necessarily infringed by the Licensor accepting any such terms
              are not covered by this Artistic License to the intellectual
              property rights needed, if any. Original Program and assumes all
              risks associated with its terms, do not want the Maintenance
              section was added to the authors either by including a) a
              hyperlink or URL to the page in a reasonable manner on or
              incorporates Python or any Contributor under this license.
            </p>
            <p>
              Dispute Resolution. Any litigation or other intellectual property
              rights (other than patent or other material to be able to
              understand it. Application of This License. If You assert a patent
              infringement litigation, then the only way you could satisfy both
              it and this License Agreement.
            </p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <div class="form-group mb-0">
              <div class="form-check">
  <input class="form-check-input" type="checkbox" id="IAccept">
  <label class="form-check-label" for="IAccept">
    I Accept
  </label>
</div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="do" scope="row">
        Checkboxes should be used for instances that require submission.
      </td>
    </tr>
  </tbody>
</table>

#### Don't use when

- A user can select only one option from a list. Use [Radio Buttons](/components/web/radio-buttons/) instead. Checkboxes allow the user to select multiple items in a set whereas radio buttons allow the user to select only one option.
- Turning a feature, mode, or functionality on and off. Instead, use a [Switch](/components/web/switches/).
- Checking or unchecking elicits an immediate change in the UI or functionality, such as enabling a disabled field or revealing more controls. Instead, use a [Switch](/components/web/switches/).
- Checking or unchecking elicits a change in background functionality without affecting the UI, like disabling an email notification. Instead, use a [Switch](/components/web/switches/).

<table class="table table-bordered">
  <tbody>
    <tr>
      <td scope="row">
        <div class="d-flex bg-panel-background p-3">
          <div class="form-group mb-0 d-flex">
            <div class="custom-control custom-control-inline custom-checkbox me-3">
              <input
                type="checkbox"
                name="dont1"
                id="dont1"
                class="form-check-input"
              />
              <label class="form-check-label" for="dont1"
                >Hide Offline</label
              >
            </div>
            <div class="custom-control custom-control-inline custom-checkbox me-3">
              <input
                type="checkbox"
                name="dont2"
                id="dont2"
                class="form-check-input"
              />
              <label class="form-check-label" for="dont2"
                >Show Friends Only</label
              >
            </div>
            <div class="custom-control custom-control-inline custom-checkbox me-3">
              <input
                type="checkbox"
                name="dont3"
                id="dont3"
                class="form-check-input"
              />
              <label class="form-check-label" for="dont3"
                >Collapse Panel</label
              >
            </div>
          </div>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            John Doe
            <span class="badge bg-success">Online</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Bob Smith
            <span class="badge bg-success">Online</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Jane Doe
            <span class="badge bg-tertiary text-dark">Offline</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Mary Smith
            <span class="badge bg-tertiary text-dark">Offline</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Jack Ryan
            <span class="badge bg-tertiary text-dark">Offline</span>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="dont" scope="row">
        <strong class="text-danger">Don't</strong> use checkboxes to control UI
        elements. For this example, a Switch would be used instead.
      </td>
    </tr>
  </tbody>
</table>

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                        | Contributors                   |
| ---------- | ------- | ---------------------------------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Outline color changed to be accessible. Background color added for emphasis. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
