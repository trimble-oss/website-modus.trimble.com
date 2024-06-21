---
title: "Side Navigation"
layout: "single"
description: "Vertical, collapsible navigation on the left side of the application."
components: true
componentsWeb: true
keywords: panel
images:
  - "/img/components/headers/side-navigation.png"
aliases:
  - "/components/side-navigation/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-side-navigation--default
tags: [usage]
---

## Overview

The side navigation of an application provides context through accessible menu options and positions a consistent component to connect to various pages in the application.

The side navigation is a collapsible side content of the site’s pages. It is located alongside the page’s primary content. The component is designed to add side content to a fullscreen application. It is activated through the "hamburger" menu in the [Navbar](/components/web/navbar/).

There are other types of navigation that can be used along with the Side Nav: [Breadcrumbs](/components/web/breadcrumbs/), [Navbar](/components/web/navbar/), [Tabs](/components/web/tabs/), [Content Tree](/components/web/content-tree/)

## Usage

#### Use when

- You need to navigate between multiple, static pages within the application.

#### Don't use when

- Your application only has one page of content.
- You need to provide page-specific actions (such as Save, Edit, etc.). Use a [Toolbar](/components/web/toolbar/) instead.
- Navigational items need to be loaded.
- You need to show a content tree. Use a [Content Tree](/components/web/content-tree/) instead.
- Items in the side nav need to open dialogs.
- You’re designing for a mobile application - use the mobile specific side navigation -- Coming soon!

## Types

When the side nav is actively being used by the user, it expands to full width
This expanding functionality either a.) overlays the page’s content or b.) pushes the page’s content.

- Do not use both types in one application. If a user navigates from one application to another, use the same side nav type across both products.

- When the side nav is not active, it is either collapsed or hidden.

### Overlay Side Nav (recommended)

- The expanded menu overlaps the content of the page.

- Use this type of side nav, when the content on the page is difficult to resize.

<video width="300" controls autoplay="false" disablepictureinpicture disableremoteplayback muted="true">
    <source src="/img/components/side-nav-overlay-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Push Side Nav

- The expanded menu pushes the content of the page.

<video width="300" controls autoplay="false" disablepictureinpicture disableremoteplayback muted="true">
    <source src="/img/components/side-nav-push-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 03/14/2022 | 1.3.0 | New pattern added. | J. Wittmeyer, C. D. Savio Lazaro, S. Taylor, J. de Wit, E. Gunther, T. Manham, <br>N. Cadsawan, P. Karukkuvel, E. Deleon, A. Tucker, L. Meskanen-Kundu |
{{</ whats-changed-table >}}
