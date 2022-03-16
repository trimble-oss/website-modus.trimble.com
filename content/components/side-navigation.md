---
title: "Side Navigation"
layout: "single"
description: "Vertical, collapsible navigation on the left side of the application."
components: true
images:
  - "/img/headers/components/side-nav.png"
aliases:
  - "/side-navigation.html"
  - "/components/side-navigation/"
bootstrapURL: "/components/side-navigation/"
---

## Overview

The side navigation of an application provides context through accessible menu options and positions a consistent component to connect to various pages in the application.

The side navigation is a collapsible side content of the site’s pages. It is located alongside the page’s primary content. The component is designed to add side content to a fullscreen application. It is activated through the "hamburger" menu in the [Navbar](/components/navbar/).

There are other types of navigation that can be used along with the Side Nav: [Breadcrumbs](/components/breadcrumbs/), [Navbar](/components/navbar/), [Tabs](/components/tabs/), [Content Tree](/components/content-tree/)

## Usage

**Use when**

- You need to navigate between multiple, static pages within the application.

**Don't use when**

- Your application only has one page of content.
- You need to provide page-specific actions (such as Save, Edit, etc.). Use a Toolbar instead -- Coming soon!
- Navigational items need to be loaded.
- You need to show a content tree. Use a [Content Tree](/components/content-tree/) instead.
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

<video width=300 controls autoplay=false>
    <source src="/img/side-nav-overlay-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### Push Side Nav

- The expanded menu pushes the content of the page.

<video width=300 controls autoplay=false>
    <source src="/img/side-nav-push-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

## Specifications

### Placement

- The side navigation menu is the top most element.
- The footer displays under the side navigation menu.

### Shadows

- Use [Level 2 shadow](/foundations/shadows-and-depth/) on the right side of the side nav

### Icons

- Leading icons are required for all items in the side navigation.
- All menu items must have a unique icon. When the menu is collapsed, only icon and an optional chevron are visible. The user needs to be able to distinguish between each item by icon alone.

### Sizing

- Dynamic menu width depends on the longest menu item (padding to be retained).
- Max width of the menu is 256px.
- If the menu text is too long, truncate it and show full menu item name on hover.
- The side nav does not support allowing the user to resize its width.

### Colors

There are two color options available and either can be used with the white or blue [Topnav](/components/topnav/).

![White Navigation](/img/sidenav-states.png)

![Blue and White Navigation](/img/sidenav-states-2.png)

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>White Nav Colors</th>
      <th>Blue Nav Colors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Background</th>
      <td>White</td>
      <td>Blue Dark #0E416C</td>
    </tr>
    <tr>
      <th>Selected Item Background</th>
      <td>Trimble Blue #0063a3</td>
      <td>Blue Light #217cbb</td>
    </tr>
    <tr>
      <th>Text Link</th>
      <td>Trimble Gray #252a2e</td>
      <td>White</td>
    </tr>
    <tr>
      <th>Hover Link</th>
      <td>Gray 0 #e0e1e9</td>
      <td>Trimble Blue #0063a3</td>
    </tr>
    <tr>
      <th>Icon</th>
      <td>Trimble Gray #252a2e</td>
      <td>White</td>
    </tr>
    <tr>
      <th>Chevron</th>
      <td>Trimble Gray #252a2e</td>
      <td>White</td>
    </tr>
  </tbody>
</table>

### Padding and Spacing

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Class</th>
      <th>Property</th>
      <th>Size (px/rem)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Menu Item</td>
      <td>height</td>
      <td>48/3</td>
    </tr>
    <tr>
      <td>Menu Item</td>
      <td>padding-left</td>
      <td>20/1.25</td>
    </tr>
    <tr>
      <td>Menu Item Icon</td>
      <td>width, height</td>
      <td>24/1.5</td>
    </tr>
    <tr>
      <td>Collapsed Menu Item</td>
      <td>width</td>
      <td>64/4</td>
    </tr>
    <tr>
      <td>Collapsed Menu Item Chevron</td>
      <td>width, height</td>
      <td>16/1</td>
    </tr>
    <tr>
      <td>Extended Menu Item</td>
      <td>width</td>
      <td>256/16</td>
    </tr>
    <tr>
      <td>Extended Menu Item Icon</td>
      <td>padding-right</td>
      <td>16/1</td>
    </tr>
    <tr>
      <td>Extended Menu Item Chevron</td>
      <td>padding-right	</td>
      <td>4/0.25</td>
    </tr>
  </tbody>
