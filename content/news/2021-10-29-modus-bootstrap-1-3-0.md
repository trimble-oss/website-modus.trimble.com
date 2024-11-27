---
title: Modus Bootstrap v1.3.0
date: 2021-10-29
description: "Latest release brings improvements and fixes"
image: "/img/blog/headers/2021-10-29-bootstrap-update.png"
images:
  - /img/blog/headers/2021-10-29-bootstrap-update.png
headerBgColor: "#ECD8EB"
author: Christian Oliff
blog: true
layout: blog-post
# draft: true
---

We're pleased to announce an update to Modus Bootstrap is now available which brings with it a range of improvements and fixes.

### Built on Bootstrap 4.6.1

Modus Bootstrap is now based on the latest Bootstrap v4 update which includes a number of small improvements - check the [Bootstrap release notes](https://github.com/twbs/bootstrap/releases/tag/v4.6.1) for full details.

### Easier customization of loading Open Sans Google Font

If you're compiling the Modus Bootstrap CSS at build time then it's now easier to comment out/remove the Open Sans Google Font `@import` from `modus.scss`. You should then add this to the `<head>` of your page:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=fallback">
```

This will result in the 'Open Sans' font loading and displaying faster.

### Blue Navbar

A new blue navbar variant is now available.

<nav class="navbar navbar-blue nav navbar-expand-sm modus-header py-1 mb-3">
  <button class="btn btn-lg btn-icon-only btn-text-dark" id="menuButton" data-modus-item="menu-btn" href="#overview" data-bs-toggle="#">
    <i class="modus-icons notranslate text-white" aria-hidden="true">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand me-auto">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon-rev.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ms-auto">
      <button type="button" class="btn btn-lg btn-icon-only btn-text-dark me-2" data-bs-toggle="tooltip"
         data-bs-placement="bottom" title="Notifications">
        <i class="modus-icons notranslate text-white" aria-hidden="true">notifications</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only btn-text-dark me-2" data-bs-toggle="tooltip"
         data-bs-placement="bottom" title="Help">
        <i class="modus-icons notranslate text-white" aria-hidden="true">help</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only btn-text-dark me-2" data-bs-toggle="tooltip"
         data-bs-placement="bottom" title="Applications">
        <i class="modus-icons notranslate text-white" aria-hidden="true">apps</i>
      </button>
    </div>
  </div>
  <button type="button" class="btn btn-lg btn-icon-only btn-text-dark d-block d-sm-none">
    <i class="modus-icons notranslate text-white" aria-hidden="true">more_vertical</i>
  </button>
  <button type="button" class="btn btn-lg btn-icon-only btn-text-dark bg-transparent me-2"
         data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icons notranslate rounded-circle text-white">person_account</i>
  </button>
</nav>

View the [implementation details](https://modus-bootstrap.trimble.com/components/navbar/#blue-variant) on the Modus Bootstrap site.

The vertical padding of the navbar has been slightly tweaked so it displays at 56px height.

### Removed deprecated colors

Many undocumented and unneeded color classes and variables were removed to make the compiled CSS lighter.

### Color Updates

Continuing the work done in updating the brand colors in the previous Modus Bootstrap release - the colors of switches, checkboxes and radio buttons have been updated for a more consistent look.

### Fix for Checkbox mis-aligned inputs

We fixed a bug where the checkboxes inputs were slightly vertically mis-aligned causing clicks just above to register.

### Wrap-up

Whether you're loading Modus Bootstrap from the CDN or importing from npm, we recommend you to update. Check the [Getting Started](https://modus-bootstrap.trimble.com/getting-started/) guide for details.
