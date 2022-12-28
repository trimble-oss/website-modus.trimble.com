---
title: "Contribution Process"
layout: "single"
description: "Step-by-step instructions how to contribute a design pattern to Modus."
url: "/community/contribution-process/"
community: true
hideToc: true
---

The Modus team is dedicated to maintaining a consistent, top-quality product. Accordingly, before any component is revised or added, it goes through a process of reviews and approvals.

{{< img src="/img/guide/contribution-process.svg" dark="/img/guide/contribution-process-dark.svg" width="854" height="392" alt="Contribution Process" loading="auto" >}}

### 1. Understanding the design system and the process

During this stage you review our [roadmap](https://miro.com/app/board/o9J_kvewBgE=/), documentation, [submission guidelines](/community/submission-guidelines/), and process. You should also familiarize yourself with our design principles and foundations, which address visual design, UX, content, branding, and accessibility ([Foundations](/foundations/) section of Modus). Soon, you will also be able to review personas and user archetypes, so you can better understand who your design should serve.

### 2. Submission

Identify the user need your pattern solves and explain its advantages over alternative patterns. Include original design files and any user research that supports this pattern. You should contribute a pattern when

a.) A new component has been created on your product team (e.g. Chips for displaying and interacting with content filters)

b.) The component exists as design elements and interaction pattern sequence (in Figma, Adobe XD, inVision)

c.) The component has undergone usability testing with documented results or is currently in use in the product

d.) The product team decides to propose the pattern to the Design System Team

To submit your pattern, please follow the [submission guidelines](/community/submission-guidelines/). Upon submission, Jira issue is created on the Modus Design System backlog. The pattern (along with all the provided documentation is assigned an ID and the submitting party is added as followers of the issue, so they can track the progress.

### 3. Review

Once an issue is entered into the backlog the Modus Product Manager informs the UX Board of a new pattern submission in a weekly meeting and requests a review. Review period opens and the pattern is shared with the UX and engineering community. Patterns are reviewed according to the following criteria:

a.) Pattern is designed according to the current design standards (tokens, foundations, as put forward in the style guide and existing pattern library)

b.) Pattern presents new functionality or promises to solve an existing design problem in a novel way

c.) Each individual reviewer should conduct a heuristic review of the pattern and come prepared with an assessment grade:

1 = I have some significant design and/or usability concerns (document these concerns)

2 = The pattern seems useful and generally usable, but I would request a few tweaks (document these tweaks and the reason for requesting them)

3 = The pattern seems useful and generally usable, and I have no concerns

Some of the criteria used in the heuristic review include (but are not limited to)

- Usability (Is the pattern responsive? Is the interaction flow and behavior clearly documented?)
- Accessibility (Is the patterns accessible to all audiences? Does it meet WCAG 2.1 standards?)
- Visual design (Is the contribution consistent with our visual style?)
- Content (Does the pattern have plain language, correct spelling, and grammar? Are actions clearly described? Is there enough contextual information to aid the user?)

d.) Review usability tests or any other submitted research data.

### 4. Prioritization and recommendation

When the pattern is approved, it is prioritized and scheduled for a release. The design systems team will make sure your pattern is added to all supported code and design libraries, conduct ongoing maintenance of your pattern, and monitor its usage.
