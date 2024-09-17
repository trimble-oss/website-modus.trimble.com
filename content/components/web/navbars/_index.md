---
title: "Navbars"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
images:
  - "/img/components/headers/navbar.png"
components: true
componentsWeb: true
BootstrapURL: "/docs/v2/components/navbars/"
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
  <button class="btn btn-lg btn-icon-only btn-text-dark p-2 mx-1" id="menuButton" data-modus-item="menu-btn" href="#overview" data-bs-toggle="#" type="button" aria-label="Toggle navigation">
    <svg class="" width="28" height="28" fill="currentColor">
      <use xlink:href="/modus-solid-icons.svg#menu" /></svg>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ms-2">
    <img src="/img/trimble-logo.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="/img/trimble-icon.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ms-auto">

<div class="search-container d-inline-block position-relative" role="search">
  <input class="form-control form-control-search position-absolute" aria-label="Search" id="searchExample" type="search"
    placeholder="Search..." autocomplete="off" title="" required>
  <label class="btn btn-lg btn-icon-only border-0 btn-search text-body position-absolute p-2 pt-2" for="searchExample">
    <svg width="28" height="28" fill="currentColor" style="margin-top:3px;">
          <use xlink:href="/modus-solid-icons.svg#search" /></svg>
  </label>
</div>
      <button type="button" class="btn btn-lg btn-icon-only btn-text-body text-body ms-2 p-2" data-bs-toggle="tooltip"
         data-bs-placement="bottom" title="Help">
        <svg class="" width="28" height="28" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#help" /></svg>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only btn-text-body text-body ms-2 p-2" data-bs-toggle="tooltip"
         data-bs-placement="bottom" title="Applications">
        <svg class="" width="28" height="28" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#apps" /></svg>
      </button>
    </div>
  </div>

  <div class="dropdown d-block d-md-none">
  <button type="button" data-bs-toggle="dropdown" aria-label="Expand Menu" class="btn btn-lg btn-icon-only btn-text-dark d-block d-sm-none p-2" aria-expanded="false">
    <svg width="32" height="32" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#more-vertical" /></svg>
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
  <button type="button" class="btn btn-lg btn-icon-only border-white ms-2 border-0 p-2"
         data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <svg class="" width="32" height="32" fill="currentColor">
          <use xlink:href="/modus-solid-icons.svg#person-account" /></svg>
  </button>
</nav>
<!-- prettier-ignore-end -->

<!-- enable tooltips everywhere -->
<script>
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
});
</script>
<style>
html[data-bs-theme="dark"] main .navbar-brand img {
  filter: brightness(0) invert(1);
}

html[data-bs-theme="dark"] main .navbar button i {
  filter: brightness(0) invert(1);
}
</style>

## Usage

#### Use when

- Designing hybrid and web applications.
- Positioning a primary navigation menu.
- Branding an application.
- Providing access to
  - An account profile, other applications, help content, notifications, and search.
  - Positioning a consistent component to connect various Trimble applications.

#### Don't use when

- Building native applications following platform specific user interface guidelines.
- Building desktop applications employing frameworks similar to Windows Ribbon.
- Building marketing websites.
- Building email templates.

{{< whats-changed-table >}}

| Date     | Version | Notes                                                                     | Contributors                                                                     |
| -------- | ------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 06/22/23 | 1.4.0   | Blue Navbar accessibility and general content requirements specification. | E. Gunther, S. Kaukonen, E. Nowak                                                |
| 05/26/21 | 1.1.0   | New pattern added.                                                        | S. Williams, C. Christison, E. Gunther, J. Dong, K. Tran, N. Cadsawan, S. Taylor |

{{</ whats-changed-table >}}
