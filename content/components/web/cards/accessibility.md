---
title: "Cards"
layout: "single"
description: "Cards provide a set of content which acts as an entry point to more detailed information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/cards.png"
bootstrapURL: "/components/cards/"
reactBootstrapURL: "/components/cards/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-card--default"
component: cards
tags: [accessibility]
---

## Accessibility

- Cards should use an underlying `article` element to maintain usability for some screen reader users.
- Make sure all interactive elements within cards are part of a tab sequence.
- Avoid keyboard traps when adding components to cards. For example, the user focuses on an element within a card, but is unable to tab to the next focusable element.
- Although the card element passes accessibility testing, content authors need to ensure the content within the card is accessible. For example, if you add an image to the card you need to include alternative text to pass accessibility testing.
