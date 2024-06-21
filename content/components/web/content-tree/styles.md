---
title: "Content Tree"
layout: "single"
description: "A content tree provides users with a way to navigate nested hierarchical information using a parent-child relationship model"
images:
  - "/img/components/headers/content-tree.png"
components: true
componentsWeb: true
reactBootstrapURL: "/components/content-tree/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/story/components-content-tree--default
tags: [styles]
---

## Specifications

### Anatomy

A content tree should be located on the left side of the screen and should consist of the following elements:

<img src="/img/components/tree-anatomy.svg" class="img-fluid" alt="Tree Anatomy"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-anatomy.svg"] {
 content: url(/img/components/tree-anatomy-dark.svg);
}
</style>

**Tree item:**

A content tree view is text-only by default. This option is best used when a hierarchy consists of all of the same content type. Background color: white, font weight: Semi-bold/ 600, font color: Trimble Gray. There are two sizes of available:

- **Default:** 48px/3rem in height
- **Condensed:** 32px/2rem in height

- **Collapse/ expand icon:** Size: 16x16px, color: Trimble Gray. _required_
- **Drag icon:** Allows the user to rearrange items in the content tree and change their hierarchical relationships. Size: 16x16px, color: Trimble Gray. _optional_
- **Checkbox:** Checkboxes within the tree view allow users to select items and apply actions to them. Both single-select and multiselect tree views display checkboxes on the left side of each item. Size: 16x16px (see [Checkboxes)](/components/checkboxes/). _optional_
- **Icon:** Icons can be used to add clarification about tree view items. They help to differentiate content types visually. Choose icons that relate to the object type being represented in the content tree. These icons can be unique to specific data types to add better clarification for users. Size: 16x16px, color: Trimble Gray. _optional_
- **Action icon(s):** Action icons may appear next to the tree item or above the content tree in an action bar. _optional_

<img src="/img/components/tree-specs.svg" class="img-fluid" alt="Tree Specifications">

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-specs.svg"] {
 content: url(/img/components/tree-specs-dark.svg);
}
</style>

### Behaviors

- Expand icon expands the clicked folder and does not collapse any other folders that are open.
- When a folder expands and collapses only its height should change; its width should remain consistent.
- Expand-and-collapse functionality should never be triggered on hover.
- Clicking the chevron will expand the folder but not select it.
- Always display the collapse and expand button.
- The content tree may have an action bar above it’s content where the user can trigger additional actions:
  - Collapse all,
  - Duplicate,
  - Reorder (drag & drop),
  - Delete,
  - Edit,
  - Add new folder.
- The content tree may include a search box.

#### States of Tree Items

<img src="/img/components/tree-item-states.svg" class="img-fluid bg-light" width="792" height="751" loading="lazy" alt="Tree Item States"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-item-states.svg"] {
 content: url(/img/components/tree-item-states-dark.svg);
}
</style>

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>State</th>
      <th width="20%">Background color</th>
      <th width="21%">Top/bottom border</th>
      <th width="21%">Font</th>
      <th width="21%">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default</td>
      <td>{{< color-preview nameL="white" hexL="#ffffff" nameD="Gray 10" hexD="#171C1E">}}</td>
      <td>1px solid <br>{{< color-preview nameL="Gray 0" hexL="#e0e1e9" nameD="Gray 8" hexD="#464B52">}}</td>
      <td>{{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff">}} Regular, 400</td>
      <td>Body text for default size; Small body text for condensed size</td>
    </tr>
    <tr>
      <td>Hover</td>
      <td>{{< color-preview nameL="Gray 0" hexL="#e0e1e9" nameD="Gray 8" hexD="#464B52">}}</td>
      <td>1px solid {{< color-preview nameL="Gray 0" hexL="#e0e1e9" nameD="Gray 8" hexD="#464B52">}}</td>
      <td>{{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff">}} Regular, 400</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>Selected</td>
      <td>{{< color-preview nameL="Blue Pale" hexL="#dcedf9" nameD="Trimble Dark" hexD="#019AEB4d">}}</td>
      <td>1px solid {{< color-preview nameL="Gray 0" hexL="#e0e1e9" nameD="Trimble Dark" hexD="#019AEB">}}</td>
      <td>{{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff">}} Regular, 400</td>
      <td>Checkmark appears at the end if action icons are not used</td>
    </tr>
    <tr>
      <td>Disabled</td>
      <td>{{< color-preview nameL="White" hexL="#ffffff" nameD="#Gray 10" hexD="#171C1E">}}</td>
      <td>1px solid {{< color-preview nameL="Gray 0" hexL="#e0e1e9" nameD="Gray 8" hexD="#464B52">}}</td>
      <td>{{< color-preview nameL="Gray 2" hexL="#b7b9c3" nameD="White (40%)" hexD="#ffffff66">}} Regular, 400</td>
      <td>See <a href="/components/checkboxes/">Checkboxes</a> for specifications</td>
    </td>
  </tbody>
</table>

### Collapse and Expand

- Clicking the collapse/ expand button in each content tree item expands or collapse a tree view item that contains child tree items.
- Clicking the chevron expands the folder but does not select it. Click a tree item selects it and expands it.
- User can click the "Collapse all" icon/button in the action bar to have all the open folders in the tree collapse.

<img src="/img/components/tree-open-close.svg" class="img-fluid" alt="Collapse and Expand"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-open-close.svg"] {
 content: url(/img/components/tree-open-close-dark.svg);
}
</style>

### Text Overflow

When a label's length is too long to display within the tree view, the text should be truncated at the end using an ellipsis. Hovering over or focusing on the truncated tree view item should reveal a tooltip that shows the full text of the label.

<img src="/img/components/tree-text-overflow.svg" class="img-fluid" alt="Text Overflow"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-text-overflow.svg"] {
 content: url(/img/components/tree-text-overflow-dark.svg);
}
</style>

<!-- ### Adjustable Layout

- The width of the content tree is not set by this component.
- Additionally, you can add a drag bar to the right of the content tree to allow the user to adjust the width. Adjusting the width: resizes page content.

When the content tree hierarchy could be deeper than the available space in the layout, use an adjustable layout. It will allow users to modify the layout and still preserve visibility of other items in the tree.

If you have a layout that doesn't allow for users to adjust the width of the container for a content tree, allow them to horizontally scroll in order to see the full depth of the hierarchy.

_Add image_ -->

### Large Tree Views

When tree views are very large, use a progress circle or a "show more" affordance to show additional parts when it’s contextually relevant. These loading patterns can apply to the entire tree view or to nested tree view items.

If system processes are delaying the display of child tree view items when a parent tree view item is expanded, show a clear indication that the items are in the process of loading (see [Spinners](/components/spinners/)).

<img src="/img/components/tree-lrg-loading.svg" class="img-fluid" alt="Large Tree Views"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-lrg-loading.svg"] {
 content: url(/img/components/tree-lrg-loading-dark.svg);
}
</style>

### Content Tree Action bar

<img src="/img/components/tree-content-br.svg" class="img-fluid" alt="Content Tree Action bar"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-content-br.svg"] {
 content: url(/img/components/tree-content-br-dark.svg);
}
</style>

The content tree may include an action bar that contains a variety of icons that turn on a content tree functionality:

**Collapse All**

- Enabled when a folder is expanded.
- Clicking it, collapses all the expanded folders.
- It highlights the top parent folder as the selected one; It does not change the selected folder (if there is one).

**Duplicate**

<img src="/img/components/tree-duplicating.svg" class="img-fluid" alt="Duplicate Tree"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-duplicating.svg"] {
 content: url(/img/components/tree-duplicating-dark.svg);
}
</style>

When a folder is selected, the duplicate icon in the toolbar becomes active.

- The user clicks the duplicate icon.
- The system duplicated that folder and it’s children.
- The system pastes the duplicate folder below.
- The new folder name is immediately editable. The name is not required to be unique; however, best for best [accessibility](/components/web/accordions/accessibility/) practices, it should be).

