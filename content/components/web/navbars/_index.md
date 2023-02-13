---
title: "Navbars"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
images:
  - "/img/components/headers/navbar.png"
components: true
componentsWeb: true
bootstrapURL: "/components/navbars/"
reactBootstrapURL: "/components/navbar/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-navbar--default
aliases:
  - "/components/navbar/"
  - "/components/web/navbar/"
tags: [usage]
---

## Overview

The navbar or the app header provides context through globally accessible menu options and positions a consistent component to connect various Trimble applications. It contains the main navigation for your application.

<!-- prettier-ignore-start -->
<nav class="navbar nav navbar-expand-sm modus-header border">
  <button class="btn btn-lg btn-icon-only btn-text-dark" id="menuButton" data-modus-item="menu-btn" href="#overview" data-toggle="#" type="button">
    <i class="modus-icons notranslate" aria-hidden="true">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button type="button" class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications" hidden>
        <i class="modus-icons notranslate" aria-hidden="true">notifications</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icons notranslate" aria-hidden="true">help</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only btn-text-dark ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icons notranslate" aria-hidden="true">apps</i>
      </button>
    </div>
  </div>

  <div class="dropdown d-block d-md-none">
  <button type="button" data-toggle="dropdown" aria-label="" class="btn btn-lg btn-icon-only btn-text-dark d-block d-sm-none" aria-expanded="false">
    <i class="modus-icons notranslate" aria-hidden="true">more_vertical</i>
  </button>
  <ul class="dropdown-menu">
    <li class="bg-tranparent">
      <a class="dropdown-item" href="#">
        <button type="button" class="btn bg-transparent pl-0 border-0">
          Notifications
        </button>
      </a>
    <li>
      <a class="dropdown-item" href="#">
        <button type="button" class="btn bg-transparent pl-0 border-0">
          Help
        </button>
      </a>
    <li>
      <a class="dropdown-item" href="#">
        <button type="button" class="btn bg-transparent pl-0 border-0">
          Applications
        </button>
        </a>
      </li>
    </ul>
  </div>
  <button type="button" class="btn btn-lg btn-icon-only btn-text-dark bg-transparent border-white ml-2 border-0"
         data-toggle="tooltip" data-placement="bottom" data-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icons notranslate rounded-circle" aria-hidden="true">account_circle</i>
  </button>
</nav>
<!-- prettier-ignore-end -->

<!-- enable tooltips everywhere -->
<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
</script>
<style>
html[data-theme="dark"] main .navbar-brand img {
  filter: brightness(0) invert(1);
}

html[data-theme="dark"] main .navbar button i {
  filter: brightness(0) invert(1);
}
</style>

## Usage

**Use when**

- Designing hybrid and web applications.
- Positioning a primary navigation menu.
- Branding an application.
- Providing access to
  - An account profile, other applications, help content, notifications, and search.
  - Positioning a consistent component to connect various Trimble applications.

**Don’t use when**

- Building native applications following platform specific user interface guidelines.
- Building desktop applications employing frameworks similar to Windows Ribbon.
- Building marketing websites.
- Building email templates.

{{< whats-changed-table >}}

| Date     | Version | Notes                                                | Contributors                                                                     |
| -------- | ------- | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| 05/26/21 | 1.1.0   | New pattern added.                                   | S. Williams, C. Christison, E. Gunther, J. Dong, K. Tran, N. Cadsawan, S. Taylor |
| 03/14/22 | 1.3.0   | Updated accessibility guidelines and example images. | S. Kaukonen, E. Nowak                                                            |

{{</ whats-changed-table >}}
