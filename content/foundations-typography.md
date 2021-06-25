---
title: "Typography"
layout: "single"
description: "The purpose of typography is to make content legible, readable, and visually appealing."
foundations: true
aliases:
  - "/text.html"
  - "/typography.html"
url: "/foundations/typography/"
---

## Font Family

For Web and mobile user interfaces, Trimble uses <a href="https://fonts.google.com/specimen/Open+Sans">Open Sans</a>, a humanist sans-serif typeface with excellent legibility characteristics and friendly appearance. Open Sans supports ISO Latin 1, Latin CE, Greek and Cyrillic character sets. For internationalization, support is included for RTL (right-to-left) languages. Asian Syllabic, Abjad, Indic and other script languages will be supported by sans-serif system font.

For Windows desktop applications, Trimble uses Segoe UI as its primary interface font.

**Translated Text:** When dealing with translated text for character sets other than Latin, Greek, Cyrillic please use <a href="https://www.google.com/get/noto">Noto</a> as an option that will cover over 98 languages.

**Falling Back to System Fonts**

We understand that there are a myriad of reasons why it may be a requirement to fall back to a system font for technical or performance reasons.

When falling back to a system font, please choose a font that is

- Sans Serif such as San Francisco, Helvetica or Arial
- The platform font (judgement is necessary)
  - Android = Roboto
  - iOS = San Francisco
  - Windows = Segoe UI
  - Windows Embedded Handheld = Tahoma
- Crisp and clean in its design (avoid whimsical fonts)
- Consider using similar weights, sizes, and styles to the platform being designed upon.

## Base Sizing

- Base root font size is defined as 16px (1rem).
- Base body text is sized at 14px (.875rem).
- Small body text is sized at 12px (.75rem)

## Hierarchy and Type Scale

To allow the reader to easily find what they are looking for and to aid scanning and readability, establish an order of importance within content and data. Associating the typographic style to the intent in the interface provides a visual pattern that is easy for users to skim. Hierarchical headings are also used by visually impaired users, who need the aid of a screen reader to parse written content.

The variations help keep type styles to a minimum, so consistency is easier to achieve. Too many type styles make a layout unbalanced and difficult to manage. Smaller headings cannot come before larger headings.

### Web Applications

<table class="table table-bordered bg-white">
      <thead class="thead-light">
        <tr>
          <th>Category</th>
          <th>Specifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">
          <p class="h1">
           Heading&nbsp;1
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400
            <br><strong>Size:</strong> 24 px/ 1.5 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.5
            <br><strong>Line Height:</strong> 36 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 20 px/ 30 px
            <br><strong>Use:</strong> Most popular for top level headers. Titles within large content containers.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="h2">
           Heading 2
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400
            <br><strong>Size:</strong> 20 px/ 1.25 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 30 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 18 px/ 27 px
            <br><strong>Use:</strong> Sub-sections and field group headings.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="h3">
           Heading 3
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Semibold, 600
            <br><strong>Size:</strong> 18 px/ 1.125 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 27 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 16 px/ 24 px
            <br><strong>Use:</strong> Sub-sections, card titles.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="h4">
           Heading 4
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Semibold, 600
            <br><strong>Size:</strong> 16 px/ 1 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 24 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 14 px/ 21 px
            <br><strong>Use:</strong> Sub-sections, card titles.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="h5">
           Heading 5
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Bold, 700
            <br><strong>Size:</strong> 14 px/ 0.875 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 24 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 12 px/ 18 px
            <br><strong>Use:</strong> Sub-sections, card titles.
          </td>
        </tr>
        <tr>
          <td scope="row">
            <p class="h6">
           Heading 6
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Bold, 700
            <br><strong>Size:</strong> 12 px/ 0.75 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 18 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 10 px/ 15 px
            <br><strong>Use:</strong> Sub-sections, card titles, overlines, table headings.
          </td>
        </tr>
         <tr>
          <td scope="row">
           <p class="lead web-lead">
           Lead Text
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400
            <br><strong>Size:</strong> 20 px/ 1.25 rem
            <br><strong>Case:</strong> Sentence
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 40 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 18 px/ 27 px
            <br><strong>Use:</strong>Paired with display font. Used as subtitle.</em>
          </td>
        </tr>
        <tr>
          <td scope="row">
           Body
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400; Semibold, 600; Bold, 700
            <br><strong>Size:</strong> 14 px/ 0.875 rem
            <br><strong>Case:</strong> Sentence
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 21 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 12 px/ 18 px
            <br><strong>Use:</strong> Body and paragraph style.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="small-body">
           Small Body
          </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400; Semibold, 600; Bold, 700
            <br><strong>Size:</strong> 12 px/ 0.75 rem
            <br><strong>Case:</strong> Title, Sentence
            <br><strong>Letter Spacing:</strong> 0.25
            <br><strong>Line Height:</strong> 18 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 12 px/ 18 px
            <br><strong>Use:</strong> Body and paragraph style. Table content, form labels, card captions, disclaimers, time stamps.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="web-mini">
           Mini
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400; Semibold, 600
            <br><strong>Size:</strong> 10 px/ 0.625 rem
            <br><strong>Case:</strong> Title, Sentence, All-Caps
            <br><strong>Letter Spacing:</strong> 0.5
            <br><strong>Line Height:</strong> 15 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 10 px/ 15 px
            <br><strong>Use:</strong> Captions, labels, overlines, disclaimers.
          </td>
        </tr>
      </tbody>
    </table>

