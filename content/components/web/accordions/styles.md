---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
images:
  - "/img/components/headers/accordions.png"
components: true
componentsWeb: true
bootstrapURL: "/components/accordions/"
reactBootstrapURL: "/components/accordions/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-accordion--default"
tags: [styles]
---

## Specifications

**Default**

- Header Font: Open Sans Semibold 16px {{< color-preview hexL="#252A2E" hexD="#f1f1f6" >}}
- Body Font: Open Sans Regular 14px {{< color-preview hexL="#252A2E" hexD="#f1f1f6" >}}
- Horizontal Padding: 4px
- Collapsed Height: 48px

**Compact**

- Header Font: Open Sans Semibold 14px
- Body Font: Open Sans Regular 12px
- Horizontal Padding: 4px
- Collapsed Height: 32px

<div class="bg-light p-2">
<div class="guide-example-block bg-light my-3" style="padding-right: 5rem">
  <div class="guide-content-sample anatomy-display-container" style="padding-left: 180px;">
    <div class="accordion bg-white" id="accordionExample">
      <div class="card" style="overflow: unset">
        <div
          class="card-header anatomy-display-static"
          data-anatomy-colors="false"
          id="headingOne"
          data-toggle="collapse"
          aria-expanded="true"
          aria-controls="collapseOne"
          data-content="<small><b>font-size:</b> 16px<br><b>font-weight:</b> 600<br></small>"
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
          <div class="card-body anatomy-display-static">
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
            aria-controls="collapseOne">
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionCodeExample">
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
            aria-controls="collapseTwo">
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionCodeExample">
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
            aria-controls="collapseThree">
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionCodeExample">
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
            aria-controls="collapseOne">
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionCodeExample">
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
            aria-controls="collapseTwo">
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionCodeExample">
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
            aria-controls="collapseThree">
            <h6 class="mb-0">
              Accordion Title
            </h6>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionCodeExample">
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

- Accordions allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or they allow for all sections to expand at the same time.
- When an accordion expands and collapses, only its height should change; its width should stay consistent.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions—that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

### Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.
