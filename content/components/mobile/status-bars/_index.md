---
sitemap_exclude: true
title: "Status Bars"
layout: "single"
description: "The status bar is the operating system tray that goes across the top of the device screen."
components: true
component: status-bars
images:
  - "/img/mobile/headers/status-bars.png"
tags: [mobile, usage]
---

## Overview

The status bar is the operating system tray that goes across the top of the device screen. This usually contains default system icons and components not customized.

## Anatomy of a Status Bar

Android
{{< img src="/img/mobile/statusbar-android.svg" dark="/img/mobile/statusbar-android-dark.svg" width="960" height="144" alt="Status Bar Anatomy Android" loading="auto" >}}

iOS
{{< img src="/img/mobile/statusbar-ios.svg" dark="/img/mobile/statusbar-ios-dark.svg" width="960" height="165" alt="Status Bar Anatomy iOS" loading="auto" >}}

## Minimal

A list should always stack vertically and have a container set to a fixed width.  This allows the atom.list-item elements to scale appropriately when set to “fill container” as their width.

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
