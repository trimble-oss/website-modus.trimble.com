---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
componentsWeb: true
images:
  - "/img/components/headers/tabs.png"
BootstrapURL: "/docs/v2/components/tabs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tabs--default"
aliases:
  - "/components/tabs/"
tags: [usage]
---

## Overview

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly horizontally, at the top edge. When a tabbed interface is initialized, one tab panel is always displayed.

## Usage

#### Use when

- You want to quickly switch between sibling views underneath a larger organizing principle/context.
- You want to organize content into meaningful sections that occupy less screen space.
- Add visual consistency.

<table class="table table-bordered border border-opacity-50">
  <tr>
    <td>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active show"
            id="firstTab"
            data-bs-toggle="tab"
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
            data-bs-toggle="tab"
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
            data-bs-toggle="tab"
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
              Shi Tzu
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
              Sphinx
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
</table>

#### Don't use when

- You need primary means of navigation.
- Grouping unrelated content.
- You want to organize content that needs to be seen by the user at the same time.
- You want to hide primary user action element.
- You want to hide critical content.
