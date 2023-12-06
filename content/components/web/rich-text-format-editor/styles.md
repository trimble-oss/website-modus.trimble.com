---
title: "Rich Text Format Editor"
layout: "single"
description: "Rich Text Format (RTF) Editor allows the user to style fonts and layout in a text area field."
components: true
componentsWeb: true
images:
  - "/img/components/headers/rtf-editor.png"
tags: [styles]
---

## Specifications

### RTF Toolbar

- The RTF Toolbar has a height of 40px adding 4 px horizontal padding to the 32px buttons.
- Button subgroups are grouped by a divider and padding of 4px in logical entities such as font type, size, characteristics, paragraph alignment, lists, and additional function, such as link.
- All buttons should feel clickable, interactive, and perform an action, see [Buttons](/components/web/buttons/).
- Buttons should be discoverable, easy to identify, and specific.

<style>
[data-bs-theme="light"] main button.btn .modus-icons {
  font-size: 24px;
  color: #000 !important;
}
[data-bs-theme="dark"] main button.btn .modus-icons {
  font-size: 24px;
  color: #fff !important;
}
</style>

<div class="guide-example-block my-3 bg-secondary bg-opacity-10 py-2 px-1">
  <div class="guide-content-sample bg-body m-3 mx-auto rtf-editor" style="max-width: 710px; min-width: 300px">
    <div class="d-flex border-top">
      <div>
        <select class="form-select form-select-sm border-top-0 border-bottom-0" aria-label="Default select example" style="max-width: 138px; width: 138px;">
          <option selected="">Sans Serif</option>
          <option
            value="1"
            class="font-serif"
            style="font-family:Georgia,times new roman,Times,serif;">
            Serif
          </option>
          <option value="2" class="font-monospace">Preformatted</option>
        </select>
      </div>
      <div>
        <select class="form-select form-select-sm border-top-0 border-bottom-0" aria-label="Default select example" style="max-width: 90px; min-width: 80px;">
          <option selected="" class="fs-4">14px</option>
          <option value="1" class="fs-5">12px</option>
          <option value="2" class="fs-6">10px</option>
        </select>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only" aria-label="Bold">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Bold" style="font-size: 24px; margin-top: 5px">text_bold</i>
        </button>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only" aria-label="Italic">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Italic" style="font-size: 24px; margin-top: 5px">text_italic</i>
        </button>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only" aria-label="Underlined">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Underlined" style="font-size: 24px; margin-top: 5px">text_underlined</i>
        </button>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Strikethrough" style="font-size: 24px; margin-top: 5px">text_strikethrough</i>
        </button>
      </div>
      <div class="vr"></div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Text align: Left">text_align_left</i>
        </button>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Text align: Center">text_centered</i>
        </button>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Text align: Right">text_align_right</i>
        </button>
      </div>
      <div class="vr"></div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="List: Bulleted">list_bulleted</i>
        </button>
      </div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="List: Numbered">list_numbered</i>
        </button>
      </div>
      <div class="vr"></div>
      <div class="mx-1">
        <button type="button" class="btn text-secondary btn-icon-only">
          <i class="modus-icons notranslate" aria-hidden="true" data-bs-toggle="tooltip" title="Link">link</i>
        </button>
      </div>
    </div>
    <div class="mb-3">
      <textarea class="form-control pe-none" id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
  </div>
</div>

### Modal (Insert/Edit Link)

The modals consists of following elements:

- Header, a brief title.
- Content area, which provides instructions.
- Page overlay, which partially blocks out the underlying page to focus attention on the modal content.
- Controls, which are usually buttons placed on the bottom right side of the modal header. A dialog should always include a **single primary button**. Primary button is often paired with an outline or a text-only button. Primary button, representing the desired user action, should always appear to the right of other buttons.
- Close icon button, which closes the dialog and cancels user action. **Always include a close icon button on a modal**. It should display in the top right corner.

<div class="guide-example-block my-3 bg-secondary bg-opacity-10">
  <div class="guide-content-sample modal-static">
    <div class="modal show d-block position-relative" tabindex="-1" role="dialog" style="z-index: 1">
      <div class="modal-dialog show mx-auto px-3 px-md-5" role="document">
        <div class="modal-content shadow-lg border-0">
          <div class="modal-header border-0" style="height: 64px">
            <h4 class="modal-title">Add Link</h4>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              style="background-size: 24px; opacity: 0.75"></button>
          </div>
          <div class="modal-body">
            <div class="form-group mb-3">
              <label for="inputText">Text <span class="text-danger">*</span></label>
              <input class="form-control my-1" placeholder="Enter text" type="text" id="inputText" required />
            </div>
            <div class="form-group mb-3">
              <label for="inputUrl">URL <span class="text-danger">*</span></label>
              <input class="form-control my-1" placeholder="Placeholder text" type="url" id="inputUrl" required />
            </div>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-outline-secondary btn-outline-high-contrast justify-self-start">
              Cancel
            </button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Behaviors

**Text Area Input**

- Form inputs follow the logic of [Inputs](/components/web/inputs/) for default, focused, filled, disabled, and invalid states.
- When the user right-clicks on a link, a link modal opens.
- A maximum height (number of rows shown) can be set on the text area. Use this to visually indicate to the user the recommended length of the response. Once the maximum height of a text area is met, a scrollbar appears to let the users know they have used the available space.

**RTF Toolbar**

The RTF toolbar consists of an input dropdown, a series of buttons, out of which the link button opens a modal to edit or add a link.
The input dropdown (highlighted below) allows the user to select a font type or font family.

{{< img src="/img/components/rtf-input-dropdown.svg" dark="/img/components/rtf-input-dropdown-dark.svg" class="w-100" alt="RTF Input Dropdown in Toolbar" >}}

Consider following behaviors:

- Input dropdown in toolbar:
  - In cases where the available options are longer than the dropdown field, the dropdown menu will expand to the width of the longest option. Alternately, the long list item name will truncate at a specified max-width set.
  - When the user clicks in the field, the field state changes to focused state, opens the drop menu, places a text cursor in the field. It also allows the user to lookup or select a value from the dropdown.
  - When the user starts typing, the chevron icon is swapped for the clear option (for easy deletion of the entered search value).
  - If the user enters a value that does not exist in the dropdown, notify the user that the value entered returned no results. The message should read: “No results found.” Additionally, if possible display tooltip, “Check spelling or try a different keyword.”
  - For validation and states follow the [Inputs](/components/web/inputs/) guidelines.
- Buttons:
  - All icon buttons should have the following states:
    - Default
    - Hover
    - Active
    - Disabled
  - For additional guidance, check the [Buttons](/components/web/buttons/) section.
- Modal (insert/edit link):
  - Dialogs are usually activated by user actions (such as activating a button).
  - Dialogs can only be closed by either choosing an action represented by a button (e.g., Save or Cancel) or by clicking the Close icon. Dismissing a modal by clicking outside of the modal is optional.
  - Once a dialog reaches its maximum height, the header will remain fixed and content will scroll within the container. Scrolling within a modal should be discouraged: avoid extensive copy or many elements.
  - Dialogs are centered horizontally and vertically in the viewport.
  - For more guidance, see [Modals](/components/web/modals/).

### Editorial

**Text Area Input**

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark required fields with an \*.
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.

**Input Dropdown in Toolbar**

- When possible, add helper text below an input to further clarify validation errors, for example, a misspelling of a font type name.
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.