### Mobile Application Scale

<table class="table table-bordered bg-white">
      <thead class="thead-light">
        <tr>
          <th>Category</th>
          <th>Specifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">
          <p class="mobile-heading-1">
           Heading 1
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular 400
            <br><strong>Size:</strong> 20 px/ 1.25 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 30 px
            <br><strong>Use:</strong> Top level headers.
        </tr>
        <tr>
          <td scope="row">
          <p class="mobile-heading-2">
           Heading 2
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular 400
            <br><strong>Size:</strong> 18 px/ 1.125 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 28 px
            <br><strong>Use:</strong> Main titles. Titles within large content containers.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="mobile-heading-3">
           Heading 3
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Semibold, 600
            <br><strong>Size:</strong> 16 px/ 1 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 24 px
            <br><strong>Use:</strong> Sub-sections and field group headings.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="mobile-heading-4">
           Heading 4
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Semibold, 600
            <br><strong>Size:</strong> 14 px/ 0.875 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 21 px
            <br><strong>Use:</strong> Sub-sections.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="mobile-heading-5">
           Heading 5
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Bold, 700
            <br><strong>Size:</strong> 12 px/ 0.75 rem
            <br><strong>Case:</strong> Title, Sentence
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 18 px
            <br><strong>Use:</strong> Sub-sections, card titles. <em>Not for in-cab apps</em>.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="mobile-heading-6">
           Heading 6
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Bold, 700
            <br><strong>Size:</strong> 10 px/ 0.625 rem
            <br><strong>Case:</strong> Title, Sentence
            <br><strong>Letter Spacing:</strong> 0.15
            <br><strong>Line Height:</strong> 15 px
            <br><strong>Use:</strong> Sub-sections, card titles, overlines. <em>Not for in-cab apps</em>.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="mobile-lead">
           Lead Text
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400
            <br><strong>Size:</strong> 18 px/ 0.175 rem
            <br><strong>Case:</strong> Sentence
            <br><strong>Letter Spacing:</strong> 0.25
            <br><strong>Line Height:</strong> 28 px
            <br><strong>Use:</strong>Paired with display font. Used as subtitle.
        </tr>
        <tr>
          <td scope="row">
          <p class="mobile-body">
           Body
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400
            <br><strong>Size:</strong> 12 px/ 0.75 rem
            <br><strong>Case:</strong> Title, Sentence
            <br><strong>Letter Spacing:</strong> 0.25
            <br><strong>Line Height:</strong> 18 px
            <br><strong>Use:</strong> Body and paragraph style.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="mobile-mini">
           Mini
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Regular, 400; Semibold, 600
            <br><strong>Size:</strong> 10 px/ 0.625 rem
            <br><strong>Case:</strong> Title, Sentence, All-Caps
            <br><strong>Letter Spacing:</strong> 0.5
            <br><strong>Line Height:</strong> 15 px
            <br><strong>Use:</strong> Captions, labels, overlines, disclaimers.
          </td>
        </tr>
      </tbody>
    </table>