</table>

![Spacing](/img/sidenav-spacing.png)

### Typography

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Class</th>
      <th>Type</th>
      <th>Size (px/rem)</th>
      <th>Font Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Menu Item </td>
      <td>Body 1</td>
      <td>14/0.875</td>
      <td>Regular/400</td>
    </tr>
    <tr>
      <td>Back Menu Item</td>
      <td>Body 2</td>
      <td>12/0.75 </td>
      <td>Regular/400</td>
    </tr>
    <tr>
      <td>Level Header</td>
      <td>Heading 4</td>
      <td>14/0.875</td>
      <td>Semi-bold/600</td>
    </tr>
  </tbody>
</table>

### Behaviors

- On load, show a collapsed menu (recommended).
- The side nav supports **up to 3 levels** of navigation.
- Clicking a menu item with sub items opens the side nav to its full width.
- Clicking the hamburger menu opens the side nav to its full width.
- When the user has clicked on a side nav link, the side nav collapses and the user is navigated to the specified content. If the user clicks outside of the side nav, the side nav collapses.
- Hovering over a menu item icon displays a tooltip with the menu item name. When the menu is collapsed, hovering over the icon displays a tooltip. In the expanded view, if the menu item's name is too long (truncated to fit the width of the side nav), display a tooltip with the menu item's full name. Follow the [Tooltip guidelines](/components/tooltips/) for further reference.
- If the user clicks on a folder, that level of navigation slides out and is replaced with the next level of navigation under that folder.
  - The folder's name appears on top of the side nav to let the user know his/ her location or level.
  - To return to the previous level, the user may use the back button on top of the side nav.

<video width=300 controls autoplay=false>
    <source src="/img/side-nav-levels-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

#### Animation

- Ease in: 250mm; Ease out: 200mm
- The side nav slides in from the left to the right, when the menu is expanded or opened.
- The side nav slides in from the left to the right, when the user navigates to the next menu level.
- The side nav slides in right to left, when the user clicks a back button.

#### Responsiveness

<table class="table table-bordered bg-white">
  <thead class="thead-light">
    <tr>
      <th>Breakpoint</th>
      <th>Value (px/rem)</th>
      <th>Expanded</th>
      <th>Collapsed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X-Small</td>
      <td>320/20</td>
      <td>Overlay</td>
      <td>Hide Menu</td>
    </tr>
    <tr>
      <td>Small</td>
      <td>576/36</td>
      <td>Overlay</td>
      <td>Hide Menu</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>768/48</td>
      <td>Overlay</td>
      <td>Hide Menu</td>
    </tr>
    <tr>
      <td>Large</td>
      <td>992/62</td>
      <td>Overlay or Push	</td>
      <td>Hide or Collapse</td>
    </tr>
    <tr>
      <td>X-Large</td>
      <td>1200/75</td>
      <td>Overlay or Push	</td>
      <td>Hide or Collapse</td>
    </tr>
    <tr>
      <td>XX-Large</td>
      <td>1600/100</td>
      <td>Overlay or Push	</td>
      <td>Hide or Collapse</td>
    </tr>
  </tbody>
</table>

### Accessibility

- Use unordered list `<ul>` groups for side navigation.
- Place side navigation (the list group) in a `nav` element. The `nav` element should also be marked with `aria-label="side navigation"` to clearly describe the type of navigation.
- Use the `aria-current="true"` attribute to indicate the item that is currently selected, or—in a navigational context—use `aria-current="page"` to indicate the page that is currently selected. The `aria-current` attribute should be updated when the user makes a selection.
- Make sure the tab order matches the hierarchy and that the user can navigate through all levels and items with a keyboard.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 03/14/2022 | 1.3.0 | New pattern added. | J. Wittmeyer, C. D. Savio Lazaro, S. Taylor, J. de Wit, E. Gunther, T. Manham, <br>N. Cadsawan, P. Karukkuvel, E. Deleon, A. Tucker, L. Meskanen-Kundu |
{{</ whats-changed-table >}}
