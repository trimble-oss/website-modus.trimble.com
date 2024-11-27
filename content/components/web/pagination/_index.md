---
title: "Pagination"
layout: "single"
description: "Pagination affords navigation between pages of content, and it highlights the page currently in view."
components: true
componentsWeb: true
images:
  - "/img/components/headers/pagination.png"
BootstrapURL: "/docs/v2/components/pagination/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-pagination--default"
aliases:
  - "/components/pagination/"
tags: [usage]
---

## Overview

Pagination allows the user to easily find and navigate through large amounts of content and breaks up content into multiple pages.

<div class="guide-example-block bg-secondary bg-opacity-10 p-4 pb-2 text-center">
  <nav class="text-center w-100 mx-auto ps-md-3">
    <ul class="pagination ps-sm-3">
      <li class="page-item">
        <a class="page-link p-1" href="#" aria-label="Previous">
          <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-left"></use></svg>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link p-1" href="#" aria-label="view more">
          <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"> 3 </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"> 4 </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">5 <span class="sr-only visually-hidden">(current)</span></a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"> 6 </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"> 7 </a>
      </li>
      <li class="page-item">
        <a class="page-link p-1" href="#" aria-label="view more">
          <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link p-1" href="#" aria-label="Next">
          <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-right"></use></svg>
        </a>
      </li>
    </ul>
  </nav>
</div>

## Usage

#### Use when

- Amount of content will take a long time to load/render.
- If you want to browse the data by navigating through pages.
- A table contains more than 30 items.
- A page contains enough content to justify breaking it into smaller chunks to improve a user’s experience.

#### Don't use when

- Using lazy load to load content as the user scrolls.