### Desktop Applications Scale

<table class="table table-bordered bg-white">
      <thead class="thead-light">
        <tr>
          <th>Category</th>
          <th>Specifications</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td scope="row">
           <p class="desktop-heading-1">
           Heading 1
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 24 px
            <br><strong>Case:</strong> Title
            <br><strong>Line Height:</strong> 30 px
            <br><strong>Use:</strong> Top level headers. Use sparingly  (ie. on Welcome screen).
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-heading-2">
           Heading 2
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 20 px
            <br><strong>Case:</strong> Title
            <br><strong>Line Height:</strong> 26 px
            <br><strong>Use:</strong> File menu, start screen.
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-heading-3">
           Heading 3
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 16 px
            <br><strong>Case:</strong> Title
            <br><strong>Line Height:</strong> 20 px
            <br><strong>Use:</strong> File menu, start screen.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-heading-4">
           Heading 4
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Semibold
            <br><strong>Size:</strong> 14 px
            <br><strong>Case:</strong> Title, Sentence
            <br><strong>Line Height:</strong> 18 px
            <br><strong>Use:</strong> Start screen, dialog and window headlines.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-heading-5">
           Heading 5
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Semibold
            <br><strong>Size:</strong> 12 px
            <br><strong>Case:</strong> Title
            <br><strong>Line Height:</strong> 16 px
            <br><strong>Use:</strong> Modals, side pane and property pane headlines.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-heading-6">
           Heading 6
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Semibold
            <br><strong>Size:</strong> 11 px
            <br><strong>Case:</strong> Title
            <br><strong>Line Height:</strong> 14 px
            <br><strong>Use:</strong> Side pane, property pane.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-heading-7">
           Heading 7
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Semibold
            <br><strong>Size:</strong> 10 px
            <br><strong>Case:</strong> Title
            <br><strong>Line Height:</strong> 10 px
            <br><strong>Use:</strong> Ribbon.
          </td>
        </tr>
        <tr>
          <td scope="row">
          <p class="desktop-body-1">
           Body 1
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 14 px
            <br><strong>Case:</strong> Sentence
            <br><strong>Line Height:</strong> 20 px
            <br><strong>Use:</strong> File menu, start screen.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-body-2">
           Body 2
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 12 px
            <br><strong>Case:</strong> Sentence
            <br><strong>Line Height:</strong> 16 px
            <br><strong>Use:</strong> Back stage, start screen, dialogs.
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-body-3">
           Body 3
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 11 px
            <br><strong>Case:</strong> Sentence
            <br><strong>Line Height:</strong> 14 px
            <br><strong>Use:</strong> Dialogs if needed, side pane, property pane, tool-tips.
          </td>
        </tr>
         <tr>
          <td scope="row">
           <p class="desktop-body-4">
           Body 4
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 10 px
            <br><strong>Case:</strong> Sentence
            <br><strong>Line Height:</strong> 13 px
            <br><strong>Use:</strong> Where needed (e.g. ribbon).
          </td>
        </tr>
        <tr>
          <td scope="row">
           <p class="desktop-mini">
           Mini
           </p>
          </td>
          <td>
            <strong>Font Family:</strong> Segoe UI
            <br><strong>Font Weight:</strong> Regular
            <br><strong>Size:</strong> 9 px
            <br><strong>Case:</strong> Sentence
            <br><strong>Line Height:</strong> 11 px
            <br><strong>Use:</strong> Smallest thumbnails.
          </td>
        </tr>
      </tbody>
    </table>

## Display Headings

