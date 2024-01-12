---
title: New Modus Site Design
date: 2023-11-20
description: "A new look to the Modus Design System site with improved navigation and layout along with many more fixes and improvements."
image: "/img/blog/headers/2023-11-21-new-modus-site-design.jpg"
images:
  - /img/blog/headers/2023-11-21-new-modus-site-design.jpg
headerBgColor: "#40769a"
tags: ["website"]
author: Christian Oliff
blog: true
layout: blog-post
---

The Modus website first launched several years ago and we've since added a lot of great content - with new sections for XR, Mobile and In-field components joining our web components. The design and navigation of the site has largely remained unchanged though, and we were beginning to grow too big for it so we set out to redesign the way the site worked with a few key goals in mind: to improve consistency with the site design itself and the Design system guidelines, to make navigating faster and easier and to further improve accessibility throughout.

### Faster navigation

With our new left-side navigation panel with accordions you can now get to almost any page on the site from any other page which is a big improvement from before. The new side panel is fully responsive and is expanded (visible) by default on larger screens and can be toggled on and off.

Our improved navbar includes a new 'Apps' button on the top-right of the navbar gives quick access to our other Modus project sites along with a wider search input on the navbar has more room to show results on larger screens.

<table class="border-0 w-100">
<tr>
<td class="w-50"><img src="/img/blog/site-light-mode.jpg" class="img-fluid m-1 shadow border" width="476"></td>
<td class="w-50"><img src="/img/blog/site-dark-mode.jpg" class="img-fluid m-1 shadow border" width="470"></td>
</table>

### Improved accessibility

The improved accordion component used on the side panel now has full keyboard support, the navigation tabs now use `aria-current="page"` as appropriate and the site has been tested and improved for use with a screen reader.

### A new CSS Properties Popover component

We made use of a new [CSS Properties Popover JavaScript library](https://github.com/coliff/popover-css-inspector) which automatically displays the relevant CSS properties of a component alongside it. Toggling the site between light and dark mode will auto-update the color values displayed too.

![Popover CSS Inspector Example image](/img/blog/popover.png)

And because the values are displayed automatically they are now always correct and means we don't need to manually manage them - saving us maintenance time and reducing the chance of errors creeping onto the site!

### More to come

We're not finished yet and have more improvements in the pipeline, but for now we hope you enjoy the new navigation and design.

---

Found a bug or have any suggestions about the site? [Share your thoughts in the Modus Chatroom](https://chat.google.com/room/AAAAexugR1k) or [open an issue on GitHub](https://github.com/trimble-oss/website-modus.trimble.com/issues)!

<style>
main img[src*="popover.png"].img-fluid {
  text-align: center;
  background: #fff;
  height: 212px;
  width: 331px;
}
</style>
