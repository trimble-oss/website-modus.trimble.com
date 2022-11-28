---
title: "File Upload Dropzone"
layout: "single"
description: "File upload dropzone allows users to upload single or multiple files to the application by dragging and dropping."
components: true
componentsWeb: true
component: file-upload-dropzone
images:
  - "/img/components/headers/file-upload-dropzone.png"
tags: [accessibility]
---

## Accessibility

- The drop zone component builds on the native HTML `<input type="upload">` element. It includes a visual `<button>` and/or a drag-and-drop area that can receive keyboard focus.
- Make sure the user can interact with the file uploader and the drag-and-drop region. To give the input keyboard focus, use the `tab` key (or `shift` + `tab` when tabbing backwards)
To activate the input, use the `enter`/`return` or `space` keys.
- Provide clear and informative error messaging to allow user to understand what he needs to do to rectify the problem.
