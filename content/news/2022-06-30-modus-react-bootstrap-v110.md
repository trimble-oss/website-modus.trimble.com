---
title: Modus React Bootstrap v1.1.0
date: 2022-04-13
description: "More components and features."
image: "/img/blog/headers/2022-06-30-modus-react-bootstrap-v110.jpg"
images:
  - /img/blog/headers/2022-06-30-modus-react-bootstrap-v110.jpg
headerBgColor: "#000"
tags: ["modus", "react", "bootstrap"]
author: Mahalakshmi Sankaran
blog: true
layout: blog-post
---

We're pleased to announce an update to [Modus React Bootstrap](https://www.npmjs.com/package/@trimbleinc/modus-react-bootstrap) which is now available with more [components](https://modus-react-bootstrap.trimble.com/components/).

## New Features

### Content Tree

A Content tree provides users with a way to navigate nested hierarchical information using a parent-child relationship model. Content tree can be created using the tags `TreeView` in the root and `TreeViewItem` for nodes. `TreeView` supports multi-selection, customization of icons, and the node label, and much more using its API.
Tree view is also accessible by the keyboard navigation.

For more details and demos, please refer to the [documentation](https://modus-react-bootstrap.trimble.com/components/content-tree/) on Content Tree.

### File upload Dropzone

A file upload drop zone component that allows users to upload content from their computer or device into the application by dragging a file (or files) into a target zone.
`FileUploadDropZone` is the tag needed for creating a drop zone. It supports multiple files upload and it can perform basic validation against the files being uploaded using the API inputs. Custom validation is supported too.

For more details and demos, please refer to the [documentation](https://modus-react-bootstrap.trimble.com/components/file-upload-dropzone/) on File Upload Dropzone.

### DataTable

In addition to the existing `Table` component we now have a `DataTable` component.
`DataTable` is a wrapper over the existing `Table` with advanced features. And it works with a wrapper component called `TablePagination` which basically uses `Pagination`. `DataTable` supports sorting, client-side pagination, column resize and reorder, row selection, cell editing, hiding and filtering columns.
More features coming soon.

For more details and demos, please refer to the [documentation](https://modus-react-bootstrap.trimble.com/components/tables/#datatable/) on DataTable.

### Upgraded to Modus Bootstrap v1.5.0

Modus React Bootstrap uses [Modus Bootstrap v1.5.0](https://www.npmjs.com/package/@trimbleinc/modus-bootstrap) for styles - check the [Modus Bootstrap release notes](https://modus-bootstrap.trimble.com/changelog/) for full details.

## Contributions

We are happy to accept contributions from the community to improve this [project](https://github.com/trimble-oss/modus-react-bootstrap). See the [contributing guidelines](https://github.com/trimble-oss/modus-react-bootstrap/blob/main/CONTRIBUTING.md) for how to propose bug fixes and improvements.