<table class="table table-bordered bg-white">
      <thead class="thead-light">
        <tr>
          <th>Category</th>
          <th>Specifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">
          <p class="display-h1">Display&nbsp;1
          </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Bold, 700; Semibold, 600
            <br><strong>Size:</strong> 72 px/ 4.5 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.4
            <br><strong>Line Height:</strong> 108 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 48 px/ 72 px
            <br><strong>Use:</strong> Oversized screen titles. Mostly for marketing. <em>Seldom used in product.</em>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <p class="display-h2">Display 2
          </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Bold, 700; Semibold, 600; Regular, 400
            <br><strong>Size:</strong> 40 px/ 2.5 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.4
            <br><strong>Line Height:</strong> 54 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 25 px/ 40 px
            <br><strong>Use:</strong> Oversized screen titles. Mostly for marketing. <em>Seldom used in product.</em>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <p class="display-h3">Display 3
          </p>
          </td>
          <td>
            <strong>Font Family:</strong> Open Sans
            <br><strong>Font Weight:</strong> Semibold, 600; Regular, 400
            <br><strong>Size:</strong> 32 px/ 1.875 rem
            <br><strong>Case:</strong> Title
            <br><strong>Letter Spacing:</strong> 0.283
            <br><strong>Line Height:</strong> 48 px
            <br><strong>Scale to Mobile</strong> (size/ line height): 20 px/ 30 px
            <br><strong>Use:</strong> Oversized screen titles. Mostly for marketing. <em>Seldom used in product.</em>
          </td>
        </tr>
      </tbody>
</table>

## Legibility and Readability

All text must be legible and meet [accessibility standards](/foundations/accessibility/).

### Color and Contrast

The Web Content Accessibility Guidelines (WCAG 2.0) level AA requires a 4.5:1 color contrast between text and background for **regular text** (smaller than 24 px regular or 18.5 px bold), and 3:1 for **large text** (at least 24 px regular or 18.5 px bold).

Standard text colors:

- **Trimble Gray** {{< color-preview hex="#363545">}} is the standard text color.

- **Trimble Gray** {{< color-preview hex="#363545">}} text may appear on backgrounds no darker than **Gray 4** {{< color-preview hex="#AEAEB6">}}.

- **Gray Half** {{< color-preview hex="#F9F9FB">}} text may appear on backgrounds no lighter than **Gray 8** {{< color-preview hex="#6A6976">}}.

- **Gray 8** {{< color-preview hex="#6A6976">}} text, _body text color in desktop applications_, may appear on backgrounds no darker than **Gray Light** {{< color-preview hex="#F3F3F7">}}.

Text may appear in different colors on different colored backgrounds (see [Trimble Color Palette](/foundations/color-palette/)) as long as it meets appropriate contrast ratios for WCAG 2.0 AA compliance. [Contrast Checker](https://webaim.org/resources/contrastchecker/) is one of many tools available online to help ensure appropriate contrast. [Learn more about accessibility](https://webaim.org/).

### Line Height

The Web Content Accessibility Guidelines (WCAG 2.0) level AA requires that line height is **at least 1.5 times the font size** and that spacing following paragraphs is at least 2 times the font size.

### Line Length

[Optimal line length for body text](https://baymard.com/blog/line-length-readability) is considered to be 50-75 characters. If a line of text is too long, the reader’s eyes have a hard time shifting from the end of the line to the beginning of another. If a line of text is too short, the eye will have to travel back too often breaking the reader’s rhythm. In order to keep the reader engaged and help with reading comprehension, keep text within **50-100 characters per line**.

_Line length is not always manageable since users can set their own device width. It is important to try to design for ideal line lengths under normal controls and allow for the responsive design to modify beyond normal circumstances._

![Typography Line Length Example](/img/guide/typography-line-length.svg)

### Accessibility

- **There must be at least one h1 on each page.**
- If it is unnecessary or not desirable for the h1 to display on the page, hide it from visual presentation by using `.wdn-text-hidden`. It will allow it to be still available to assistive technology and bots. **Do not hide it by using “display: none”**: it will also hide it from AT.
- Do select heading levels based on the hierarchy, not their appearance: **do not skip levels in html tag headings** (ie. `h1` to `h4`). You can skip styles of headings, as long as the html tags are not skipped and as long as hierarchy is maintained (smaller headings cannot come before larger headings).
- Do not bold text when a heading is needed.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0 | Added display fonts, fallback fonts, translated text, and desktop fonts. | M. Heighway, L. Cook, A. Eidam, E. Gunther, E. Bohn, N. Springer, G. Leuhof |
{{</ whats-changed-table >}}
