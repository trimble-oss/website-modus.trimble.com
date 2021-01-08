---
title: Start
layout: single
description: "New to Modus? Get started with this introduction to our guidelines, components, and key concepts."
url: /start/
start: true
---

## Introduction

The Modus design system is part of the evolving Trimble Operating System. To create an environment in which we can improve our customer’s work and productivity through innovative and connected products and services, the Trimble OS offers a number of initiatives that help scale and standardize our offerings. Our customers’ needs are at the center of this, as it aims at making interacting with our company and products easy and effective. Modus aims at creating standardized user interface components that enable product development to innovate and connect new services more seamlessly and faster.

Modus is a shared source of truth--a place to reference official Trimble patterns and styles. It includes components and guidelines. It serves product managers, designers, and developers as a repository of everything they need to plan, prototype, and develop better products. Modus resources include

- [multi-platform](/device-support/), [accessible](/foundations/accessibility/) design patterns
- icons, font, and design guidelines
- cross-browser component markup

The main goal of the design system is to create a cohesive brand experience. It also aims at increased scalability, better management of debt, design consistency, rapid prototyping, quick iteration, and improved user experience. Modus establishes a shared vocabulary between designers and developers and provides guidelines for better branded user interfaces and development resources.

<div class="row">

{{< card-start title="Designers" url="/designers/" header="designers.svg" >}}
Rapidly build beautiful and accessible experiences. The Modus kit contains all assets you need to get started.
{{</ card-start >}}

{{< card-start title="Developers" url="/developers/" header="developers.svg" >}}
The front-end framework is an HTML/CSS library developed as a common, open-source platform for all of Trimble's web applications.
{{</ card-start >}}

</div>

## Modular Approach

At Trimble, there are hundreds of products being developed worldwide. In order to be flexible enough to account for the heterogeneity of Trimble offerings, Modus is aiming towards a modularity in its approach. Modular approach can adapt to different requirements and can support flexibility of design in a variety of interfaces. Other advantages include

- It supports agile methodologies, since multiple teams can design and build modules in parallel.
- It’s cost-effective, because all modules can be reused.
- It’s relatively easy to maintain: fixing a problem in one module doesn’t affect the others.
- It’s adaptable, because modules can be assembled in the ways that meet different user needs.
- It promotes and encourages innovation, since you can create entirely new outcomes by introducing new combinations of components and patterns.

