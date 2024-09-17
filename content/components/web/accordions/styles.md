---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
images:
  - "/img/components/headers/accordions.png"
components: true
componentsWeb: true
bootstrapURL: "/docs/v2/components/accordions/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-accordion--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

### Default

<div class="bg-secondary bg-opacity-10 p-2 py-3 ps-5 mb-3"><br><br><br>
<div class="accordion mx-auto" id="accordionStyleExample" style="max-width: 340px">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button pe-none"
        type="button"
        style="height:48px"
        aria-expanded="true"
        aria-controls="collapseOne"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-title="Header"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius text-align user-select width">
        Accordion title
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionStyleExample">
      <div class="accordion-body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-title="Body"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius bg-color height text-align user-select width">
        Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user’s interest.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" aria-expanded="false">
        Accordion title
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionStyleExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" aria-expanded="false">
        Accordion title
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionStyleExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>
</div>

### Compact

<div class="bg-secondary bg-opacity-10 p-2 py-3 ps-5 mb-3"><br><br><br>
<div class="accordion accordion-sm mx-auto" id="accordionStyleSmallExample" style="max-width: 340px">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button pe-none"
        type="button"
        aria-expanded="true"
        aria-controls="collapseOneSmall"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-title="Header"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius text-align user-select width">
        Accordion title
      </button>
    </h2>
    <div id="collapseOneSmall" class="accordion-collapse collapse show" data-bs-parent="#accordionStyleSmallExample">
      <div class="accordion-body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-title="Body"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="b-radius bg-color height text-align user-select width">
        Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user’s interest.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" aria-expanded="false">
        Accordion title
      </button>
    </h2>
    <div id="collapseTwoSmall" class="accordion-collapse collapse" data-bs-parent="#accordionStyleSmallExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" aria-expanded="false">
        Accordion title
      </button>
    </h2>
    <div id="collapseThreeSmall" class="accordion-collapse collapse" data-bs-parent="#accordionStyleSmallExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>
</div>

- Accordions can display directly on the page or in a card container.
- The arrow icon acts as an affordance to indicate the functionality of the accordion and as a visual marker of the state of the accordion through its rotation and direction.
- When stacking multiple accordions, use stack space constants to add margin-bottom to the block element.

<table class="table border">
  <tr>
    <td scope="col">
      <div class="accordion mx-auto" id="accordionStyleExample2">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
        Accordion item #1
      </button>
    </h2>
    <div id="collapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionStyleExample2">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
        Accordion item #2
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionStyleExample2">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
        Accordion item #3
      </button>
    </h2>
    <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionStyleExample2">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
</div>
      </div>
    </td>
    <td scope="col" class="w-50">
<div class="accordion border mx-auto" id="accordionStyleExample3" style="max-width: 500px">
  <div class="accordion-item border">
    <h2 class="accordion-header border-bottom">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
        Accordion item #1
      </button>
    </h2>
    <div id="collapseOne3" class="accordion-collapse collapse show" data-bs-parent="#accordionStyleExample3">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div class="accordion-item border">
    <h2 class="accordion-header border-bottom">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
        Accordion item #2
      </button>
    </h2>
    <div id="collapseTwo3" class="accordion-collapse collapse" data-bs-parent="#accordionStyleExample3">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div class="accordion-item border">
    <h2 class="accordion-header border-bottom">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
        Accordion item #3
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" data-bs-parent="#accordionStyleExample3">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
    </td>
  </tr>
  <tr>
    <td class="do p-2">
      <strong class="text-success">Do </strong>use the without border variation
      to omit the border from the first accordion in a stack when it may
      conflict with other visual elements, like a Module Container.
    </td>
    <td class="dont p-2 align-top">
      <strong class="text-danger">Don’t </strong>use an unnecessary border to
      avoid visual noise.
    </td>
  </tr>
</table>

### Colors

<!-- prettier-ignore-start -->
| Element | Property                        | Color                                                                                  |
| ------- | ------------------------------- | -------------------------------------------------------------------------------------- |
| Button  | Color                           | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff">}}  |
|         | Color (Disabled)                | {{< color-preview nameL="Gray 2" hexL="e0e1e9" nameD="White" hexD="#ffffff" >}}        |
|         | Background                      | {{< color-preview nameL="White" hexL="#ffffff" nameD="Trimble Gray" hexD="#252a2e" >}} |
|         | Background (Hover/Active/Focus) | {{< color-preview nameL="Gray 0" hexL="e0e1e9" nameD="Gray 8" hexD="#464b52" >}}       |
|         | Border-Bottom                   | {{< color-preview nameL="Gray 1" hexL="#cbcdd6" nameD="Gray 6" hexD="#6a6e79" >}}      |
| Icon    | Color                           | {{< color-preview nameL="Trimble Gray" hexL="#252a2e" nameD="White" hexD="#ffffff">}}  |
{class="table table-sm table-bordered border border-opacity-50"}
<!-- prettier-ignore-end -->

### Behavior

- Accordions allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or they allow for all sections to expand at the same time.
- When an accordion expands and collapses, only its height should change; its width should stay consistent.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions—that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

### Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.
