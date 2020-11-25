---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
aliases:
  - "/tabs.html"
---

## Overview

Tabs serve as a form of navigation between related content.

## Usage

**Use when**

- You want to quickly switch between sibling views underneath a larger organizing principle/context.
- You want to organize content into meaningful sections that occupy less screen space.
- Add visual consistency.

<table class="table table-bordered bg-white">
  <tr>
    <td>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active show"
            id="firstTab"
            data-toggle="tab"
            href="#first"
            role="tab"
            aria-controls="first"
            aria-selected="true"
            >Dogs</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="secondTab"
            data-toggle="tab"
            href="#second"
            role="tab"
            aria-controls="second"
            aria-selected="false"
            >Cats</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="thirdTab"
            data-toggle="tab"
            href="#third"
            role="tab"
            aria-controls="third"
            aria-selected="false"
            >Birds</a
          >
        </li>
      </ul>
      <div class="tab-content py-3" id="myTabContent">
        <div
          class="tab-pane fade active show"
          id="first"
          role="tabpanel"
          aria-labelledby="first-tab"
        >
          <ul class="m-0">
            <li>
              Beagle
            </li>
            <li>
              Bloodhound
            </li>
            <li>
              Maltese
            </li>
            <li>
              Shih Tzu
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="second"
          role="tabpanel"
          aria-labelledby="second-tab"
        >
          <ul class="m-0">
            <li>
              Burmese
            </li>
            <li>
              Siamese
            </li>
            <li>
              Sphynx
            </li>
            <li>
              Snowshoe
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="third"
          role="tabpanel"
          aria-labelledby="third-tab"
        >
          <ul class="m-0">
            <li>
              Parrot
            </li>
            <li>
              Pigeon
            </li>
            <li>
              Chicken
            </li>
            <li>
              Raven
            </li>
          </ul>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly horizontally, at the top edge. When a tabbed interface is initialized, one tab panel is always displayed.
    </td>
  </tr>
</table>

**Don't use when**

- You need primary means of navigation.
- Grouping unrelated content.
- You want to organize content that needs to be seen by the user at the same time.
- You want to hide primary user action element.
- You want to hide critical content.

## Specifications

<div class="guide-example-block my-3 py-4 bg-light">
  <div class="guide-content-sample anatomy-display-container">
    <ul class="nav nav-tabs mb-5 py-4">
      <li class="nav-item">
        <a class="nav-link active anatomy-display-static" href="#">Default</a>
      </li>
    </ul>
    <ul class="nav nav-tabs mb-5">
      <li class="nav-item">
        <a class="nav-link hover text-decoration-none anatomy-display-static" href="#">Hover</a>
      </li>
    </ul>
    <ul class="nav nav-tabs nav-tabs-sm py-4">
      <li class="nav-item">
        <a
          class="nav-link active anatomy-display-static"
          href="#"
          data-anatomy-colors="false"
          >Small</a
        >
      </li>
    </ul>
  </div>
</div>

- Tabs should always be placed on top of the content they represent.
- Tabs differ from primary forms of navigation, such as Navbars, in that they are considered to be related to each other (i.e. types of media, genres of music, etc…)
- Users shouldn’t need to simultaneously see content from multiple tabs.
- The currently selected tab should be appropriately highlighted.
- Always have one tab pre-selected.
- Tabs should be easy to scan and thus should have short, meaningful labels or icons. Avoid long text labels that don’t truncate or wrap.
- Labels should either be all text or all icons, not both intermixed.
- Avoid nesting tabs.
- Make unselected tabs visible to avoid potentially hiding features/content from the user.
- Maintain consistency by not removing tabs when their function is unavailable. Instead offer an explanation as to why a tab’s content is unavailable and present the user with an action to remedy it.
- Always arrange tabs in an order that makes sense for the user.

### Behaviors

- Try to organize tabs so that the most relevant, pre-selected tab is also the leftmost tab.
- When clicked, tabs should transition between views and highlight the selected tab.
- Disabled tabs should have a reduced opacity, not have hover styles, and not be interactive.
- Tab content should not disrupt the overall page layout in ways that negatively impact user experience.
- At a smaller screen size, the tabs collapse into a dropdown.

### Editorial

- Tab labels should be in all uppercase.
- Avoid tab labels that contain more than 2 words.
- Avoid truncating tab labels.

### Accessibility

- The element that serves as the container for the set of tabs has role `tablist`.
- Each element that serves as a tab has role `tab` and is contained within the element with role `tablist`.
- Each element that contains the content panel for a `tab` has role `tabpanel`.
- If the tab list has a visible label, the element with role `tablist` has `aria-labelledby` set to a value that refers to the labelling element. Otherwise, the `tablist` element has a label provided by `aria-label`.
- Each element with role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
- The active `tab` element has the state `aria-selected` set to `true` and all other `tab` elements have it set to `false`.
- Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.
- If a `tab` element has a pop-up menu, it has the property `aria-haspopup` set to either `menu` or `true`.
- If the `tablist` element is vertically oriented, it has the property `aria-orientation` set to `vertical`. The default value of `aria-orientation` for a tablist element is horizontal.
- When focus moves into the tab list, focus is placed on the active tab element. When the tab list contains the focus, focus moves to the next element in the page tab sequence outside the tablist, which is typically either the first focusable element inside the tab panel or the tab panel itself.

<style>
.popover,
.bs-popover-left {
  margin-left: -5rem !important;
}
</style>