**Drag and Drop**

<img src="/img/components/tree-drag-drop.svg" class="img-fluid" alt="Drag & Drop"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-drag-drop.svg"] {
 content: url(/img/components/tree-drag-drop-dark.svg);
}
</style>

The Drag & Drop icon (and functionality) is hidden by default. The user needs to click the icon in the action bar above the content Tree.

- Click the Drag & Drop icon.
- The tree shows the Drag & Drop icon in front of each item in the tree.
- The user can still expand the tree to be able to drag and drop into a different folder.

Content tree items can be dragged and dropped as a way of reordering or restructuring the hierarchy. Multiple content tree items can be dragged and reordered simultaneously. When selecting items in different hierarchies, dropping them in a new location flattens their hierarchical relationship with one another as sibling children of the content tree item they were dropped into.

The content tree DOES NOT accept dropped items from outside the component (e.g., dropping a new file into a content tree in order to upload a file to a specific folder is not allowed).

If a drag operation is not allowed, the line indicating the drop location will be red, and when the user tries to drop it, the item will return to its original location.

**Delete**

- Only enabled when a tree item is selected.
- When clicked, a modal opens to confirm the delete (see [Modals](/components/web/modals/)). It warns the user they are about to delete x number of items.
- Deletes everything in the tree item including its children.

**Edit Tree Item Name**

<img src="/img/components/tree-edit.svg" class="img-fluid" alt="Edit"></br>

<style>
[data-bs-theme="dark"] img[src="/img/components/tree-edit.svg"] {
 content: url(/img/components/tree-edit-dark.svg);
}
</style>

When a tree item is selected, the edit icon in the toolbar becomes active.

- User clicks the edit icon.
- The tree item name becomes an editable input field (see [Inputs](/components/web/inputs/)).
- The user types in a new name (see [accessibility](/components/web/accordions/accessibility/) guidelines below for best naming conventions).
- The user can click outside of the input field or press enter to commit the new tree item name.

**Add New Tree Item**

Clicking the + will either add a new tree item to the top of the tree structure or if an item is selected above it.

- When the user clicks the + icon, a new tree item is added to the top of the tree or above a selected tree item.
- The user types in a new tree item name (see [accessibility](/components/web/accordions/accessibility/) guidelines below for best naming conventions).
- The user can click outside of the input field or press enter to commit the new tree item and its name.

_Note: The user can later drag & drop to move the tree item into their preferred place._

**Filter**

Filter shows all the tree items matching the user's search term. Tree items are expanded to show all of the results of the search. Matching items are highlighted in {{< color-preview nameL="Trimble Blue" hexL="#0063a3" nameD="Trimble Blue" hexD="#0063a3" >}}.

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                |
| ---------- | ------- | -------------------- | ------------------------------------------- |
| 02/04/2022 | 1.3.0   | New component added. | J. Wittmeyer, E. Gunther, L. Meskanen-Kundu |

{{</ whats-changed-table >}}
