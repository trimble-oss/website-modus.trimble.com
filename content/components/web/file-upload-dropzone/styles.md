---
title: "File Upload Dropzone"
layout: "single"
description: "File upload dropzone allows users to upload single or multiple files to the application by dragging and dropping."
components: true
componentsWeb: true
images:
  - "/img/components/headers/file-upload-dropzone.png"
bootstrapURL: "/docs/v2/helpers/file-upload-dropzone/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-file-dropzone--default"
tags: [styles]
---

## Specifications

- Label (optional): communicates the context of the file upload.
- Description (required): explains any limitation as to the file format, number of files, and/ or the maximum size. Provide as much information to the user as you can to help prevent errors.
- Drag Zone (required): box outlined with a dotted line signifying the target zone for dropping files.
  - Icon (optional): upload icon
  - Text instructions (required): e.g. "Drag files here or browse to upload."
  - File picker (required): provide the user an option to open file browser (a link or a button). Make sure the drop zone is focusable and accessible with the keyboard.

### Behaviors

- When the user drags a file into the dropzone, provide a visual clue to show that the user has hit the target area and that the action is about to perform is valid. For example, when the user hovers over the zone while dragging a file, change the color of the box to blue (to indicate a valid action) or red (to indicate an invalid action).

<style>
.file-drop-zone.bg-danger {
  background-color: var(--Red-Red-Pale, #FBD4D7) !important;
  border-color: #ab1f26 !important;
}

html[data-bs-theme="dark"] {
  .file-drop-zone div,
  .file-drop-zone svg {
    color: #fff !important;
  }
  .file-drop-zone.bg-danger {
    background-color:  rgba(218, 33, 44, 0.20) !important;
    border-color: var(--Red-Red, #DA212C) !important;
    color: #fff !important;
  }
}
</style>

<div class="p-3 bg-secondary bg-opacity-10 mb-3">
<h3>Upload Files for Lorem Ipsum</h3>
<div class="small fw-bold">Max: 3 files (25 MB total)</div>

<div class="file-drop-zone w-75 bg-secondary bg-opacity-10 mt-1">
  <div class="mt-5 text-center h1">
  <svg class="" width="32" height="32" fill="currentColor"><use xlink:href="/modus-solid-icons.svg#cloud-upload" /></svg>
  </div>
  <div class="mb-5 text-center text-body">
    Drag files here or <a class="text-underline" href="#">browse</a> to upload.
  </div>
</div>
</div>

<div class="p-3 bg-secondary bg-opacity-10 mb-3">
<h3>Upload Files for Lorem Ipsum</h3>
<div class="small fw-bold">Max: 3 files (25 MB total)</div>

<div class="file-drop-zone w-75 bg-primary bg-opacity-10 mt-1 border-primary">
  <div class="mt-5 text-center h1">
  <svg class="text-primary" width="32" height="32" fill="currentColor"><use xlink:href="/modus-solid-icons.svg#cloud-upload" /></svg>
  </div>
  <div class="mb-5 text-center text-primary">
    Drag files here.
  </div>
</div>
</div>

<div class="p-3 bg-secondary bg-opacity-10 mb-3">
<h3>Upload Files for Lorem Ipsum</h3>
<div class="small fw-bold">Max: 3 files (25 MB total)</div>

<div class="file-drop-zone w-75 bg-danger bg-opacity-10 mt-1 border-danger">
  <div class="mt-5 text-center h1">
  <svg class="text-danger" width="32" height="32" fill="currentColor"><use xlink:href="/modus-solid-icons.svg#cloud-upload" /></svg>
  </div>
  <div class="mb-5 text-center text-danger">
    This is an error message.
  </div>
</div>
</div>

<div class="p-3 bg-secondary bg-opacity-10 mb-3">
<h3>Upload Files for Lorem Ipsum</h3>
<div class="small fw-bold">Max: 3 files (25 MB total)</div>

<div class="file-drop-zone disabled w-75 bg-opacity-10 mt-1">
  <div class="mt-5 text-center h1">
  <svg class="text-body opacity-25" width="32" height="32" fill="currentColor"><use xlink:href="/modus-solid-icons.svg#cloud-upload" /></svg>
  </div>
  <div class="mb-5 text-center">
    This is a disabled state message.
  </div>
</div>
</div>

- To help the user with motor navigation of moving a file into a precise location, the file upload dropzone should be active outside of its borders. It increases the area of the dropzone and provides a feeling of magnetic attraction preventing errors and speeding up interaction with the component.

{{< img src="/img/components/dropzone-active-area.svg" dark="/img/components/dropzone-active-area-dark.svg" class="w-100" alt="File Upload Dropzone Active Area" >}}

- Validate the file(s) to communicate to the user the effectiveness of his action.
- If the upload might take more than a few seconds, show progress of the upload. You may use a [Progress Bar](/components/web/progress-bars/) to show remaining time to upload a file or files.
- In case of an error, provide clear visual clues (information about the problem that occurred and specific instructions as to how to fix it).

### Editorial

- Label: keep the label short and concise limiting it to a few words and a single line of text.
- Description: provide straightforward, jargon-free information about file format requirements and limitations to prevent errors.
