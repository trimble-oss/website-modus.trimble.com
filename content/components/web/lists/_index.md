---
title: "Lists"
layout: "single"
description: "A list can be used to display content related to a single subject."
components: true
componentsWeb: true
images:
  - "/img/components/headers/lists.png"
bootstrapURL: "/components/lists/"
reactBootstrapURL: "/components/lists/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-list--default"
aliases:
  - "/components/lists/"
tags: [usage]
---

<style>
.list-group .list-group-item {
  height: 40px;
  min-height: 40px;
}
.list-group-lg .list-group-item {
  height: 48px;
  min-height: 48px;
}
</style>

## Overview

Lists are used to present information in well-formed and organized way. The user can view or take action on list line items. A list displays related content in a vertical format. A list is typically the focus of the screen and composes the main body of the screen layout. Lists are composed of list items. List items should be of a similar and obvious category of information (i.e., a list of design files, or a list of point locations). A list item contains at least a label in a consistent format that helps the user to scan and read the content efficiently.

<div class="h6" id="list-items">List Items</div>
<ul class="list-group">
  <li class="list-group-item active">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

## Usage

**Use when**

- Creating vertical navigation.
- Displaying options within a menu.

**Don't use when**

- Displaying tabular data. Instead, use a [Table](/components/web/tables/).
- Making lists of uncategorized information. Use groups of list items to organize similar content.

