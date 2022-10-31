---
title: "Navbar"
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
---

## Overview

The navbar or the app header provides context through globally accessible menu options and positions a consistent component to connect various Trimble applications. It contains the main navigation for your application.

<!-- prettier-ignore-start -->
<nav class="navbar nav navbar-expand-sm modus-header border">
  <button class="btn btn-lg btn-icon-only" id="menuButton" data-modus-item="menu-btn" href="#overview" data-toggle="#" type="button">
    <i class="modus-icons notranslate">menu</i>
  </button>
  <a href="#navbar-example" class="navbar-brand mr-auto ml-2">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-logo.svg" width="107" height="25" class="img-fluid d-none d-sm-block" alt="home">
    <img src="https://modus-bootstrap.trimble.com/img/trimble-icon.svg" class="d-block d-sm-none" height="25" width="25" alt="home">
  </a>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav ml-auto">
      <button type="button" class="btn btn-lg btn-icon-only ml-2 text-gray-6 d-none" data-toggle="tooltip"
         data-placement="bottom" title="Search">
        <i class="modus-icon notranslate material-icons text-gray-6">search</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Notifications">
        <i class="modus-icon notranslate material-icons text-gray-6">notifications</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Help">
        <i class="modus-icons notranslate text-gray-6">help</i>
      </button>
      <button type="button" class="btn btn-lg btn-icon-only ml-2" data-toggle="tooltip"
         data-placement="bottom" title="Applications">
        <i class="modus-icons notranslate text-gray-6">apps</i>
      </button>
    </div>
  </div>

  <div class="dropdown d-block d-md-none">
  <button type="button" data-toggle="dropdown" aria-label="" class="btn btn-lg btn-icon-only text-gray-6 d-block d-sm-none" aria-expanded="false">
    <i class="modus-icons notranslate text-gray-6">more_vertical</i>
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
  <button type="button" class="btn btn-lg btn-icon-only bg-transparent border-white ml-2 border-0"
         data-toggle="tooltip" data-placement="bottom" data-html="true"
         title="<div class=text-left>MyTrimble<br>Stephanie Carter<br>stephanie_carter@example.com</div>">
         <i class="modus-icon notranslate material-icons rounded-circle text-gray-6">account_circle</i>
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

## Specifications

- **Navbar background color should be white or Trimble Dark Blue.**
- **Divider line:** use a 1px bottom border when there is a sub-header or side panel or when page background is white (rather than the standard Trimble Gray Light).
- **Shadow:** use [Level 2 shadow](/foundations/shadows-and-depth/) in the event page content scrolls behind and underneath the header. [Level 3](/foundations/shadows-and-depth/) shadow should be used for menu overlays.
- Product logo and Profile avatar are the only required elements. Other elements are optional and contextual.
- Product name should be used in the header communicated via an approved logo. The product logo is relevant to the company brand providing the service (e.g., Trimble, Tekla, SketchUp, Viewpoint) and follows Trimble product logo guidelines.
  - Don’t use the Trimble corporate logo.
  - Don’t combine the Trimble corporate logo and name of the application.
  - Don’t use the Trimble corporate logo and a customer logo side-by-side.
- **Customer logos:** some existing applications allow for a customer logo replacement.
- Only a single product logo should display in the header.
- Solid icon style should be used in the header (for consistency across apps).
- Display order of app header elements:

**For left-to-right languages:**

1. Main menu: contains primary navigation for the current application.
2. Product logo _(required)_
3. Dropdown: used for global content only (e.g. selecting a project)
4. Search: global search for the app (not section or feature specific); any additional buttons should be placed in-between Search and Notifications
5. Notifications
6. Help
7. Apps
8. Profile _(required)_

**For right-to-left languages display order should be reversed.**

- Disallowed Content: information that should not appear within the app header bar.
  - Page titles
  - Navigation elements such as breadcrumbs, tabs, horizontal menu items, etc.

### Color Options

Navbar background color can be white or Trimble Dark Blue.

{{< img src="/img/components/navbar-color-examples.svg" dark="/img/components/navbar-color-examples-dark.svg" class="w-100" alt="Color Options" >}}

### Key Measurements

{{< img src="/img/components/navbar-framework.svg" dark="/img/components/navbar-framework-dark.svg" class="w-100" alt="Key Measurements" >}}

