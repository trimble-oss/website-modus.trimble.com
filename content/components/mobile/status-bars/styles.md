---
sitemap_exclude: true
title: "status-bars"
layout: "single"
description: "The status bar is the operating system tray that goes across the top of the device screen."
components: true
component: status-bars
images:
  - "/img/mobile/headers/status-bars.png"
tags: [mobile, styles]
---

### Specifications

### Anatomy

Android
{{< img src="/img/mobile/statusbar-android.svg" dark="/img/mobile/statusbar-android-dark.svg" width="960" height="144" alt="Status Bar Anatomy Android" loading="auto" >}}

iOS
{{< img src="/img/mobile/statusbar-ios.svg" dark="/img/mobile/statusbar-ios-dark.svg" width="960" height="165" alt="Status Bar Anatomy iOS" loading="auto" >}}

## Minimal

A list should always stack vertically and have a container set to a fixed width.  This allows the atom.list-item elements to scale appropriately when set to “fill container” as their width.

## Overlay

## Light

When a list is not scrollable, there is no scrollbar present or taking up space.

{{< img src="/img/mobile/status-bar-light.svg" dark="/img/mobile/status-bar-light-dark.svg" width="447" height="163" alt="Status Bar Light" loading="auto" >}}

## Dark

List remains the same width
Scrollbar track is also list background color / divider color
List items shrink in width to fill space

{{< img src="/img/mobile/status-bar-dark.svg" dark="/img/mobile/status-bar-dark-dark.svg" width="447" height="163" alt="Status Bar Dark" loading="auto" >}}

## Blue

When a list is not scrollable, there is no scrollbar present or taking up space.

{{< img src="/img/mobile/status-bar-blue.svg" dark="/img/mobile/status-bar-blue-dark.svg" width="447" height="163" alt="Status Bar Blue" loading="auto" >}}

## White

List remains the same width
Scrollbar track is also list background color / divider color
List items shrink in width to fill space

{{< img src="/img/mobile/status-bar-white.svg" dark="/img/mobile/status-bar-white-dark.svg" width="447" height="163" alt="Status Bar White" loading="auto" >}}
