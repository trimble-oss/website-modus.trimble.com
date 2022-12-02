---
title: "Cards"
layout: "single"
description: "Cards contain content and actions about a single subject."
components: true
component: cards
keywords: Cards, Card
images:
  - "/img/in-field/headers/cards.png"
tags: [in-field, accessibility]
---

## Accessibility

- Cards should use an underlying `article` element to maintain usability for some screen reader users.
- Make sure all interactive elements within cards are part of a tab sequence.
- Avoid keyboard traps when adding components to cards. For example, the user focuses on an element within a card, but is unable to tab to the next focusable element.
- Although the card element passes accessibility testing, content authors need to ensure the content within the card is accessible. For example, if you add an image to the card you need to include alternative text to pass accessibility testing.
