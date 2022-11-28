---
title: "File Upload Dropzone"
layout: "single"
description: "File upload dropzone allows users to upload single or multiple files to the application by dragging and dropping."
components: true
componentsWeb: true
images:
  - "/img/components/headers/file-upload-dropzone.png"
bootstrapURL: "/components/file-upload-dropzone/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-file-dropzone--default"
tags: [styles]
---

## Overview

File upload dropzone allows users to upload content from their computer or device into the application by dragging a file (or files) into a target zone.

{{< img src="/img/components/file-upload-dropzone.svg" dark="/img/components/file-upload-dropzone-dark.svg" class="w-100" alt="File Upload Dropzone" >}}

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
  - Text instructions (required): e.g. "Drag files here or browse to upload."
  - File picker (required): provide the user an option to open file browser (a link or a button). Make sure the drop zone is focusable and accessible with the keyboard.

### Behaviors

- When the user drags a file into the dropzone, provide a visual clue to show that the user has hit the target area and that the action is about to perform is valid. For example, when the user hovers over the zone while dragging a file, change the color of the box to blue (to indicate a valid action) or red (to indicate an invalid action).

{{< img src="/img/components/dropzone-states.svg" dark="/img/components/dropzone-states-dark.svg" class="w-100 bg-light" alt="Example of Error State" >}}

- To help the user with motor navigation of moving a file into a precise location, the file upload dropzone should be active outside of its borders. It increases the area of the dropzone and provides a feeling of magnetic attraction preventing errors and speeding up interaction with the component.

{{< img src="/img/components/dropzone-active-area.png" dark="/img/components/dropzone-active-area-dark.svg" class="w-100" alt="File Upload Dropzone Active Area" >}}

- Validate the file(s) to communicate to the user the effectiveness of his action.
- If the upload might take more than a few seconds, show progress of the upload. You may use a [Progress Bar](/components/web/progress-bars/) to show remaining time to upload a file or files.
- In case of an error, provide clear visual clues (information about the problem that occurred and specific instructions as to how to fix it.

### Editorial

- Label: keep the label short and concise limiting it to a few words and a single line of text.
- Description: provide straightforward, jargon-free information about file format requirements and limitations to prevent errors.

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                  |
| ---------- | ------- | -------------------- | ----------------------------- |
| 04/14/2022 | 1.3.0   | Added new component. | L. Cook, E. Gunther, E. Nowak |

{{</ whats-changed-table >}}
