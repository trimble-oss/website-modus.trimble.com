---
title: "Wizard"
layout: "single"
description: "A step-by-step process that guides users through a series of tasks or decisions"
components: true
componentsWeb: true
images:
  - "/img/components/headers/wizard.png"
tags:
  - usage
aliases:
  - "/components/web/wizard/"
  - "/components/web/wizards/"
---

## Overview

A wizard component is a step-by-step process that guides users through a series of tasks or decisions, typically in a linear fashion. It's often used in software applications to simplify complex processes by breaking them down into manageable steps.

Wizards usually involve multiple pages and can be displayed on web pages or modal windows. Each page usually corresponds to a single step in the multistep process.

Common examples of Wizard components include account setup processes, software installation wizards, and multi-step forms for tasks like online shopping or booking appointments.

## Usage

### When to use

- **Long or complex processes**: If a process involves multiple steps (**two or more**) or requires users to provide a significant amount of information, breaking it down into smaller, manageable steps with a Wizard can improve usability and reduce cognitive overload.
- **Guided workflows**: When you want to guide users through a predefined workflow or decision-making process, a Wizard can help ensure they follow the correct sequence of steps.
- **Reducing errors**: Wizards can incorporate validation checks at each step to prevent users from progressing until they provide the necessary information or complete required actions, helping to minimize errors and ensure data accuracy.
- **Onboarding processes**: When introducing users to a new platform, application, or service, a Wizard can help onboard them by guiding them through the setup process and introducing key features gradually.
- **Complex forms**: For forms that require users to input a lot of information, such as registration forms or checkout processes, breaking them down into smaller steps with a Wizard can make the form feel less overwhelming and improve completion rates.
- **Sequential tasks**: Tasks that involve multiple sequential actions, such as creating a project plan or configuring settings, can benefit from a Wizard to guide users through each step in the process.
- **Decision trees**: In scenarios where users need to make a series of decisions that affect the outcome, a Wizard can present options one at a time, helping users understand the consequences of each choice before proceeding.

### When not to use

- **Simple or short processes**: If a process is straightforward and can be completed in just a few steps without causing confusion or cognitive overload, introducing a Wizard might add unnecessary complexity and hinder the user experience.
- **Frequent users**: For applications or interfaces that are used frequently by experienced users who are already familiar with the workflow, a Wizard can slow down their interaction and create unnecessary friction. In such cases, providing direct access to the relevant functionality or allowing users to customize their workflow might be more efficient.
- **Non-linear workflows**: Wizards are designed for sequential processes where each step builds upon the previous one. If the process involves branching paths or non-linear workflows where users may need to jump between steps in a non-sequential manner, a Wizard may not be suitable.
- **Mobile or limited screen space**: On small screens, such as mobile devices, Wizards can take up a significant amount of space and may not be suitable for optimizing the limited screen real estate. In these cases, alternative designs that prioritize simplicity and efficiency, such as collapsible panels or progressive disclosure, may be more appropriate.
- **Content-heavy interfaces**: If the content within each step of the Wizard is extensive, users may feel overwhelmed by the amount of information presented in a sequential manner. In such cases, alternative designs that allow users to navigate freely or provide contextual help and tooltips may be more effective.
- **Highly technical tasks**: For tasks that require deep domain knowledge or technical expertise, users may prefer direct access to all options and settings without being guided through a Wizard. In such cases, a more flexible and customizable interface that allows users to access advanced features quickly may be preferable.
- **Time-sensitive processes**: In situations where users need to complete a process quickly or under time pressure, navigating through multiple steps in a Wizard may be perceived as cumbersome and inefficient. Simplifying the process and reducing the number of required interactions can help streamline the user experience.
