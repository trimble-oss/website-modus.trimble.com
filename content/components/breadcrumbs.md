---
title: "Breadcrumbs"
layout: "single"
description: "The breadcrumb element is a secondary navigation pattern that shows hierarchy among content."
components: true
images:
  - "/img/components/headers/breadcrumbs.png"
bootstrapURL: "/components/breadcrumbs/"
reactBootstrapURL: "/components/breadcrumbs/"
---

## Overview

Breadcrumb is a one-line navigational element that supports wayfinding: it aids the users in finding their current location within the hierarchical structure of a website. Breadcrumb navigation is a good choice in terms of usability because it never causes problems in user testing and takes up very little space on the page.

## Usage

**Use when**

- You need to inform the user where they are in the hierarchy of the site.
- The user needs to navigate back to a higher level page.
- The application has a complex, multi-layer architecture that's more than 2 levels deep.

**Don't use when**

- Primary navigation is needed instead. Breadcrumbs are always treated as secondary and should never replace primary navigation.
- Employing a vertical model tree component.
- If a lower-level page is (or can be put) in more than one parent category.
- You want to show the user's history, path.
- Your product has a flat hierarchy that's only 1 or 2 levels deep.

## Specifications

- Breadcrumbs progress from the highest level to the lowest, one step at a time.
- Breadcrumb navigation starts with the homepage and ends with the current page.
- All links, **except the last one**, in a breadcrumb should be clickable.
- Breadcrumb trails are displayed horizontally before a page's main content, in the top half of the page, below the primary navigation menu if a horizontal menu layout is used.
- The commonly accepted and most recognizable symbol for separating hyperlinks in breadcrumb trails is the “greater than” symbol (>). Typically, the > sign is used to denote hierarchy, as in the format of Parent category > Child category.
- Nothing should go on the same line as the breadcrumb navigation.

### Default

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item"><a href="#">Subpage </a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
</div>

### Breadcrumbs with Icons

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><i class="modus-icons">dashboard</i><a href="#">Home</a></li>
        <li class="breadcrumb-item"><i class="material-icons">local_library</i><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page"><i class="modus-icons">clipboard</i>Data</li>
      </ol>
    </nav>
  </div>
</div>

### Accessible Option

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-underline mb-0">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-underline mb-0">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item"><a href="#">Subpage </a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
</div>

### Behaviors

- For implementations with large numbers of sub-directories, make use of ellipses and dropdowns as shown in the example below

<div class="guide-example-block d-inline-block">
  <div class="guide-sample" style="padding-bottom: 125px">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-underline mb-0">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item">
          <div class="dropdown">
            <button
              type="button"
              id="breadcrumbDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ...
            </button>
            <div
              class="dropdown-menu show"
              aria-labelledby="breadcrumbDropdown"
            >
              <a href="#" class="dropdown-item">Subpage</a>
              <a href="#" class="dropdown-item">Subpage</a>
              <a href="#" class="dropdown-item">Subpage</a>
            </div>
          </div>
        </li>
        <li class="breadcrumb-item"><a href="#">Subpage</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
</div>

### Editorial

- Editorial will be provided by the hierarchy in a location based breadcrumb.
- Editorial for path-based breadcrumbs are always dynamically generated by the steps taken in a workflow.

### Accessibility

- **The default breadcrumb navigation is not accessible.** Use the accessible option for compliance.
- Place breadcrumb navigation in a `nav` element. The `nav` element should also be marked with `aria-label="breadcrumbs"` to clearly describe the type of navigation.
- Breadcrumbs should remain in the same relative order and location on each page.
- The link text should be clear, reflect the breadcrumb location accurately, and easy to understand for all users.
- Make sure the tab order matches the hierarchy.
- Apply `aria-current="page"` to the last item of the set to indicate that it represents the current page.
- For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 04/08/2021 | 1.0.1 | More guidance added based on best practices. | J. Wittmeyer |
| 11/23/2020 | 1.0.0 | Accessible option added. | E. Bohn, L. Kause, N. Springer |
{{</ whats-changed-table >}}
