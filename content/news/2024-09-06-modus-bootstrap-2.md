---
title: Modus Bootstrap 2
date: 2024-09-06
description: "Modus Bootstrap 2 is now available for download. This release includes a number of new features and improvements that make it easier than ever to build responsive websites."
image: "/img/blog/headers/2024-09-06-modus-bootstrap.webp"
images:
  - /img/blog/headers/2024-09-06-modus-bootstrap.jpg
headerBgColor: "#deb960"
tags: [""]
author: Christian Oliff
blog: true
layout: blog-post
---

<style>
@media (max-width: 868px) {
  header {
    background-position: bottom right !important;
    background-size: contain !important;
    aspect-ratio: unset !important;
  }
}
main ul li {
  margin-bottom: 0.5rem;
}
</style>

After a year of beta releases and testing, we are excited to announce the official release of Modus Bootstrap 2 which is based on Bootstrap v5. This release includes a number of new features and improvements that make it easier than ever to build responsive websites.

Here are some of the highlights:

- **Latest Modus Design System**: Modus Bootstrap 2 is based on the latest version of the Modus Design System, which includes improved form components
- **Improved theming with CSS custom properties**: Modus Bootstrap 2 uses CSS custom properties for light and dark mode and no longer requires separate CSS files for each theme. Modus Layout CSS is also bundled with modus-boostrap.css now too so just a single CSS file is needed.
- **New components and utilities**: Modus Bootstrap 2 includes a number of new components and utilities, including placeholders, a much improved accordion component and many helpful new utility classes.
- **jQuery no longer required**: Modus Bootstrap 2 is built on Bootstrap v5, which no longer requires jQuery. This means that you can build websites that are faster and more lightweight than ever before.
- **Improved accessibility**: We have made a number of improvements to the accessibility of Modus Bootstrap 2, including better keyboard navigation and screen reader support.
- **New modus-bootstrap-grid CSS**: We have added a new CSS file that includes just the grid system, which can be used to build custom layouts without the rest of the Modus Bootstrap CSS - a perfect partner for [Modus Web Components](https://modus-web-components.trimble.com/) to make your web apps responsive.

Modus Bootstrap 2 is available for download now. You can find more information and download links on the [Modus Bootstrap website](https://modus-bootstrap.trimble.com).

It's open-source and available at [GitHub](https://github.com/trimble-oss/modus-bootstrap)

## Upgrading

There is a helpful command-line tool to assist with upgrading from Modus Bootstrap v1 to Modus Bootstrap 2. It can all the changed replace class names within your folder of HTML pages/templates. You can find more information on how to use the tool at [github.com/coliff/bootstrap-5-migrate-tool#bootstrap-5-migrate-tooln](https://github.com/coliff/bootstrap-5-migrate-tool).

We'd recommend also reviewing the  [official Bootstrap v5 migration guide](https://getbootstrap.com/docs/5.3/migration/).

## Modus Boostrap v1

If you are still using Modus Bootstrap v1, don't worry! We will continue to support it for the foreseeable future. However, we recommend that you start migrating to Modus Bootstrap 2 as soon as possible to take advantage of the new features and improvements.

You can access the documentation for Modus Bootstrap v1 at [modus-bootstrap.trimble.com/docs/v1](https://modus-bootstrap.trimble.com/docs/v1).
