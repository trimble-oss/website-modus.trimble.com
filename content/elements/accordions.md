---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
images:
  - "/img/headers/elements/accordions.png"
components: true
aliases:
  - "/accordions.html"
contributors: ""
---

## Overview

Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user's interest.

## Usage

**Use when**

- Some content can be hidden because it is not critical to the user’s task.
- You want to declutter the interface or shorten pages to reduce scrolling when content is not crucial to read in full.
- You want to simplify a complex process.
- There are options dependent upon a prior selection.
- All options and information are not critical to see at first.
- Allowing a user to hide controls and content so they can better focus on their task.

**Don’t use when**

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a Header (coming soon).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/elements/cards/).

## Types

Accordions come in two sizes to accommodate space availability on the page or within a [Card](/elements/cards/). Default size should be used when accordions display directly in the main content container on the page. Compact size is useful, when the accordion displays within a smaller container (e.g. card) or smaller section of the page.

### Default

<div class="guide-example-block">
  <div class="guide-sample">
    <div class="accordion" id="accordionCodeExample">
      <div class="card">
        <div
          class="card-header"
          id="accordionHeadingOne"
          data-toggle="collapse"
          data-target="#codeCollapseOne"
          aria-expanded="true"
          aria-controls="codeCollapseOne"
        >
          <h6 class="mb-0">
            Collapsible Group Item #1
          </h6>
        </div>
        <div
          id="codeCollapseOne"
          class="collapse show"
          aria-labelledby="accordionHeadingOne"
          data-parent="#accordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="accordionHeadingTwo"
          data-toggle="collapse"
          data-target="#codeCollapseTwo"
          aria-expanded="false"
          aria-controls="codeCollapseTwo"
        >
          <h6 class="mb-0">
            Collapsible Group Item #2
          </h6>
        </div>
        <div
          id="codeCollapseTwo"
          class="collapse"
          aria-labelledby="accordionHeadingTwo"
          data-parent="#accordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="accordionHeadingThree"
          data-toggle="collapse"
          data-target="#codeCollapseThree"
          aria-expanded="false"
          aria-controls="codeCollapseThree"
        >
          <h6 class="mb-0">
            Collapsible Group Item #3
          </h6>
        </div>
        <div
          id="codeCollapseThree"
          class="collapse"
          aria-labelledby="accordionHeadingThree"
          data-parent="#accordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>

### Compact

<div class="guide-example-block">
  <div class="guide-sample">
    <div class="accordion accordion-sm" id="smallAccordionCodeExample">
      <div class="card">
        <div
          class="card-header"
          id="smallAccordionHeadingOne"
          data-toggle="collapse"
          data-target="#smallCodeCollapseOne"
          aria-expanded="true"
          aria-controls="smallCodeCollapseOne"
        >
          <h6 class="mb-0">
            Collapsible Group Item #1
          </h6>
        </div>
        <div
          id="smallCodeCollapseOne"
          class="collapse show"
          aria-labelledby="smallAccordionHeadingOne"
          data-parent="#smallAccordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="smallAccordionHeadingTwo"
          data-toggle="collapse"
          data-target="#smallCodeCollapseTwo"
          aria-expanded="false"
          aria-controls="smallCodeCollapseTwo"
        >
          <h6 class="mb-0">
            Collapsible Group Item #2
          </h6>
        </div>
        <div
          id="smallCodeCollapseTwo"
          class="collapse"
          aria-labelledby="smallAccordionHeadingTwo"
          data-parent="#smallAccordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="smallAccordionHeadingThree"
          data-toggle="collapse"
          data-target="#smallCodeCollapseThree"
          aria-expanded="false"
          aria-controls="smallCodeCollapseThree"
        >
          <h6 class="mb-0">
            Collapsible Group Item #3
          </h6>
        </div>
        <div
          id="smallCodeCollapseThree"
          class="collapse"
          aria-labelledby="smallAccordionHeadingThree"
          data-parent="#smallAccordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<br>

## Specifications

**Default**

- Header Font: Open Sans Semibold 16px
- Body Font: Open Sans Regular 14px
- Horizontal Padding: 4px
- Collapsed Height: 48px

**Compact**

- Header Font: Open Sans Semibold 14px
- Body Font: Open Sans Regular 12px
- Horizontal Padding: 4px
- Collapsed Height: 32px

