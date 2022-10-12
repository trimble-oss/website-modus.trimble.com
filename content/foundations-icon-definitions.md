---
title: "Icon Definitions"
layout: "single"
description: "Trimble guidelines of how to use and design icons."
foundations: true
url: "/foundations/icon-definitions/"
---

<style>
main img {
  background-color: #fff;
}
</style>

## Overview

Icons are visual symbols representing tools, functions, or content. They quickly communicate ideas or messages through metaphors, draw attention to important information, and are key to usability and intuitive navigation. They can be interactive or informational. In many cases, text labels may be necessary instead of or in addition to unclear or potentially ambiguous icons.

Based on the metaphor they reflect, icons can be divided into three categories ([Jacob Nielsen](https://www.nngroup.com/articles/classifying-icons/)):

{{% img src="/img/icons-samples.svg" height="100" width="300" alt="icons" %}}

**Resemblance** icons are the symbols directly depicting a physical object the icon represents. Examples include the magnifier for search, the shopping cart, or the envelope for mail. In order for these icons to be easily recognizable, they need to look like the object they intend to represent.

**Reference** icons are the symbols depicting an object on the basis of analogy. For instance, a picture of scissors to represent cutting. For reference icons to be successful, the two concepts being linked need to be sufficiently closely related so that the users understand the reference.

**Arbitrary** icons do not have direct connections with the objects and their recognizability is based solely on convention and power of habit. For example, the question mark denoting “help.” These icons are the hardest for users to learn unless they are widely used and recognized.

## Scope

These guidelines are intended to be for only desktop, mobile, and web apps. Future releases of Modus will include additional guidance.

## Icon Types

Trimble uses different types of icons to portray relevant information or functionality. Icons can be interactive or informational. Interactive icons have hover and active states. Informational icons (charms) usually provide redundant images that reinforce the meaning of adjacent text in order to provide clarity to the user. They are not interactive and have no hover or active states: hovering or clicking on them does nothing. When using both interactive and informational icons in the same interface, it is best to provide a visual distinction between them, so the user knows which icons he/ she can interact with.

**Utility**: icons that represent actions a user can perform on a given screen within the interface (e.g. save, download, edit).

**Object**: custom or product-specific icons representing objects in the real world the user can manipulate within the interface (e.g. steal beam, tractor, bus).

**Doctype**: icons that represent the type of file available for preview, upload, or download (e.g.. pdf, video, txt).

## Design Principles

- **Legible**: draw from resemblance (likeness to physical objects), reference (representative of concept), and/or arbitration (conventionally defined meaning) to communicate a concept or action, quickly.
- **Scalable**: clarity should not be compromised, and an icon’s meaning should translate throughout various sizes and cultural representations.
- **Balanced**: optically align elements of an icon to create balance of visual weight.
- **Unified**: maintain consistency of stroke, fill, and sizing.
- **Simple**: focus on designing to the minimal characteristics of objects by leveraging geometric shapes.
- **Approachable**: consider communicating the brand’s tone and expression by creating positive, emotive connections.

## Icon Anatomy, Sizes, and Design Considerations

Trimble uses **both solid and line icons**. The choice should be consistent throughout the product. Be careful when using both solid and line icons within one UI: make sure that the use is deliberate, context-dependent, and logical. For example, you may use line icons to identify interactive icons and solid icons as charms or purely informational icons that are not clickable. For most products line icons are preferred. For in-cab software or products used outdoors and/or with heavy gloves, solid icons are better for usability.

The cornerstones of consistent icons:

- **Canvas Size**: pixel space for design of the icon (e.g. Adobe Illustrator artboard). **Primary icon size is 32 x 32 px**. If the icon glyph has any other shape than a circle or a square, the glyph should be centered on the canvas (avoiding being placed on half-pixels).
- **Stroke Weight**: outlines of the icon. For legibility, Trimble icons maintain a stroke weight of 2px at the 32 x 32px size. Generally, spacing between two strokes should not be less than the stroke weight. The stroke weights resize accordingly based on the size of the icon (see table below).
- **Corner Radius**: the radius of the circle created by extending the corner arc to form a complete circle. The corner radius of the icon glyph should be 2px at the 32 x 32px size and should resize accordingly.
- **Padding**: Padding is defined as negative space around the symbol **inside** of the canvas. Padding is used to help optically size icons and should not be used to scale icons within a container.
- **Optical Sizing**: Icons should be designed to include overshoot for optical sizing. For example, a circle icon sized at 32 x 32 px will appear smaller next to a square icon of the same dimensions. The square icon should be sized down to 30x30 px in order to appear visually balanced with the circular icon. See grid below.
- **Margin**: negative space around the symbol **outside** of the canvas that contributes to the tap target area. Margins around icons may vary depending on the size of the icon and the UI platform. On web and mobile platforms the size of the margin of the icon should result in a tap target no smaller than 48px (see “Mobile Tap Targeting” below).

{{% img src="/img/icon-grid.svg" height="200" width="200" alt="icon grid" %}}

There are a few options for icon sizes that you can choose based on your product, the context in which they are used, digital platform, and/ or user preferences. Use no more than 2-3 sizes in one application.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Canvas Size/ Icon Size</th>
      <th>Stroke Weight</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">12x12 - 14x14px</td>
      <td>1px</td>
      <td>Used as charms in browsers, dropdowns, tablets, etc.</td>
    </tr>
    <tr>
      <td scope="row">16x16px</td>
      <td>1px</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td scope="row">24x24px</td>
      <td>1-2px</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td scope="row"><strong>32x32px</strong></td>
      <td><strong>2px</strong></td>
      <td><strong>Primary icon size</strong></td>
    </tr>
    <tr>
      <td scope="row">48x48px</td>
      <td>3px</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td scope="row">64x64px</td>
      <td>4px</td>
      <td>Use for program logos, toolbars</td>
    </tr>
    <tr>
      <td scope="row">96x96px</td>
      <td>6px</td>
      <td>Usually thumbnails, web charms, etc.</td>
    </tr>
  </tbody>
</table>

Other design considerations:

- All icons should be unique and not redundant with any existing icons in the system (search the library first for keywords associated with the proposed new icon to make sure it’s not already represented).
- Always design on grid: avoid half-pixel stroke to ensure crisp and high quality scaling.
- To keep angle consistent, it is recommended to keep diagonal lines on a 45 or 25 degree angle, if possible.
- To ensure exchangeability of vector code, stroke should be converted to outline stroke.
  Icons cannot change from solid to line or line to solid when changing states.
- All icons should comply with our [accessibility guidelines](/foundations/accessibility).

## Mobile Tap Targeting

When designing for mobile, space around each icon (margin), should allow for a **tap target of at least 48px** for ease of selection and error prevention. The tap target size will depend on the context of use: for example, if the app is used when the user is moving and/ or wearing gloves, targets will be more difficult to hit as precise manipulation is not going to be possible. Consider making the tap target bigger to allow more room for error.

## Colors

Icons should appear in a single color with no background shape, and should be high contrast. All icons should meet [accessibility standards](/foundations/accessibility). Web Content Accessibility Guidelines factor in font size and contrast for determining accessibility.

Generally speaking, color should be avoided and icon sets should be designed to appear neutral. They can be two-tone with the use of transparency to make the fill lighter. Some icons may be required to be reversed out for health and human safety, particularly in the case of field hardware. If an icon or indicator cannot be designed using a single color, please follow the below guidelines. If integrating color, never use it as the sole differentiator between functions (e.g. addition or subtraction icon).

## Add-Ons & Indicators

Add-ons and indicators provide more specificity to a standard icon or indicate an action a user can perform directly related to the action of the icon proper (e.g. add, remove, alert, close, etc.). The add-on icons always appear in a solid circle, ¼ of the icon’s size, in the bottom right corner. On a 32 x 32px canvas, the circle measures 16px in diameter with a 2-pixel margin, flush with the edges of the canvas. The stroke weight of the glyph within the add-on is 2px and the padding is 2px.

{{% img src="/img/guide/addon.png" height="200" width="200" alt="icon grid" %}}

Indicators appear in the upper right corner of the icon and usually represent an alert or notification related to the icon’s meaning. On a 32 x 32px canvas the indicator measures 8px in diameter flush with the edges of the canvas.

{{% img src="/img/guide/indicator.png" height="200" width="200" alt="indicator" %}}

## Accessibility

### Text Alternatives

Providing a textual alternative for images is the first principle of web accessibility. Alternative text can be presented as an alt attribute of the icon, a label, or as the context or surroundings of the image. It serves several functions:

- It is read by screen readers in place of images allowing the content and function of the image to be accessible to those with visual or certain cognitive disabilities.
- It is displayed in place of the image in browsers if the image file is not loaded or when the user has chosen not to view images.
- It provides a semantic meaning and description to images which can be read by search engines or be used to later determine the content of the image from page context alone.

**Every image must have an alt attribute.** This is a requirement of HTML standard (with a few exceptions in HTML5). Images without an alt attribute are likely inaccessible.

The alt attribute should:

- Be **accurate and equivalent** in presenting the same content and function of the image.
- **Be succinct**. Correct content (if there is content) and function (if there is a function) of the image should be presented as succinctly as is appropriate. Typically no more than a few words are necessary.
- **NOT be redundant** or provide the same information as text within the context of the image.
- **NOT use the phrases “icon of …,” "image of ..." or "graphic of ..." to describe the icon.** It is usually apparent to the user that it is an icon.
- **NOT describe the icon as a link.** Screen readers already identify links. To use the phrase “link to ... “ would be redundant.

In some cases, icons may be given **an empty or null alt attribute** (i.e., alt=""). The null alt attribute is appropriate when:

- The icon is merely decorative and doesn’t convey additional content or function.
- An icon label is provided as part of the icon component. If the icon has both alt text and a label, the screen reader will read it twice.

### Recognizability

Icons need to be simple, and they need to be easily understood. They almost always require familiarity in order to be useful. Also, they run the risk of being misunderstood especially across cultures. For icons to be successful for communicating information and navigation, they must be well-designed, easy to understand, and used consistently.

**Do not use one icon to represent two different actions. Do not use two different icons to represent the same action.**

### Color & Contrast

As with text, icons must meet the minimum contrast requirements. WCAG 2.1 requires a contrast ratio of **at least 3:1 for graphics and user interface components** (such as icons). Icons smaller than 32x32 pixels should aim for the highest possible contrast to meet WCAG AAA requirements (7:1 contrast ratio).

### Pixelation of Enlarged Images

Some users with low vision use programs that enlarge the elements on their screen so that they can more easily see them. When images are enlarged, they can become pixelated and more difficult to read. Whenever possible, use vector icons (.svg, .xaml) rather than bitmaps (.gif, .png, .ico, .bmp).

### Animations & Transitions

As a rule, do not use animated icons. In rare circumstances an icon might need to be animated in order to enhance usability. If an icon must be animated, the animation should be user controlled or very short in duration. Images that continually animate can cause the rest of the page to be more difficult, or for users with very high levels of distractibility, completely inaccessible. [WCAG 2.0 Success Criterion 2.2.2 (Level A)](https://webaim.org/standards/wcag/checklist#sc2.2.2) requires that automatically moving, blinking, or scrolling content that lasts longer than 5 seconds can be paused, stopped, or hidden by the user.

In web and mobile applications, icons can have subtle transitions when changing state on hover or click. Transitions should be short in duration.

## Icon File Formats

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Technology</th>
      <th width="118">File Format</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Vector</td>
      <td>.svg<br>.xaml<br>.ttf<br>.pdf</td>
      <td>.svg is the preferred format. Some technologies such as WPF do no support the use of .svg thus conversion to .xaml code is needed. </td>
    </tr>
    <tr>
      <td scope="row">Bitmap</td>
      <td>.png<br>.gif</td>
      <td>Avoid bitmap formats to ensure best quality.</td>
    </tr>
  </tbody>
</table>

**Note!** Source files exist as vector graphics (Adobe Illustrator .ai, .pdf, .sketch) and can be exported to common vector and pixel graphic formats. If pixel graphics are still used in the UI, the source file should already be scaled and retouched as a vector accordingly, not as a pixel graphic.

## Contribution Process

Can’t find an icon you are looking for? Follow the design principles, specifications, sizing, and file formats outlined above and [submit](/community/contribute/) the icon to Modus to be added to the library.

{{< whats-changed-table >}}

| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0 | Icons and icon usage defined to be consistent. | S. Kaukonen, T. Manham, M. Heighway, S. Bali, K. Ponpandian, S. Nielsen |

{{</ whats-changed-table >}}
