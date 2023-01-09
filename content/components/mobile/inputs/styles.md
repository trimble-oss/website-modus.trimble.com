---
draft: true
title: "Inputs"
layout: "single"
description: ""
components: true
images:
  - "/img/mobile/headers/inputs.png"
component: inputs
tags: [mobile, styles]
---
### Styles

## Specifications

- Label Text Color:  Gray 9
- Input Text Color: Gray 9
- Placeholder Text Color: Gray 4
- Border Color: Gray 9
- Focus :  Focus
- Active: Blue Light

{{< img src="/img/mobile/inputs-specifications.svg" dark="/img/mobile/inputs-specifications-dark.svg" width="961" height="170" class="w-100" alt="Inputs" loading="auto" >}}

## Behavior

- Form inputs that are in Active should have a 2dp border using our active color : Blue Light .
- Form inputs that are in Focus should have a 2dp border using our focus color : Gray 6.
- Form inputs that are invalid should have a 2dp border using our danger color: Red.
- Form inputs that are disabled should be 40% opacity.
- Form inputs that are read only have background color: Gray 0.

{{< img src="/img/mobile/inputs-behavior.svg" dark="/img/mobile/inputs-behavior-dark.svg" width="961" height="170" class="w-100" alt="Inputs" loading="auto" >}}

# Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark required fields with an * .
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati   |

{{</ whats-changed-table >}}
