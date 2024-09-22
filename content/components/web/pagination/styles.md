---
title: "Pagination"
layout: "single"
description: "Pagination affords navigation between pages of content, and it highlights the page currently in view."
components: true
componentsWeb: true
images:
  - "/img/components/headers/pagination.png"
bootstrapURL: "/docs/v2/components/pagination/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-pagination--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" height="175">Small</th>
      <td class="text-center mx-auto py-2">
        <nav aria-label="Page Navigation Example" class="pb-1">
          <ul class="pagination pagination-sm" style="font-size: 12px">
            <li class="page-item">
              <a class="page-link p-1" href="#" aria-label="Previous">
                <svg width="16" height="16" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-left"></use></svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link p-1" href="#" aria-label="view more">
                <svg width="16" height="16" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
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
                <svg width="16" height="16" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link p-1" href="#" aria-label="Next">
                <svg width="16" height="16" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-right"></use></svg>
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Page Navigation Example" class="mb-5">
          <ul class="pagination pagination-sm m-0 mt-5">
            <li class="page-item">
              <a href="#" class="page-link pe-none"
              data-bs-placement="right"
              data-bs-toggle="popover"
              data-bs-custom-class="popover-css-inspector"
              data-css-inspector-hide="b-color text-align"
              style="border-radius: 4px;">
               1
              </a>
            </li>
          </ul>
        </nav>
      </td>
    </tr>
    <tr>
      <th scope="row" height="165">Default</th>
      <td class="text-center mx-auto py-3">
        <div>
          <nav aria-label="..." class="mx-auto mb-2">
            <ul class="pagination">
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
          <div class="mt-3 pt-2">
          <nav aria-label="Page Navigation Example" class="mb-5 mt-5">
            <ul class="pagination m-0 mt-5">
              <li class="page-item">
                <a href="#" class="page-link pe-none"
                data-bs-placement="right"
              data-bs-toggle="popover"
              style="width: 32px; height: 32px; border-radius: 4px;"
              data-bs-custom-class="popover-css-inspector"
              data-css-inspector-hide="b-color text-align">1</a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row" height="165">Large</th>
      <td class="text-center mx-auto py-2">
        <nav aria-label="Large Pagination Example">
          <ul class="pagination pagination-lg" data-anatomy-colors="false" style="font-size: 20px">
            <li class="page-item">
              <a class="page-link px-2" href="#" aria-label="Previous">
                <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-left"></use></svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link px-2" href="#">
                <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#"> 3 </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#"> 4 </a>
            </li>
            <li class="page-item">
              <a class="page-link px-2" href="#">
                <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link px-2" href="#" aria-label="Next">
                <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-right"></use></svg>
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Page Navigation Example" class="mb-5">
          <ul class="pagination pagination-lg m-0 mt-5">
            <li class="page-item">
              <a href="#" class="page-link pe-none"
              data-bs-placement="right"
              data-bs-toggle="popover"
              style="width: 48px; height: 48px;"
              data-bs-custom-class="popover-css-inspector"
              data-css-inspector-hide="bc text-align hide-us"
              >1</a>
            </li>
          </ul>
        </nav>
      </td>
    </tr>
  </tbody>
</table>

<br>

- Use no arrows when number of pages is eight or fewer.
- Display a maximum interval of eight pages at a time.
- Single caret icon increments by one page.
- Double caret icon jumps to the first or last page.
- Distinctive highlight for current page.

### Behaviors

- Disable the first and previous arrow icons (and their labels) when the first page is selected.

<div class="guide-example-block">
  <div class="guide-sample">
    <nav aria-label="Page Navigation Example">
      <ul class="pagination m-0">
        <li class="page-item disabled">
          <a class="page-link p-1" href="#" aria-label="Previous">
            <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-left"></use></svg>
          </a>
        </li>
        <li class="page-item disabled">
          <a class="page-link p-1" href="#">
            <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            4
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#"
            >5 <span class="sr-only visually-hidden">(current)</span></a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            6
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            7
          </a>
        </li>
        <li class="page-item">
          <a class="page-link p-1" href="#">
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
</div>

<br>

- Disable the next and last arrow icons (and their labels) when the last page is selected.

<div class="guide-example-block">
    <nav aria-label="Page Navigation Example">
      <ul class="pagination m-0">
        <li class="page-item">
          <a class="page-link p-1" href="#" aria-label="Previous">
            <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-left"></use></svg>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link p-1" href="#">
            <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#"
            >5
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            6
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">
            7 <span class="sr-only visually-hidden">(current)</span>
          </a>
        </li>
        <li class="page-item disabled">
          <a class="page-link p-1">
            <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#more-horizontal"></use></svg>
          </a>
        </li>
        <li class="page-item disabled">
          <a class="page-link p-1">
            <svg width="24" height="24" fill="currentcolor"><use xlink:href="/modus-icons.svg#chevron-right"></use></svg>
          </a>
        </li>
      </ul>
    </nav>
</div>
