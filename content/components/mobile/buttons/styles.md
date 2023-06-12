---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
component: Buttons
images:
  - "/img/mobile/headers/buttons.png"
tags: [mobile, styles]
---

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the button container. Icons are optional.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the buttons should be used in proportion to the context and content around it.

{{< img src="/img/mobile/button-specifications.svg" dark="/img/mobile/button-specifications-dark.svg" width="962" height="264" alt="Button Specifications" loading="auto" >}}

### Sizing

There are four sizes of buttons: xsmall, small, default and large. Corner radius is 4px.

{{< img src="/img/mobile/button-sizes.svg" dark="/img/mobile/button-sizes-dark.svg" width="958" height="120" alt="Buttons Sizes" >}}

### States

States for Buttons in Mobile are:

- Default
- Pressed/Active
- Disabled

{{< img src="/img/mobile/button-states.svg" dark="/img/mobile/button-states-dark.svg" width="961" height="120" alt="Button States" >}}

### Floating Action Buttons

Floating action buttons (FABs) are used for the primary or most common action on a screen. They appear at the highest level "floating" above screen content thus they include a dropshadow to evoke a sense of depth. Circular & pill shapes are often used for these buttons. Recommended sizes are 56px and 48px. Secondary color may also be used if necessary.

{{< img src="/img/mobile/button-fab-states.svg" dark="/img/mobile/button-fab-states-dark.svg" width="960" height="214" alt="Floating Action Button" >}}

#### Placement

FABs can attach to top or bottom of app bars and the edge of some components.

{{< img src="/img/mobile/button-fab-placement.svg" dark="/img/mobile/button-fab-placement-dark.svg" width="960" height="489" alt="Floating Action Button Placement" >}}

### Editorial

- All buttons in the Modus Design System employ **sentence case**.
- Label a button with a verb, like “Copy”, or verb-phrase, like “Copy document.”
- Strive for short button labels that clearly describe an action.
- Try to limit button labels to three words or less. Using one or two words, if possible, is ideal.
- When writing buttons, you can remove most prepositions and articles (e.g. a, an, the).
- If a question is asked in a modal, use button labels that match the question. Keep in mind the following guidelines as well:
  - Don’t use OK/Cancel to answer yes or no questions.
  - Make sure you keep “your” and “my” consistent.
  - Avoid saying “click” when referring to buttons (and other UI elements).
