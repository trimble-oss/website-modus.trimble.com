---
draft: true
title: "XR | Extended Reality"
layout: "single"
description: ""
layout: single
component: Introduction
weight: 1
tags: [xr, hide-styles, hide-usage, hide-accessibility, hidden]
---

<style>
header .nav-item {
  display: none !important;
}
article .nav-tabs {
  display: none !important;
  opacity: 0;
}
</style>

{{< img src="/img/xr/xr_spectrum.png" dark="/img/xr/xr_spectrum.png" width="1080" height="160" class="w-100" loading="auto" >}}

## Overview

Modus XR provides designers and developers with a comprehensive set of basic components, empowering them to rapidly navigate this exciting new realm. By offering a shared vocabulary and adhering to industry guidelines, Modus XR facilitates the creation of branded user interfaces that are both visually appealing and highly functional. Additionally, Modus XR provides a suite of development resources to streamline the design process and ensure that projects are completed quickly and efficiently.

The XR library of Modus components is a set of building blocks to design and develop cohesive, and consistent multiple-reality (XR) applications and workflows. Most XR patterns in this library are restricted to experiences and guidelines for mixed and virtual reality applications, which utilize head-sets to perform tasks. Use these patterns and components if your use case improves users' productivity through the use of a mobile headset, be it mixed or virtual reality.

Any application implementing augmented reality workflows could benefit from some of the components and guidelines of Modus XR, but it will inevitably require using the [Mobile Components](/components/mobile/) as well. If your application is used in a combination with a mobile device in the field or in a cab of heavy machinery, use the [In-Field Components](/components/in-field/) instead.

## Guiding Principles

These components serve developers, designers and product owners as a reference for the creation and implementation of XR experiences.  This technology adds great value for Trimble's mission to connect the physical and digital worlds with unequivocal clarity, serving present challenges and setting foundation for future needs.

**Lower the bar to adoption**
- Implementation, adaptation and augmentation of software development kit elements
  - Apply Modus XR as a design system, to enable developers and designers a smooth and faster integration of their intentions and needs to create mixed reality applications.

**Optimize Development Effort**
- Work with building blocks and packages.
  - Move towards modularity and flexible components, which can be re-combined to generate new elements.
- Streamline dev/ux interaction
  - Optimize UI elements, to avoid engaging in larger development cycles.
  - Rapid prototyping

**Spatial Experiences**
- Sensible use of space
 - Make use of environment and surroundings, by leveraging experience from the real world and augmenting reality through smart user centric UI-behavior.
- 3D-Interfaces
  - Components and elements abstracted from real-world objects, fit with physics, so they react to natural inputs.

## Modus XR UI Kits

Based on the observable conclusions from [Microsoft’s MRTK guidelines](https://learn.microsoft.com/en-gb/windows/mixed-reality/mrtk-unity/mrtk2/?view=mrtkunity-2022-05#ux-building-blocks),[Google’s dmms units](https://www.ryanhinojosa.com/2018/01/08/device-independent/), as well as [Meta's Oculus guidelines](https://developer.oculus.com/resources/bp-vision/), but also considering the ergonomic factors to comfortably interact with spatial, touch UIs at a distance between 40-60cm off the point of interest, the following ratio is the foundation when creating and visualizing experiences from figma for further implementation in game engines:

**1 pixel = 1mm**

Additionally an 8px or millimeter (mm) grid system rules over the positioning and layouting of all elements within a component and is the base to layout UIs.

Modus XR UI Kits is available in [Figma for designers](/designers/).

These guidelines will include in future releases components and patterns covering far interaction experiences.

## Supported Frameworks

XR patterns and components are currently available using [MRTK 2.8.3](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk2/?view=mrtkunity-2022-05) as a base and can be deployed and implemented using [Unity v. 2020.3 or 2021.3](https://unity.com/download).  Please refer to [MRTK's github page](https://github.com/Microsoft/MixedRealityToolkit-Unity/releases) to download the required Unity packages to deploy Modus XR.

## About UX/UI Design for Extended Reality @ Trimble

These guidelines and components are heavily influenced by the experiences created for [Trimble Connect MR](https://fieldtech.trimble.com/en/product/trimble-connect-mr), [Trimble FieldLink MR](https://fieldtech.trimble.com/product/trimble-fieldlink-mr) or [SketchUp Viewer](https://help.sketchup.com/en/sketchup-viewer/sketchup-viewer-hololens), apps whose foundation rests on Microsoft’s Mixed Reality Toolkit (MRTK). That means, we recommend experiencing example applications and scenes delivered through Microsoft’s app store.  These studies will help understand how interactive elements have been created and what principles and technical solutions they are founded on.  This understanding will also prove superbly useful to come up with new custom elements, interactions and experiences.

We continue to implement and create on top of the expertise that diverse hardware producers deliver, and although Modus XR is built it as an extension of Microsoft’s guidelines, we are expanding them to cater to other XR experiences and devices.

Our focus remains on user centered patterns, as well as easy of use and adaption.  Modus XR will continue receiving progressive improvements around our users’ workflows and industry devices.