<!-- prettier-ignore-start -->
| Element                                     | Width  | Height                 |
| ------------------------------------------- | ------ | ---------------------- |
| Header block                                | Varies | 56px                   |
| Product logo                                | Varies | 24px (max-height 32px) |
| Navbar button target area                   | 48px   | 48px                   |
| Icon button fill effect (border-radius 2px) | 48px   | 48px                   |
| Profile avatar                              | 32px   | 32px                   |
| Icon canvas size                            | 24px   | 24px                   |
{.table .table-bordered}
<!-- prettier-ignore-end -->

### Spacing

- Elements should be vertically-centered within the header.
- Icon areas starting from the Profile avatar are flush against each other.

<table class="table table-bordered" style="width: max-content">
  <tbody>
    <tr>
          <td>X-Small (320px) breakpoint</td>
          <td>Artboard follows 16px margins and gutters</td>
        </tr>
        <tr>
          <td>All other breakpoints</td>
          <td>Artboard follows 24px margins and gutters</td>
        </tr>
        <tr>
          <td>Menu icon area</td>
          <td>8px from left; X-Small breakpoint only: 4px from left</td>
        </tr>
        <tr>
          <td>Product logo/ name</td>
          <td>64px from left; X-Small breakpoint only: 60px from left</td>
        </tr>
        <tr>
          <td>Profile avatar icon area</td>
          <td>16px from right; X-Small breakpoint only: 8px from right</td>
    </tr>
  </tbody>
</table>

For additional reference, follow [Grid & Spacing](/foundations/grid-and-spacing/) guidelines.

### Behaviors

- The navbar is a fixed element. Fixed or "sticky" content fixes itself to the browser viewport as content is scrolled.
- Responsive design: navbar follows the Modus breakpoint guidelines in [Grid & Spacing](/foundations/grid-and-spacing/).

#### Navbar Button examples

- Three color options are available; Trimble Gray, Gray (Gray 6), and reversed (to be used with Trimble Dark Blue Navbars).
- Common Navbar button options include but are not limited to:
  - Menu button
  - Search
  - Notification
  - Help
  - App Switcher
  - Profile

{{< img src="/img/components/navbar-btn-examples.svg" dark="/img/components/navbar-btn-examples-dark.svg" alt="Navbar Button Examples" >}}

#### Navbar Button State Examples

{{< img src="/img/components/navbar-btn-states.svg" dark="/img/components/navbar-btn-states-dark.svg" class="w-100" alt="Navbar Button State Examples" >}}

#### Element Consolidation

At smaller viewpoints, some header elements consolidate into the overflow menu.

{{< img src="/img/components/navbar-responsive.svg" dark="/img/components/navbar-responsive-dark.svg" class="w-100" alt="Navbar Responsive Design" >}}

**Consolidate**

- Applications
- Help
- Notifications

**Don't consolidate**

- Profile avatar
- Search
- Main menu

#### Logo Adaptations

At smaller viewpoints, the product logo may

- Reduce down to only the logomark;
- For smallest width header, omit the logo entirely (when the header dropdown exists).

#### Tooltips

Tooltips display on hover. Follow the [Tooltip guidelines](/components/web/tooltips/) for further reference.

{{< img src="/img/components/navbar-tooltips.svg" dark="/img/components/navbar-tooltips-dark.svg" class="w-100" alt="Navbar tooltips" >}}

#### Main Menu

- On hover, display a tooltip reading "Main menu."
- Expand/ collapse the Primary Navigation Sidebar when clicked or tapped.

#### Product Logo

- Display the application's homepage when clicked or tapped.

#### Search

![Navbar Search](/img/components/navbar-search.svg)

- On hover, display a tooltip reading "Search."
- Expose the search overlay.
- Search overlay:
  - Follow the [Inputs](/components/web/inputs/) guidelines.
  - Clicking or tapping input field "x" icon removes user-entered text.
  - Clicking or tapping search tray "x" icon hides the search tray.
- Search
  - Suggestions display as a person types.
  - Pressing the Enter key displays the search results page.

#### Notifications

Specific to each product's implementation

- On hover, display a tooltip reading "Notifications."
- Display the Notification menu when clicked or tapped.
- Clicking or tapping outside of this menu will close the menu.

#### Help

