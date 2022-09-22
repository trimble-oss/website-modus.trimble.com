---
title: "File Upload Dropzone"
layout: "single"
description: "File upload dropzone allows users to upload single or multiple files to the application by dragging and dropping."
components: true
images:
  - "/img/components/headers/file-upload-dropzone.png"
bootstrapURL: "/components/file-upload-dropzone/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-file-dropzone--default"
---

## Overview

File upload dropzone allows users to upload content from their computer or device into the application by dragging a file (or files) into a target zone.

![File Upload Dropzone](/img/components/file-upload-dropzone.svg)

<style>
[data-theme="dark"] img[src="/img/components/file-upload-dropzone.svg"] {
 content: url(/img/components/file-upload-dropzone-dark.svg);
}
</style>

## Usage

**Use when**

- User needs to upload one or more files.
- Uploading files by dragging and dropping.

**Don’t use when**

- Space is limited. Use a button action instead.
- You need multiple instances of uploading files on one page.

## Specifications

- Label (optional): communicates the context of the file upload.
- Description (required): explains any limitation as to the file format, number of files, and/ or the maximum size. Provide as much information to the user as you can to help prevent errors.
- Drag Zone (required): box outlined with a dotted line signifying the target zone for dropping files.
  - Icon (optional): upload icon
  - Text instructions (required): eg. "Drag files here or browse to upload."
  - File picker (required): provide the user an option to open file browser (a link or a button). Make sure the drop zone is focusable and accessible with the keyboard.

### Behaviors

- When the user drags a file into the dropzone, provide a visual clue to show that the user has hit the target area and that the action is about to perform is valid. For example, when the user hovers over the zone while dragging a file, change the color of the box to blue (to indicate a valid action) or red (to indicate an invalid action).

![Example of Error State](/img/components/dropzone-states.png)

- To help the user with motor navigation of moving a file into a precise location, the file upload dropzone should be active outside of its borders. It increases the area of the dropzone and provides a feeling of magnetic attraction preventing errors and speeding up interaction with the component.

![File Upload Dropzone Active Area](/img/components/dropzone-active-area.png)

- Validate the file(s) to communicate to the user the effectiveness of his action.
- If the upload might take more than a few seconds, show progress of the upload. You may use a [Progress Bar](/components/progress-bars/) to show remaining time to upload a file or files.
- In case of an error, provide clear visual clues (information about the problem that occurred and specific instructions as to how to fix it.


### Editorial

- Label: keep the label short and concise limiting it to a few words and a single line of text.
- Description: provide straightforward, jargon-free information about file format requirements and limitations to prevent errors.

### Accessibility

- The drop zone component builds on the native HTML `<input type="upload">` element. It includes a visual `<button>` and/or a drag-and-drop area that can receive keyboard focus.
- Make sure the user can interact with the file uploader and the drag-and-drop region. To give the input keyboard focus, use the `tab` key (or `shift` + `tab` when tabbing backwards)
To activate the input, use the `enter`/`return` or `space` keys.
- Provide clear and informative error messaging to allow user to understand what he needs to do to rectify the problem.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 04/14/2022 | 1.3.0 | Added new component. | L. Cook, E. Gunther, E. Nowak |
{{</ whats-changed-table >}}
