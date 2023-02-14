---
title: "Messages"
layout: "single"
description: "Messages provide the user with contextual static information. They have a lower priority than an alert."
components: true
componentsWeb: true
images:
  - "/img/components/headers/messages.png"
bootstrapURL: "/components/messages/"
reactBootstrapURL: "/components/messages/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-message--default"
tags: [styles]
---

## Specifications

<div class="guide-example-block my-3">
  <div class="guide-sample">
    <div class="message message-primary m-0">
      <i class="modus-icons notranslate" aria-hidden="true">info</i> This is a primary message.
    </div>
  </div>
</div>

- Fills the width of its container.
- Should have an accompanying icon to the left of the message text. When the text spans multiple lines, the icon should remain aligned to the top.

### Behaviors

- Messages should remain static on the page. They should not be dismissible.

### Editorial

- Messages should be brief, full sentences, with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.