Specific to each product's implementation

- On hover, display a tooltip reading "Help."
- Display the Help menu when clicked or tapped.
- Clicking or tapping outside of this menu will close the menu.

#### Applications

- On hover, display a tooltip reading "Applications."
- Display the App Switcher menu when clicked or tapped.
- Clicking or tapping an app row will open that application in a new browser tab.
- Within a browser tab, if the current open application is the same as the one chosen from the app switcher, remain in the browser tab.
- Contents:
  - App row(s) with app tile graphic and text label;
  - Optional description text (if used, all rows would have a tagline)
- Clicking or tapping outside of this menu will close the menu
- Menu overlay specs:
  - 24px padding (all sides)
  - 16px padding (all sides At X-Small, 320px breakpoint)
  - 8px between app row items
  - 384px max-width
- App row specs:
  - 4px padding (all sides)
  - 2px border radius:
  - Use a 48x48px app tile
  - Text label specs:
    - 12px left of app tile (8px right margin)
    - Primary label:, Body’ semibold
    - Optional description, ‘Small body’ regular

#### App Tile Guidelines

- App tiles may belong to a software suite family (e.g., Connect Suite or Tekla Suite).
- Use the relevant app tile or modified app tile for the suite.
- Position branded family app tiles next to each other in the app switcher list.
- Reference the latest [Buildings App Icon Standards](https://drive.google.com/file/d/1GVZedDrxKA9hGiiAgmTl4PPQ-uiINmlh/view?usp=sharing) document for more detail.

#### Profile

Used only for "global" MyTrimble account items. Appears consistently everywhere for anyone with a Trimble ID (should not be product specific).

- Individual product navigation and preferences/settings will need to live in a "local" component/environment

- On hover, display a tooltip reading:
  - MyTrimble:<br>
    First-name Last-name<br>
    email&#64;address.com
- Display the Profile Menu when clicked or tapped
- Profile Menu:
  - Contents:
    - Profile symbol (Initials or avatar)
    - First and Last name
    - Email address
    - Navigation to ‘Access to MyTrimble’ (opens new browser tab)
    - Navigation to ’Sign out’
  - Clicking or tapping outside of this menu will close the menu
  - Specs:
    - 24px top and bottom padding
    - 48px left and right padding
    - 384px max-width
    - Inspect design file more detail

### Editorial

- Header bar uses icons to visually communicate meaning. See [Tooltips](/components/web/tooltips/) guidelines.
- Capitalize proper nouns.
- Use title case for menu titles (e.g. Notifications).
- Use sentence case for app descriptions and buttons (while preserving proper nouns).

### Accessibility

- Use unordered list `<ul>` groups for navbar items.
- Place navbar (the list group) in a `nav` element. The `nav` element should also be marked with `aria-label="main navigation"` to clearly describe the type of navigation.
- Place the `nav` element within the `<header>` region.
- Use the `aria-current="true"` attribute to indicate the item that is currently selected, or—in a navigational context—use `aria-current="page"` to indicate the page that is currently selected. The `aria-current` attribute should be updated when the user makes a selection.
- Provide alt text for product logo.
- Provide tooltips for icons.

#### "Skip to Main Content" Link

- This link bypasses header links and ‘skips’ to the screen’s main content.
- Provides increased usability for people using screen readers or keyboard navigation.
- This link is invisible until it receives keyboard focus via the Tab key.
- “Skip to main content” wording explains best where people are navigating to.
  Example: `<div id="skiptocontent"><a href="#maincontent">Skip to main content</a></div>`

{{< img src="/img/components/navbar-skip-content.svg" dark="/img/components/navbar-skip-content-dark.svg" alt="Skip to main content examples" >}}

Reference for more detail: [https://webaim.org/techniques/skipnav/](https://webaim.org/techniques/skipnav/)

{{< whats-changed-table >}}

| Date     | Version | Notes                                                | Contributors                                                                     |
| -------- | ------- | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| 05/26/21 | 1.1.0   | New pattern added.                                   | S. Williams, C. Christison, E. Gunther, J. Dong, K. Tran, N. Cadsawan, S. Taylor |
| 03/14/22 | 1.3.0   | Updated accessibility guidelines and example images. | S. Kaukonen, E. Nowak                                                            |

{{</ whats-changed-table >}}
