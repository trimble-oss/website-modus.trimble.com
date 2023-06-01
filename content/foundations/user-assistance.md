---
title: "User Assistance"
layout: "single"
description: "Framework unifying products, establishing a standardized taxonomy, and hierarchical structure for organizing help assets."
foundations: true
---

In Trimble's pursuit of connectivity and scalability, Modus aims to harmonize the way users access help. Through various acquisitions and multiple teams working across many products it is important to strive for consistency of user assistance in help menus. This article serves to provide a comprehensive framework that will unify Trimble products, establishing a standardized taxonomy and hierarchical structure for organizing help assets.

## User Behavior

The rationale of the help hierarchy is built upon the user help journey. Following is the user help journey extrapolated from various user interviews:

{{< img src="/img/foundations/user-help-journey.svg" dark="/img/foundations/user-help-journey-dark.svg" class="w-100" width="854" height="427" alt="User Help Journey" loading="auto" >}}

Modeling the help hierarchy to the current user behavior allows users to have access to the resources they find most useful.

## Help Hierarchy

At the top level there are **six core categories** required for the help menu:

1. **Getting Started**

- Guides (written)
- Tutorials (video or wizard)

2. **Help**

- Help Site
- Guides (usually short, text-based help)
- Support articles (longer text, to replace the so-called "Knowledge Base")

3. **Community**

- Forums
- Suggestion box
- Blogs

4. **Learning**

- Demos (shorter video formats)
- Tutorials (longer video formats)
- Trimble learing
- Advanced instructions

5. **Support**

- Customer portal
- Submit a support ticket

6. **About**

Most products have help assets which fall into one of these categories. Let’s learn more about the core categories and the subcategories that fit within them.

### Getting Started

The **Getting Started** section is where written guides or video based tutorials are listed and found for users. The goal of the guides and tutorials are to show a new user how to get started with the product.

If the product does not have guides or tutorials geared towards helping a user get started, omit this category altogether.

### Help

The **Help** section is where a user will find a link to the associated help site for the product. This section can also include more links to short, text-based guides and a link to the product’s "Knowledge Base" (renamed as "Support Articles"). The guides found in this section are separate from the guides found in “Getting Started” as these guides are targeted to workflows within a product.

If the product does not have guides or a knowledge base use the “Help” category as a hyperlink to the product’s Help site. Meaning, this menu option would not have a second level navigation component.

### Community

The **Community** section is where a user will find links to the product’s community forum, suggestion box links and any blog content links associated with the product.

If the product only has one form of community content to link to, use the “Community” category as a hyperlink to that content and name the category the same as the content type. For example, if a product only has a suggestion box, instead of a “Community” category title that links to the suggestion box it will be titled “Suggestion Box”.

### Learning

The **Learning** section is where a user will find links to the product’s learning assets. The order of the assets goes from the shortest time to consume to the longest.

Demos are short videos or articles that demonstrate features or show a user how to perform tasks.

Tutorials are longer videos or articles which may detail an entire workflow.

### Support

The **Support** section is where a user will find links to the product’s support portal. This is where users can submit tickets to get help or talk to a representative of the product.

### About

The **About** section is a link to show information about their product, such as their version number.

## How to Identify Help Assets

Help assets have three core properties that can be used to identify their category:

1. Format
2. Length
3. Scope.

Understanding these properties will help in identifying the category to which a particular help asset belongs.

The **format** of the help content ranges from highly visual to text-based content. For example, video content versus a written article.

The **length** of the help content ranges from a few minutes to a few days. For example, a task-based guide for a task versus a multiple day training for a module or workflow.

The **scope** of the help content ranges from task-based to a 30,000 foot view. For example, a task-based guide versus a demo video on how a new feature functions.

To simplify the taxonomy of help content, Modus employs four core categories:

1. Guide
2. Demo
3. Tutorial
4. Training.

Each of these categories encompasses the three properties mentioned earlier.

Here is how you can use these categories and their properties to identify the appropriate name for a help asset:

- Pick a help asset
- Consider its format, length, and scope, and assign a score using a sliding scale
- Compare the scores to the visual graphics provided below. This will help determine the main category under which the help asset falls.

For example, let's consider a help asset labelled “How-To”:

- The **format** tends to be text-based.
- The **length** tends to be short.
- The **scope** tends to focus on tasks.

Based on these properties, the asset would be categorized as “Guide”.

Use the following visual graphics to help categorize help assets:

<div class="row">
  <div class="col-6">
    {{< img src="/img/foundations/help-category-guide.svg" dark="/img/foundations/help-category-guide-dark.svg" class="w-100" width="854" height="427" alt="Help category guide" loading="auto" >}}
  </div>
  <div class="col-6">
    {{< img src="/img/foundations/help-category-demo.svg" dark="/img/foundations/help-category-demo-dark.svg" class="w-100" width="854" height="427" alt="Help category demo" loading="auto" >}}
  </div>
    <div class="col-6">
    {{< img src="/img/foundations/help-category-tutorial.svg" dark="/img/foundations/help-category-tutorial-dark.svg" class="w-100" width="854" height="427" alt="Help category tutorial" loading="auto" >}}
  </div>
    <div class="col-6">
    {{< img src="/img/foundations/help-category-training.svg" dark="/img/foundations/help-category-training-dark.svg" class="w-100" width="854" height="427" alt="Help category training" loading="auto" >}}
  </div>
</div>

## Help Menu in Navbar

For products that have implemented the Modus [Navbars](/components/web/navbars/) use the help menu pattern guide to include the dropdown in the question mark icon as shown below:

{{< img src="/img/foundations/help-menu-icon-title.svg" dark="/img/foundations/help-menu-icon-title-dark.svg" class="w-100" alt="Help Menu with Icon and Supporting Text" >}}

Refer to examples of a fully implemented dropdown help menu system in the [Navbars](/components/web/navbars/) component styles section. The examples represent all six core categories. There are variations using icons, and supporting text for each category and ones that omit both. Icons and supporting text are recommended, however if the product cannot support this it can be omitted.
