---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
keywords: forms, form
aliases:
  - "/checkboxes.html"
---

## Overview

Checkboxes should be used in forms that require submission and processing. The checkbox is shown as a square box that is ticked when it is activated. It allows the user to select one or more options among all the limited choices and requires a button press to confirm the user's settings before they are committed.

<div class="guide-example-block">
  <div class="guide-sample d-flex mb-4">
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          checked=""
          class="custom-control-input"
          id="exampleCheckbox"
          name="exampleCheckbox"
          value="customEx"
        />
        <label class="custom-control-label" for="exampleCheckbox"
          >Checkbox</label
        >
      </div>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="exampleCheckbox2"
          name="exampleCheckbox2"
          value="customEx"
        />
        <label class="custom-control-label" for="exampleCheckbox2"
          >Checkbox</label
        >
      </div>
    </div>
    <div class="form-group ml-3">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          disabled=""
          checked=""
          class="custom-control-input"
          id="exampleCheckbox3"
          name="exampleCheckbox3"
          value="customEx"
        />
        <label class="custom-control-label" for="exampleCheckbox3"
          >Disabled</label
        >
      </div>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          disabled=""
          class="custom-control-input"
          id="exampleCheckbox4"
          name="exampleCheckbox4"
          value="customEx"
        />
        <label class="custom-control-label" for="exampleCheckbox4"
          >Disabled</label
        >
      </div>
    </div>
    <div class="form-group ml-3">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="exampleCheckbox5"
          name="exampleCheckbox5"
          value="customEx">
        <label class="custom-control-label" for="exampleCheckbox5"
         >Indeterminate State</label
         >
      </div>
    </div>
  </div>
</div>

<script>
  $('#exampleCheckbox5').prop('indeterminate', true)
</script>

## Usage

**Use when**

- Affording a binary selection, like accepting terms and conditions.
- Affording multiple selections from a set of options.
- Enabling selection of an object, such as a [Card](/elements/cards/).
- Affording selection of a row within a data [Table](/elements/tables/).

<table class="table table-bordered bg-white">
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
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="accept"
                  id="accept"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="accept"
                  >I Accept</label
                >
              </div>
            </div>
            <button class="btn btn-primary">Submit</button>
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

**Don't use when**

- Turning a feature, mode, or functionality on and off. Instead, use a [Switch](/elements/switches/).
- Checking or unchecking elicits an immediate change in the UI or functionality, such as enabling a disabled field or revealing more controls. Instead, use a [Switch](/elements/switches/).
- Checking or unchecking elicits a change in background functionality without affecting the UI, like disabling an email notification. Instead, use a [Switch](/elements/switches/).

<table class="table table-bordered bg-white">
  <tbody>
    <tr>
      <td scope="row">
        <div class="d-flex bg-panel-background p-3">
          <div class="form-group mb-0">
            <div class="custom-control custom-control-inline custom-checkbox">
              <input
                type="checkbox"
                name="dont1"
                id="dont1"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="dont1"
                >Hide Offline</label
              >
            </div>
            <div class="custom-control custom-control-inline custom-checkbox">
              <input
                type="checkbox"
                name="dont2"
                id="dont2"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="dont2"
                >Show Friends Only</label
              >
            </div>
            <div class="custom-control custom-control-inline custom-checkbox">
              <input
                type="checkbox"
                name="dont3"
                id="dont3"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="dont3"
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
            <span class="badge badge-success">Online</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Bob Smith
            <span class="badge badge-success">Online</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Jane Doe
            <span class="badge badge-tertiary">Offline</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Mary Smith
            <span class="badge badge-tertiary">Offline</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Jack Ryan
            <span class="badge badge-tertiary">Offline</span>
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

## Specifications

- Checkboxes use the same `:hover` and `:active` styles as the primary [Button](/elements/buttons/) when checked.

### Behaviors

- Reflects the affirmative (“yes” or “true”) of its label when checked.
- Choices made via checkbox should always be submitted or saved using a [Button](/elements/buttons/).
- A checkbox’s label is included in the clickable target area.
- The default view of a set of checkboxes is having no option selected.

### Editorial

- Checkbox labels may be capitalized in 2 ways, depending on their length and placement on the UI:
  - Use title case for short labels (fewer than 3 words) that are to the left or above a checkbox.
  - Use sentence case for longer labels (more than 3 words) that are placed to the right of a check box, especially if the label reads like a phrase.

**Default**

- Use full sentences with punctuation.
- If user is consenting to something, start the sentence with “I,” and also run the phrasing you choose by compliance.

**Groups**

- Use full sentences with punctuation for the checkbox group label.
- Try to keep checkbox labels brief and start them with verbs.

### Accessibility

- The checkbox has role `checkbox`.
- The checkbox has an accessible label provided by one of the following:
  - Visible text content contained within the element with role `checkbox`.
  - A visible label referenced by the value of `aria-labelledby` set on the element with role `checkbox`.
  - `aria-label` set on the element with role `checkbox`.
- When checked, the checkbox element has state `aria-checked` set to `true`. When not checked, it has state `aria-checked` set to `false`. When partially checked, it has state `aria-checked` set to `mixed`.
- If a set of checkboxes is presented as a logical group with a visible label, the checkboxes are included in an element with role `group` that has the property `aria-labelledby` set to the ID of the element containing the label.
- If the presentation includes additional descriptive static text relevant to a checkbox or checkbox group, the checkbox or checkbox group has the property `aria-describedby` set to the ID of the element containing the description.
- Use `fieldset` to create a checkbox group.
- When the checkbox has focus, pressing the "Space" key changes the state of the checkbox.

{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0   | Outline color changed to be accessible. Background color added for emphasis.  |  E. Bohn, L. Kause, N. Springer  |
{{</ whats-changed-table >}}
