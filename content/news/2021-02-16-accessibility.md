---
title: How to Design Accessible Products
date: 2021-02-16
description: "When we design and develop for accessibility, we focus on building products that can be used by everyone. How do we design for accessibility? Here’s a quick primer on how to get started."
image: "/img/blog/headers/2021-02-16-accessibility.png"
images:
  - img/blog/headers/2021-02-16-accessibility.png
headerBgColor: "#eee"
tags: ["modus", "design", "accessibility"]
keywords: ["modus", "design", "accessibility"]
author: Ewa Nowak
blog: true
layout: blog-post
---

<br><br>
When we design and develop for accessibility, we focus on building products that can be used by everyone. How do we design for accessibility? Here’s a quick primer on how to get started.

## The importance of designing for accessibility

As UX designers, the user is at the center of our design process. We have the responsibility to design and build products that everyone can use and has access to regardless of ability, situation, or context. Improving accessibility of our products increases Trimble’s reach and hence Trimble’s revenue. Investing in accessibility brings a better experience to everyone.

## How to design for accessibility

[Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG20/) have been created to help your designs to be usable and accessible by as many people as possible, including individuals with physical disabilities (e.g. low vision or color blindness) and socioeconomic restrictions (e.g. poor internet connection). Here at Trimble, we strive to meet **AA accessibility standards**.

Digesting the WCAG can be a long and daunting process, so here’s **five things you can do** to make your product more accessible and inclusive:

### Add enough contrast

One of the easiest ways to align your designs with WCAG is to use adequate color contrast. People with low vision can have a hard time perceiving the content in your product. [According to the World Health Organization (WHO)](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment), there are over 1 billion people with vision impairment.

To check the color contrast in your designs, you can use [Stark](https://developer.paciellogroup.com/resources/contrastanalyser/), a plugin for Sketch, Figma, and Adobe XD. You can also use other tools, such as the [Color Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/) (available for free for Windows and macOS) and [Contrast Checker](https://webaim.org/resources/contrastchecker/), free web-based tool from the folks at [WebAIM (Web Accessibility in Mind)](https://webaim.org/).

For developers building web-based software, there are some browser extensions you can install for free to help you check for accessibility issues. WebAIM’s [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/) and [Lighthouse](https://developers.google.com/web/tools/lighthouse) offer audits for accessibility, performance, and much more.

### Include focus states

Browsers by default show outlines or selected elements, which are called focus indicators. As a designer, you might find the default focus states ugly and may be tempted to remove them. **Never remove a default focus state without replacing it with another** (that meets color contrast standards for AA compliance). If you remove the focus state, you exclude people who use screen readers, individuals with limited mobility, and power users who prefer the keyboard as their main way of navigating your product. Make sure your focus state stands out from the other elements around it: it’s clearly visible and has enough contrast. Interactive elements (such as input fields, buttons or icons, and links) all need focus states.

### Make your forms easy to use

One of the most important elements in your product are forms. They allow users to add input, so they can get a response from your product. Filling out forms is not an easy task for someone with a disability, such as low vision. There are three things you can do to help users with forms:

1. **Always use labels in form fields**

   One of the biggest mistakes you can make when designing forms is using placeholder text in place of a label. Resist the temptation! You might argue that your form is going to look cleaner, since you are removing one extra element, but placeholder text is hard to read because it’s usually gray, and it disappears after the user clicks in the field. When the text disappears, the user might have trouble remembering what the expected input should be. This is not only a problem for users with cognitive disabilities, but also for someone who is interrupted when filling out the form or momentarily steps away from the form, for example to go to the bathroom. Always associate form controls with a text label.

2. **Add keyboard interactions**

   Provide a logical reading and navigation order and ensure the form can be completed and submitted using a keyboard. Make sure that the user can tab into the form, navigate through it successfully using the keyboard, and submit the form with a return. Make sure you add focus states so the user can see, which element is in focus (see above).

3. **Add appropriate form validation and error recovery**

   Provide all necessary instructions and cues of how to avoid errors. Alert the user of any validation errors. Make sure the error message is in close visual proximity to the field (usually under the field) and can be read by a screen reader. And provide informative feedback: make sure the feedback is friendly and written in a language the user can understand. Avoid jargon (“Error 22: Exception processing message 27cue388dje89”) or messages that do not provide any clues as to how the user can fix the error (“An unexpected error has occurred”).

### Add visual clues

Users with color blindness will have difficulty understanding your content if you only use color to show an action, communicate a message (such as an error), or prompt a response. For example, one of the most common types of vision deficiencies is deuteranopia, red-green color blindness. If you use only color to indicate success (green) and error (red), the user might not be able to discern one from the other. You can fix it by adding an extra indicator like a pattern, icon, label, or even a micro-animation.

### Include useful alternative text for images

Adding alternative (alt) text for images is the first principle of web accessibility. It provides a textual alternative to non-text content, such as images. Alt text is read by screen readers allowing the content to be accessible to users with visual or certain cognitive abilities. It is also displayed in place of an image if the image is not loaded properly (sometimes due to a poor internet connection). The key is to provide the content and the function of the image, so the user knows what it is and what it does. When providing alt text, be accurate, equivalent, and succinct. Avoid redundancy.

## Looking for more ways to build accessible products?

- ### Include accessibility in your workflow and the acceptance criteria

  When designing or doing design research, verify your assumptions about how a user might find your design challenging, consider users with disabilities, and look for opportunities to improve. In the [Accessibility section](/foundations/accessibility/) of the Modus style guide, we included a nifty accessibility checklist you can use to add to the acceptance criteria.

- ### Get an accessibility audit

  Request an accessibility audit of your product from an audit service to determine if your product works with assistive technologies and meets WCAG 2.0 AA standards. You can also start by running your software through WebAIM’s [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/) or [Lighthouse](https://developers.google.com/web/tools/lighthouse). Although the Modus design system manager will not be able to provide a comprehensive report, she might help you flag larger issues and/or help you use the audit tools available.

- ### Request accessibility training

  Make sure your team understands how to design and develop products that are accessible. Modus will offer accessibility training that you can sign up for to get better acquainted with WCAG. You can [request it here](/community/contact/)!

Designing for accessibility is easier and more important than you might think. Let’s make Trimble products usable to all humans, regardless of their abilities, economic status, age, education, or geographic location. Let’s design for everyone!

**If you would like to contribute an article or suggest a topic, [send us a note](/community/contact/)!**
