---
title: "Accessibility"
layout: "single"
description: "Modus guidelines ensure Trimble products are accessible to users with disabilities."
foundations: true
url: "/foundations/accessibility/"
---

## Introduction

All components in Modus are built with accessibility in mind. Studies estimate that about one fifth (20%) of the population has some kind of disability. Even though that number might be significantly lower for our users, keeping accessibility in mind is not only a good practice, but it also may have serious legal implications especially as it relates to government contracts.

In an effort to be inclusive, here at Trimble we want to build products for everyone and to be compliant with the law. To that end, Modus components are compliant with [The Americans with Disabilities Act (ADA)](https://webaim.org/articles/laws/usa/ada) and the [Rehabilitation Act of 1973 (Sections 504 and Section 508)](https://webaim.org/articles/laws/usa/rehab) and follows the [Web Content Accessibility Guidelines (WCAG 2.0)](https://webaim.org/standards/wcag/).

Major categories of disabilities include visual, hearing, motor, and cognitive, with each category requiring a certain type of adaptation in the design of web and desktop products. For help with implementation, we include a checklist that you can add to the acceptance criteria.

For more information or questions about accessibility, visit https://webaim.org/ or [contact us](/community/contact/) for training and support. Also see a list of useful accessibility tools for web products below.

## Tools & Resources

- [WebAim Accessibility Resource Page](https://webaim.org/resources/)
- [Accessibility Evaluation Tools](https://webaim.org/articles/tools/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color-Reliant Link Contrast Checker](https://webaim.org/resources/linkcontrastchecker/)
- [CommonLook Section 508 Plugin for Adobe Acrobat](https://webaim.org/resources/commonlook/)
- [WAVE](https://wave.webaim.org/): a suite of evaluation tools that identify accessibility and Web Content Accessibility Guideline (WCAG) errors.
- [Web Developer Extension for Mozilla-Based Browsers](https://webaim.org/resources/webdev/)

<style>
article li a {
  text-decoration: underline;
}

article ul:not(:first-of-type) {
  padding-left: 2px;
}

article ul:not(:first-of-type) li {
  list-style: none;
  padding-left:1px;
}

.custom-control {
  height: 100%;
}
</style>

## Accessibility Checklist

### Layout

- {{< checklist >}}Orientation of web page is not restricted to only portrait or landscape, unless a specific orientation is necessary{{</ checklist >}}
- {{< checklist>}}Do not require scrolling in 2 dimensions{{</ checklist >}}
- {{< checklist>}}The page is readable and functional when the page is zoomed to 200%{{</ checklist >}}
- {{< checklist>}}The web page is responsive{{</ checklist >}}

### Images

- {{< checklist>}}Do not use images representing text, when a HTML text will suffice (logos are exempt){{</ checklist >}}
- {{< checklist>}}Images of text have a contrast ratio of at least 4.5:1 (logos are exempt){{</ checklist >}}

### Text

- {{< checklist>}}Line height is at least 1.5 times the font size{{</ checklist >}}
- {{< checklist>}}Spacing following paragraphs is at least 2 times the font size{{</ checklist >}}
- {{< checklist>}}The purpose of each link can be determined from the link text alone or from the link text together with its context{{</ checklist >}}
- {{< checklist>}}Instructions do not rely only of visual characteristics (shape, size, location) of components; for example, “click the red button to continue”{{</ checklist >}}
- {{< checklist>}}Instructions do not rely on sound{{</ checklist >}}
- {{< checklist>}}Provide descriptive headings for each section (h1, h2, h3, etc){{</ checklist >}}
- {{< checklist>}}Do not skip levels in headings (e.g. going from an h1 to an h3){{</ checklist >}}

### Color

- {{< checklist >}}Large text [24px and 18.5px bold and larger](https://www.w3.org/TR/WCAG21/#dfn-large-scale) must have a contrast ratio of 3:1{{</ checklist >}}
- {{< checklist >}}Regular text [smaller than 24px and 18.5px bold](https://www.w3.org/TR/WCAG21/#dfn-large-scale) must have a contrast ratio of 4.5:1{{</ checklist >}}
- {{< checklist >}}Color is not the only means of conveying info, indicating action (links) or prompting a response (error message){{</ checklist >}}
- {{< checklist >}}Does not meet 3:1 ratio — additional visual cues (font styles, ect) are provided{{</ checklist >}}
- {{< checklist >}}Does meet 3:1 ratio — additional visual cues are provided on focus{{</ checklist >}}

### User Interface

- {{< checklist >}}All states (default, hover, focus) of active UI (e.g. not disabled buttons) and meaningful graphics (icons, charts, buttons) must meet 3:1 contrast ratio{{</ checklist >}}
- {{< checklist >}}(Exception) pure decoration{{</ checklist >}}
- {{< checklist >}}Changing the setting of any UI component does not result in a substantial change to the page, the spawning of a pop-up window, an additional change of keyboard focus, or any other change that could confuse or disorient the user unless the user is informed of the change ahead of time.{{</ checklist >}}
- {{< checklist >}}Navigations that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user{{</ checklist >}}
- {{< checklist >}}Components that have the same functionality within a set of web pages are identified consistently (e.g. all links look the same, all error messages are red){{</ checklist >}}
- {{< checklist >}}When additional content is presented on hover or keyboard focus:{{</ checklist >}}
- {{< checklist >}}The newly revealed content can be dismissed (generally via the Esc key) without moving the pointer or keyboard focus, unless the content presents an input error or does not obscure or interfere with other page content.{{</ checklist >}}
- {{< checklist >}}The pointer can be moved to the new content without the content disappearing.{{</ checklist >}}
- {{< checklist >}}The new content must remain visible until the pointer or keyboard focus is moved away from the triggering control, the new content is dismissed, or the new content is no longer relevant.{{</ checklist >}}

### Media

- {{< checklist >}}Requirements for accessible media{{</ checklist >}}
- {{< checklist >}}Prerecorded audio-only{{</ checklist >}}
  - {{< checklist >}}Transcript with descriptions{{</ checklist >}}
  - {{< checklist >}}Captions{{</ checklist >}}
- {{< checklist >}}Prerecorded video-only (unless the video is decorative){{</ checklist >}}
  - {{< checklist >}}Transcript with descriptions{{</ checklist >}}
- {{< checklist >}}Pre-recorded video with audio, all:{{</ checklist >}}
  - {{< checklist >}}Captions{{</ checklist >}}
  - {{< checklist >}}Transcript with descriptions{{</ checklist >}}
- {{< checklist >}}Live audio-only{{</ checklist >}}
  - {{< checklist >}}Captions{{</ checklist >}}
- {{< checklist >}}Live video with audio{{</ checklist >}}
  - {{< checklist >}}Captions{{</ checklist >}}
- {{< checklist >}}PDFs{{</ checklist >}}
  - {{< checklist >}}Files must be accessible{{</ checklist >}}
- {{< checklist >}}If any audio on a web page plays automatically for more than 3 seconds, either:{{</ checklist >}}
  - {{< checklist >}}a mechanism is available to pause or stop the audio, or{{</ checklist >}}
  - {{< checklist >}}a mechanism is available to control audio volume independently from the overall system volume level.{{</ checklist >}}

### Forms

- {{< checklist >}}A descriptive text label is provided for each form field (placeholder text cannot replace a label){{</ checklist >}}
- {{< checklist >}}Related form fields are grouped with fieldset/legend{{</ checklist >}}
- {{< checklist >}}Use required property when a form field is required{{</ checklist >}}
- {{< checklist >}}Use type and autocomplete attributes on form inputs when available{{</ checklist >}}
- {{< checklist >}}Required form elements or form elements that require a specific format, value, or length provide this information within the element’s label{{</ checklist >}}
- {{< checklist >}}If an input error is automatically detected, all:{{</ checklist >}}
  - {{< checklist >}}the specific form field in error is notified to user{{</ checklist >}}
  - {{< checklist >}}suggestions are provided for fixing the the error next to the form field{{</ checklist >}}
- {{< checklist >}}If the user can change or delete legal, financial, or test data, the changes/deletions can be reversed, verified, or confirmed.{{</ checklist >}}

### HTML/CSS/JS

- {{< checklist >}}Correct use of semantic HTML{{</ checklist >}}
- {{< checklist >}}Tables are used only for tabular data & data cells are associated with their headers{{</ checklist >}}
- {{< checklist >}}All code is standards-compliant{{</ checklist >}}
- {{< checklist >}}ARIA is used appropriately to enhance accessibility when HTML is not sufficient{{</ checklist >}}
- {{< checklist >}}Use the language attribute on the html element (`<html lang="en">`){{</ checklist >}}
- {{< checklist >}}The language of page content that is in a different language is identified using the lang attribute{{</ checklist >}}
- {{< checklist >}}DOM (document object model) order must match visual order (ie. code source){{</ checklist >}}
- {{< checklist >}}Focusable components receive focus in visual order{{</ checklist >}}
- {{< checklist >}}Keyboard focus indicator is visible.{{</ checklist >}}
- {{< checklist >}}Provide alt tag for all images{{</ checklist >}}
- {{< checklist >}}A descriptive alt tag for informative images{{</ checklist >}}
- {{< checklist >}}A null alt tag (`alt=""`) for decorative images{{</ checklist >}}
- {{< checklist >}}Alternative forms of CAPTCHA using output modes for different types of sensory perception are provided{{</ checklist >}}
- {{< checklist >}}Each web page must have a unique title that describes the page’s topic or purpose{{</ checklist >}}
- {{< checklist >}}A mechanism is available to bypass blocks of content that are repeated on multiple pages, such as{{</ checklist >}}
- {{< checklist >}}Adding links at the top of the page to each area of the content, and/or{{</ checklist >}}
- {{< checklist >}}Using ARIA landmarks to identify regions of a page, and/or{{</ checklist >}}
- {{< checklist >}}Providing heading elements (h1, h2, etc) at the beginning of each section of content{{</ checklist >}}
- {{< checklist >}}More than one way is available to locate a web page within a set of web pages, such as: sitemap, search.{{</ checklist >}}
- {{< checklist >}}(Exception) when the web page is the result of, or a step in, a process{{</ checklist >}}
- {{< checklist >}}If multipoint or path-based gestures (such as pinching, swiping, or dragging across the screen) are not essential to the functionality, then the functionality can also be performed with a single point activation (such as activating a button).{{</ checklist >}}
- {{< checklist >}}To help avoid inadvertent activation of controls, avoid non-essential down-event (e.g., onmousedown) activation when clicking, tapping, or long pressing the screen. Use onclick, onmouseup, or similar instead. If onmouseup (or similar) is used, you must provide a mechanism to abort or undo the action performed.{{</ checklist >}}
- {{< checklist >}}Functionality that is triggered by moving the device (such as shaking or panning a mobile device) or by user movement (such as waving to a camera) can be disabled and equivalent functionality is provided via standard controls like buttons.{{</ checklist >}}
- {{< checklist >}}Content that is updated dynamically (status messages) must be notified to users of assistive technologies (like screen readers) without getting visual focus. (Can use ARIA role=status){{</ checklist >}}

### Usability

- {{< checklist >}}All functionality is operable through the keyboard, unless the functionality cannot be accomplished in any known way using a keyboard (e.g. free-hand drawing){{</ checklist >}}
- {{< checklist >}}Keyboard focus is never locked or trapped at one particular page element{{</ checklist >}}
- {{< checklist >}}Page-specific shortcut keys and accesskeys (accesskey should typically be avoided) do not conflict with existing browser and screen reader shortcuts{{</ checklist >}}
- {{< checklist >}}Web pages do not contain anything that flashes more than three times in any one second{{</ checklist >}}
  - {{< checklist >}}(Exception) The flashing content is sufficiently small and the flashes are of low contrast and do not contain too much red{{</ checklist >}}
- {{< checklist >}}When a page element receives focus, it does not result in a substantial change to the page, the spawning of a pop-up window, an additional change of keyboard focus, or any other change that could confuse or disorient the user{{</ checklist >}}
- {{< checklist >}}For each time limit that is set by the content, the user is given options to turn off, adjust, or extend that time limit{{</ checklist >}}
  - {{< checklist >}}(Exception) The time limit is a required part of a real-time event;{{</ checklist >}}
  - {{< checklist >}}(Exception) The time limit is essential and extending it would invalidate the activity;{{</ checklist >}}
  - {{< checklist >}}(Exception) The time limit is longer than 20 hours.{{</ checklist >}}
- {{< checklist >}}For any moving, blinking or scrolling information (e.g. background videos, carousels, animations) that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it. (Having motion stop only so long as a user has focus on it – where it restarts as soon as the user moves the focus away – would not be considered a “mechanism for the user to pause”){{</ checklist >}}
  - {{< checklist >}}Exception – The movement, blinking, or scrolling is part of an activity where it is essential.{{</ checklist >}}
  - {{< checklist >}}Exception – An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.{{</ checklist >}}
- {{< checklist >}}For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, hide it, or control the frequency of the update.{{</ checklist >}}
  - {{< checklist >}}Exception – The auto-updating is part of an activity where it is essential. (e.g. a count-down timer){{</ checklist >}}
