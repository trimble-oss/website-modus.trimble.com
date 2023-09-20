---
title: "Toolbar"
layout: "single"
description: "Toolbar consists of a series of icon buttons occupying minimum workspace."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toolbar.png"
tags: [styles]
---

## Specifications

- Using secondary icon-only buttons at 32x32 is recommended. See [Buttons](/components/web/buttons/).
- To provide a distinction of the floating toolbar and create the floating effect, a shadow (Level 3) is used. See [Shadows & Depth](/foundations/shadows-and-depth/).
- The icon buttons can be aligned as a row (horizontally) or as a column (vertically).
- Vertically aligned toolbars float on top of the content and are usually located on the left or right side of the screen; horizontally aligned toolbars float at the top or bottom of the application window.
- The spacing between separated buttons is 4px.
- Icon buttons which are combined together have only outer corners of the toolbar rounded.
- Toolbar consisting of combined icon buttons can group related controls separated by a divider.

### Behaviors

- All buttons within the toolbar should have the following states:

  - Default
  - Hover
  - Pressed
  - Disabled

- All icon buttons should display a [Tooltip](/components/web/tooltips/) on hover.
- Make sure the controls are placed and grouped in a logical order.

### Editorial

- See [Tooltips](/components/web/tooltips/styles/).
