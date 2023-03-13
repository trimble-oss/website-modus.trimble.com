---
title: "Alerts"
menuTitle: "Alerts"
layout: "single"
description: "Alerts provide contextual information about system status that persists until dismissed or resolved."
components: true
componentsWeb: true
images:
  - "/img/components/headers/alerts.png"
bootstrapURL: "/components/alerts/"
reactBootstrapURL: "/components/alerts/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-alert--default"
tags: [styles]
---

## Specifications

- Container (Height: 56px; Radius: 2px; <span class="theme-l">background-color: white;</span> 1px border, 8px indicator line same color as border on the left; Padding: 16px; Margin: 16px) _required_
- Alert text (Font: Open Sans Bold 14px) _required_
- Leading Non-Interactive Icon/ Charm (16x16px) _optional_
- Button (text only, right aligned) or trailing close icon (16px16px) _optional_
- Link (underlined, only one per alert) _optional_

<div class="p-5 my-3 pr-5 bg-light">
  <div class="alert alert-success" style="max-width: 460px" role="alert" data-toggle="popover" data-trigger="manual" data-html="true" data-placement="right" data-content="">
      <i class="modus-icons notranslate alert-icon" aria-hidden="true">check_circle</i>
      <div data-toggle="popover" data-trigger="manual" data-html="true" data-placement="bottom" data-offset="19" data-content="<small><b>Font:</b> Open Sans Bold 14px<br><b>Height:</b> 56px<br><b>Border-radius:</b> 2px<br></small>">You have completed a task.</div>
    </div>
</div>

<script>
$(function () {
  $('[data-toggle="popover"]').popover('show')
});
</script>

### Alerts

- Appear on top of the main content container.
- Stretch horizontally to fill 100% of the container they are placed in.
  - Always follow [typography line length guidelines](/foundations/typography/#line-length) when displaying alerts. Pair with another component, like a Form, or place in a fixed-width container to ensure alerts don't get too wide.
- Push other content down to make room for an alert on a page.
- Can include tint to add extra emphasis or to increase contrast with page content. When changing background color, make sure the text and icons pass [contrast ratio requirements](/foundations/accessibility/).
- Do not have a shadow.
- Remain on the page until dismissed.

### Basic Alerts

<style>
[data-theme=dark] .alert-dark {
  border-color: rgba(23,28,30,.5) !important;
}
.bg-light .alert {
  max-width: 600px;
}
.popover-body {
  min-width: 160px;
}
[data-theme=dark] .popover-body .theme-d {
  display: inline-block !important;
}
[data-theme=dark] code {
  filter: brightness(250%);
}
[data-theme=dark] .alert.alert-dark {
  border-color: #464B52!important;
}
</style>

<div class="bg-light">
  <div class="bg-light p-3 p-xl-4 px-xl-5" style="margin-left: 210px">
    <div
      class="alert alert-primary"
      role="alert"
      data-toggle="popover"
      data-html="true"
      data-placement="left"
      data-content="<small><b>background-color:</b> <code class=theme-l>#ffffff</code><code class=theme-d>#0063a380</code><br>
                           <b>border-color:</b> <code class=theme-l>#019aeb80</code><code class=theme-d>#019aeb</code></small>">
      <i class="modus-icons notranslate alert-icon" aria-hidden="true">info</i>
      <div>A basic Primary alert</div>
    </div>
    <div class="alert alert-secondary" role="alert"
      data-toggle="popover"
      data-html="true"
      data-placement="left"
      data-content="<small><b>background-color:</b> <code class=theme-l>#ffffff</code><code class=theme-d>#6a6e7980</code><br>
                           <b>border-color:</b> <code class=theme-l>#6a6e79</code><code class=theme-d>##6a6e79</code></small>">
      <i class="modus-icons notranslate alert-icon" aria-hidden="true">help</i>
      <div>A basic secondary alert with a button</div>
      <a href="#" class="btn btn-sm btn-text-secondary">Button</a>
    </div>
    <div class="alert alert-dark" role="alert"
      data-toggle="popover"
      data-html="true"
      data-placement="left"
      data-content="<small><b>background-color:</b> <code class=theme-l>#ffffff</code><code class=theme-d>#171c1e80</code><br>
                           <b>border-color:</b> <code class=theme-l>#252a2e</code><code class=theme-d>#464b52</code></small>">
      <i class="modus-icons notranslate alert-icon" aria-hidden="true">info</i>
      <div>A basic <u>dark alert</u> with <em>text formatting</em></div>
    </div>
    <div class="alert alert-success fade show" role="alert"
      data-toggle="popover"
      data-html="true"
      data-placement="left"
      data-content="<small><b>background-color:</b> <code class=theme-l>#ffffff</code><code class=theme-d>#1e8a4480</code><br>
                           <b>border-color:</b> <code class=theme-l>#006638</code><code class=theme-d>#1e8a44</code></small>">
      <i class="modus-icons alert-icon" aria-hidden="true">check_circle</i>
      <div>Success! A basic success alert with a dismiss icon</div>
      <button type="button" class="close" data-dismiss="alert">
        <i class="modus-icons modus-icon notranslate">close</i>
      </button>
    </div>
    <div class="alert alert-danger fade show" role="alert"
      data-toggle="popover"
      data-html="true"
      data-placement="left"
      data-content="<small><b>background-color:</b> <code class=theme-l>#ffffff</code><code class=theme-d>#da212c80</code><br>
                           <b>border-color:</b> <code class=theme-l>#da212c</code><code class=theme-d>#da212c</code></small>">
      <i class="modus-icons alert-icon" aria-hidden="true">warning</i>
      <div>Error! A basic error alert with a dismiss icon</div>
      <button type="button" class="close" data-dismiss="alert">
        <i class="modus-icons modus-icon notranslate">close</i>
      </button>
    </div>
    <div class="alert alert-warning text-dark fade show" role="alert"
      data-toggle="popover"
      data-html="true"
      data-placement="left"
      data-content="<small><b>background-color:</b> <code class=theme-l>#ffffff</code><code class=theme-d>#fbad2680</code><br>
                           <b>border-color:</b> <code class=theme-l>#e49325</code><code class=theme-d>#fbad26</code></small>">
      <i class="modus-icons notranslate alert-icon" aria-hidden="true">warning</i>
      <div>Warning! A basic warning alert with a dismiss icon</div>
      <button type="button" class="close" data-dismiss="alert">
        <i class="modus-icons modus-icon notranslate">close</i>
      </button>
    </div>
  </div>
</div>

### Behaviors

- When applicable, dismiss by clicking the close icon.
- When dismissed or resolved, alerts slide up and fade out, relinquishing their space.

### Editorial

- Keep titles three to five words if possible.
- For titles, use title case and capitalize prepositions of four letters or more.
- Messages should tell the user what’s happening and whether they need to act to successfully keep moving through a task. Warning alerts might tell a user what could happen if they don’t address what they’re being warned about.
- For messages, use full sentences with punctuation. Use sentence case.
- Unordered lists offer a structured format to present:
  - Items needing resolution
  - Guidelines to successful completion
  - Ways to resolve problems
