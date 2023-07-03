---
title: "Sentiment Scale"
layout: "single"
description: "Sentiment scale is a way to collect user feedback fast."
components: true
componentsWeb: true
images:
  - "/img/components/headers/sentiment-scale.png"
tags: [styles]
---

## Specifications

- Each sentiment rating option follows the behavior of a radio button group: only one sentiment rating option can be selected at a time.
- The sentiment scale is typically placed on a [Card](/components/web/cards/).
- Titles may serve as a question. A subtitle is neither required nor recommended.
- Sentiment scales can be two- to five-tiered. A five-tier scale ensures more accurate insights into the user’s emotion intensity.
- A two-tier sentiment scale is usually represented by buttons with a thumb-up and thumb-down emoticons.
- Additional [Chips](/components/web/chips/) serve as optional and supplemental tags and should not impact the results.

**Two-tier sentiment scale:**

This scale is a plain thumb-up or thumb-down reaction.

{{< img src="/img/components/sentiment-scale-two-example.svg" dark="/img/components/sentiment-scale-two-example-dark.svg" class="bg-light" width="220" height="166" alt="Two-tier Sentiment Scale example" loading="auto" >}}

**Five-tier sentiment scale:**

This scale is used to measure user satisfaction from extremely positive to extremely negative sentiment levels. This scale is the most effective in delivering helpful results for future development.

{{< img src="/img/components/sentiment-scale-five-example.svg" dark="/img/components/sentiment-scale-five-example-dark.svg" class="bg-light" width="220" height="166" alt="Five-tier Sentiment Scale example" loading="lazy" >}}

### Behaviors

- Once a sentiment (emoticon) is selected, the user can
  - unselect it by clicking it again,
  - select a different response, or
  - navigate away from the sentiment scale or submit the response (optional).
- When using a sentiment scale with chips, the user may remove and submit more than one chip.
- A tooltip should appear after 500 milliseconds when hovering over any sentiment or chip.

### Editorial

- Titles are optional. Keep titles one to five words long. Use title case and capitalize prepositions of four letters or more.
- A short and direct question is required. Use title case and capitalize prepositions of four letters or more. Questions may replace the title or label.
- Add clarity for technical context if needed. Avoid too complex issues in order not to discourage the user from submitting feedback.
- Use full sentences with punctuation, at most 25 words if possible. Do not include multiple paragraphs.
- The lowest and highest ratings or scales should be short but specific. Always establish an adverb or pronoun for each rating (“Not”, “Somewhat”, “Neither”, “Very”). This is especially important for tab order and tooltips. Use sentence case for the lowest and highest scale labels.
- Follow the editorial guidelines for [Radio Buttons](/components/web/radio-buttons/), [Buttons](/components/web/buttons/), and [Chips](/components/web/chips/).