As the design system matures, you can expect to see an increased emphasis on modularity and [atomic design methodology](https://atomicdesign.bradfrost.com/) in order for the system to be more sustainable.

**Elements** are our most basic elements (buttons, cards, spinners, tables, etc.). Soon, we will be adding **patterns** (headers, footers, splash pages, etc.). And finally **templates** that will include layouts for pages (search results page, gallery page, etc.)

## Who Can Benefit from Modus

Product owners, designers, and developers are the primary audience for this system. The result of this alignment is consistency for the end-user.

- [Designers](/designers/) have a library of components at their disposal.
- [Designers](/designers/) have confidence that components are well tested.
- [Developers](/developers/) have a rulebook to follow.
- [Developers](/developers/) have access to the central library if their team lacks a dedicated designer.
- PMs can quickly put together prototypes using existing components.

## Goals and Objectives

With Modus Design System we are aiming to accomplish two main goals in line with Trimble business strategy of standardization and scale:

### 1. Systematize the Trimble product interfaces

- Define guiding design principles and foundations.
- Define and standardize reusable design components.
- Establish a pattern library.
- Establish a culture of inclusive design and development with building accessible components and patterns.
- Set up master design files with up-to-date patterns in Sketch, Figma, and Adobe XD.
- Refactor code and front-end architecture to support the modular approach for Bootstrap, Angular Material, and React.

### 2. Establish shared processes and governance

- Set up knowledge-sharing processes through conversations, collaboration, pairing, and training.
- Encourage contribution and collaboration with the Tiger Team approach.
- Promote the component and pattern library and encourage its use across the company.
- Promote shared design language across teams and disciplines.
- Promote and share best research-based usability practices
- Transition from a centralized to a distributed model with a dedicated design systems team to curate content and support from an open source contributions.

## Governance

Modus is maintained and supported by product teams across Trimble. Although the system initially was created by a small, dedicated group, our mission is to have it open to the entire community where everyone is welcomed to contribute. Modus is managed and maintained by a core team and governed by the UX Board. The UX Board and the Trimble leadership encourage contributions and adoption of the design system, and the core team is dedicated to providing training and guidance for design and implementation.

## How to Contribute

Trimble Modus Design System is the result of community contributions, and we are constantly working to make it better. We welcome your feedback as well as design patterns, code, ideas, articles, and user research. Explore some [ways to contribute to Modus](/community/contribute/)!

Interested in contributing?

<p class="mx-auto text-center">
  <a href="/community/tiger-teams/" class="btn btn-lg bg-white border m-2">Join a Tiger Team</a>
  <a href="/community/contribution-process/" class="btn btn-lg bg-white border m-2">Submit a UI Pattern</a>
  <a href="/community/contact/" class="btn btn-lg bg-white border m-2">Ask a question</a>
</p>

## Other Design Systems at Trimble

There are several other design systems at Trimble that currently exist outside of Modus but may be integrated into Modus in the future, when appropriate.

### Rosetta

[Rosetta](https://rosetta.ctct.com/), the CTCT design system, is primarily focused on in-field experiences found in touchscreen machine displays, installation/configuration/service utilities, etc. Due to the unique environments, users, and use cases these interfaces/experiences need to be accounted for in the Trimble Modus design system independently from desktop software and web systems. By offering Rosetta to be the in-field part of Modus, similar in-field experiences (CCFS, Ag, etc.) using Trimble’s design system should benefit from CTCT's efforts through improved consistency with less independent effort.

Like Modus, Rosetta includes a standardized collection of design principles, user interface components, layout templates, visual styles, and UI patterns that in-field products can be built from. This includes (but is not limited to) style documentation, design assets, code snippets, and component libraries.

The Rosetta design system is documented in Storybook and hosted on CTCT servers (https://rosetta.ctct.com/). This resource is generally intended to serve developers and includes documentation for both Web (Angular) and Android components. Likewise, CTCT UX hosts a Google Site (link) for the less technical aspects of Rosetta (design principles, mission/vision/philosophy, etc.)

For questions related to the Rosetta design system please contact Mathew Johns, CTCT.

### Fusion

[Fusion](https://drive.google.com/drive/folders/0B8L-D0MkifmSRUx6dXVCRjE5bUE) is a library for building **desktop** and **mobile** applications. At its core Fusion aims to be a portable, general purpose library of “useful things. It includes frameworks for portable applications (WPF on Windows, Xamarin Forms on mobile HTML/JS on both), modular applications (mostly MVVM patterns for tools and utilities), and common application infrastructure (help integration, crash and restart recovery, external APIs, etc.).

Fusion UI has a custom look-and-feel for standard controls with two themes for Trimble applications. Its general purpose UI library includes overlays for placing WPF elements on top of native controls, navigation controller for mobile style apps, and dockable side panels. The integrated development tools help with diagnostics and performance monitoring and built-in UI testing framework. In the future, Fusion patterns will be integrated into Modus.

### North Star

[North Star](http://sit-northstar.e-builder.net/login) (soon to be renamed Compass) is a design system component library used for Construction Project and Program Management Software Products, e-Builder and ProjectSight. The system precedes the Trimble acquisition and was built in order to maintain consistency within the bundle package of e-Builder and ProjectSight, so that the two can complement each other visually. The applications retain a degree of autonomy because they have different target users and design accommodations in order to prioritize end user value.

North Star includes style extensions built on top of code libraries. This allows benefits of library updates to be incorporated without impact to the style attribute enhancements added. The current libraries included are React and Angular.

For more information about North Star, please contact Michelle Casale, Trimble PPM.

### Terra

[Terra](https://terradesignsystem.com) is based on Trimble branded foundations very similar to Modus. It was created to style web-based marketing pages, such as product descriptions and e-commerce pages.  The scale of its components does not include complex tables and elements that are needed to create web-based products. Use Terra for marketing pages and Modus for the design of Trimble branded software products, applications, and services.

For more information about Terra, please contact Sean Ortiz.