<div class="bg-light p-2">
<div class="guide-example-block bg-light my-3 pr-5">
  <div class="guide-content-sample anatomy-display-container">
    <div class="accordion bg-white" id="accordionExample">
      <div class="card" style="overflow: unset">
        <div
          class="card-header anatomy-display-static"
          data-anatomy-colors="false"
          id="headingOne"
          data-toggle="collapse"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h5 class="mb-0">
            Accordion Title
          </h5>
        </div>
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="headingTwo"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <h5 class="mb-0">
            Accordion Title
          </h5>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            High life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="headingThree"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <h5 class="mb-0">
            Accordion Title
          </h5>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            Non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

- Accordions can display directly on the page or in a card container.
- The arrow icon acts as an affordance to indicate the functionality of the accordion and as a visual marker of the state of the accordion through its rotation and direction.
- When stacking multiple accordions, use stack space constants to add margin-bottom to the block element.

<table class="table-bordered bg-white">
  <tr>
    <td scope="col">
      <div class="accordion" id="accordionCodeExample">
        <div class="card">
          <div
            class="card-header"
            id="headingOne"
            data-toggle="collapse"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionCodeExample"
          >
            <div class="card-body">
              high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
            </div>
          </div>
        </div>
        <div class="card">
          <div
            class="card-header"
            id="headingTwo"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionCodeExample"
          >
            <div class="card-body">
              high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
            </div>
          </div>
        </div>
        <div class="card">
          <div
            class="card-header"
            id="headingThree"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionCodeExample"
          >
            <div class="card-body">
              high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
            </div>
          </div>
        </div>
      </div>
    </td>
    <td scope="col">
      <div class="accordion" id="accordionCodeExample">
        <div class="card">
          <div
            class="card-header border-top"
            id="headingOne"
            data-toggle="collapse"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionCodeExample"
          >
            <div class="card-body">
              high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
            </div>
          </div>
        </div>
        <div class="card">
          <div
            class="card-header"
            id="headingTwo"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionCodeExample"
          >
            <div class="card-body">
              high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
            </div>
          </div>
        </div>
        <div class="card">
          <div
            class="card-header border-bottom"
            id="headingThree"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionCodeExample"
          >
            <div class="card-body">
              high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor.
            </div>
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

### Behavior

- Accordions can allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or it can allow for all sections to expand at the same time.
- When an accordion expands and collapses only its height should change; its width should stay consistent.
- Expand-and-collapse functionality should never be triggered on hover.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element, with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions—that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

### Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.

### Accessibility

- Availability of accordion content to assistive technology requires the use of `aria-controls` and toggling `aria-expanded` as regions are expanded and collapsed.
- Each accordion header must have a unique title that clearly describes the accordion panel content so that assistive technology users have the necessary information to efficiently navigate the content without having to expand every section. The title of each accordion header should include the attribute `role="button"`.
- Each accordion header `button` is wrapped in an element with role `heading` that has a value set for `aria-level` that is appropriate for the information architecture of the page.
  - If the native host language has an element with an implicit `heading` and `aria-level`, such as an HTML heading tag, a native host language element may be used.
  - The `button` element is the only element inside the `heading` element. That is, if there are other visually persistent elements, they are not included inside the `heading` element.
- If the accordion panel associated with an accordion header is visible, the header `button` element has `aria-expanded` set to `true`. If the panel is not visible, `aria-expanded` is set to `false`.
- The accordion header `button` element has `aria-controls` set to the ID of the element containing the accordion panel content.
- If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header `button` element has `aria-disabled` set to `true`.
- "Enter" or "Space" key should expand and collapse headers. "Tab" key moves focus to the next focusable element; all focusable elements in the accordion should be included in the page tab sequence. "Shift" + "Tab" moves focus to the previous focusable element.
- Avoid keyboard traps when adding components to the accordion panel. For example, the user expands an accordion, but is unable to tab to the next focusable element.
- Although the accordion element passes accessibility testing, content authors need to ensure the content that is added to the accordion is accessible. For example, if you add an image to the accordion header or panel you need to include alternative text to pass accessibility testing.

{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0   | Spacing and typography adjustments.  | E. Gunther     |
{{</ whats-changed-table >}}
