---
title: "Modus Adoption"
layout: "single"
description: "Incremental design system adoption plan."
url: "/community/modus-adoption/"
community: true
group: community
hideToc: true
aliases:
  - "/community/adoption/"
---

<style>
a:has(> img)::after {
  display: none !important;
}
</style>

Organizations widely recognize that the adoption of a design system adds substantial value to end user product experiences by providing consistency, saving costs for design and development, and scalability. Once you recognize the efficacy of a design system and decide to adopt it, how do you implement it?

## Planning

After your team completes the initial discovery of the design system and decides to implement it, you prepare for the implementation by performing a feasibility assessment, a roadmap review, and system audit.

**Feasibility Assessment:** The team reviews the design system and its code stacks in order to assess the implementation effort. It is crucial to involve the entire team, including the designers, developers, and QA. Developers and QA will need to assess the risks and consider test environments and safe code merge protocols to minimize the probability of breaking the product.

**Roadmap review:** The team reviews the roadmap and builds the design system implementation into your plan. Depending on your product the adoption effort may vary and so may the timeframe for the adoption. It’s rare that a roadmap allows for a wholesale implementation: the design system work usually needs to take place alongside other features and releases. But working under Agile methodologies and the design system’s modularity allows for incremental implementation.

**System Audit:** A system audit determines what parts of your product--elements, components, and patterns--are the most inconsistent and aid your team in prioritization. This step involves gathering screenshots of your product and documenting changes. You can do that electronically using Miro Board and spreadsheets or the old-fashioned way, by printing out screenshots, pasting them on a white board, and using Post-it notes to add comments. Once your team completes the audit, you should have a very good understanding of the effort involved.

<a href="https://drive.google.com/file/d/1LfT-pl5p7GdonP9sreo7sLYo0JRcT6Y_/view" target="_blank">![TechInsider Podcast](/img/podcast.png)</a>

<a href="https://drive.google.com/file/d/1LfT-pl5p7GdonP9sreo7sLYo0JRcT6Y_/view" target="_blank" class="btn btn-primary mb-1">
Watch podcast
</a>

## Adoption

Once Product Management adds the design system work to your roadmap, the team finishes assessing the effort, documents it, and prioritizes the work. You now need to break the work out into stories and add them to your product backlog. To help your team prioritize the design system stories, we developed best practices incremental adoption plan that ensures

- Standards rollout in phases that don’t overwhelm your development;
- You integrate consumable parts of the design system and style guide incrementally while working on other important product features;
- Business lines update products at a pace that produces high quality and reduces risk and effort.

The following plan is broken down into four levels of achievement: **Bronze**, **Silver**, **Gold**, and **Platinum**. We suggest 6 months to complete a level. It’s a conservative estimate that will allow your team to work on other features of your product. However, you may choose a different approach and decrease this timeline. [Some teams were able to complete Modus implementation within a few months](/news/2021-03-24-utg-modus-adoption/).

### Levels of Achievement

#### BRONZE LEVEL: Foundational Alignment (6 months)

{{< checklist >}}Logo Usage{{</ checklist >}}
{{< checklist >}}Fonts{{</ checklist >}}
{{< checklist >}}Color Palette & Variables{{</ checklist >}}
{{< checklist >}}Header{{</ checklist >}}
{{< checklist >}}Icons{{</ checklist >}}

#### SILVER LEVEL: Major Components (6 months)

{{< checklist >}}Buttons{{</ checklist >}}
{{< checklist >}}Inputs{{</ checklist >}}
{{< checklist >}}Checkboxes, Radio Buttons, Switches{{</ checklist >}}
{{< checklist >}}Cards or Tables (prioritize based on prominence in your product){{</ checklist >}}
{{< checklist >}}Typography Classes{{</ checklist >}}
{{< checklist >}}Responsive Grid & Spacing{{</ checklist >}}

#### GOLD LEVEL: Styles & Accessibility (6 months)

{{< checklist >}}Writing Style{{</ checklist >}}
{{< checklist >}}Alerts, Messages, Toasts{{</ checklist >}}
{{< checklist >}}Modals{{</ checklist >}}
{{< checklist >}}Tabs or Accordions (prioritize based on prominence in your product){{</ checklist >}}
{{< checklist >}}Cards or Tables (whichever is left over){{</ checklist >}}
{{< checklist >}}Accessibility{{</ checklist >}}

#### PLATINUM LEVEL: Other Minor Elements (6 months)

{{< checklist >}}Tabs or Accordions (whichever is left over){{</ checklist >}}
{{< checklist >}}Badges{{</ checklist >}}
{{< checklist >}}Dropdowns{{</ checklist >}}
{{< checklist >}}Chips{{</ checklist >}}
{{< checklist >}}Sliders{{</ checklist >}}
{{< checklist >}}Progress Bars, Spinners{{</ checklist >}}
{{< checklist >}}Pagination{{</ checklist >}}
{{< checklist >}}Tooltips{{</ checklist >}}
{{< checklist >}}Breadcrumbs{{</ checklist >}}
{{< checklist >}}Lists{{</ checklist >}}

If each stage takes 6 months to complete, your product should be fully aligned with Modus in two years.

## Maintenance & Loyalty

Once the product reaches full visual alignment with the design system, you have completed the bulk of the work. After this stage, the effort to design, develop, and test new features drops significantly due to the efficiencies of the system and downstream process improvements. The designers use UI kits with supported tools such as Figma or Adobe XD to quickly prototype features and experiences, and developers can use consistent and ready-made code components that match the design patterns at implementation. Consistent modular design patterns and consistent matching reusable code components create increasing efficiencies and also enable QA UI test harnesses that can be further automated.

As the design system evolves to expand its components, elements, patterns, and code stacks to meet the needs of the organization and improves based on new trends in the industry, new technologies, and user research, your product requires ongoing maintenance to retain consistency. Since your product is already Modus-aligned, every new feature or pattern your team develops can be contributed back to the design system for use across other products.

When your team adopts the Modus Design System, we encourage you to provide feedback to improve the system and also to become an advocate and share with other teams your success story. We would also like to learn about your process, challenges, and experience in adopting the design system, so that we can continually improve the system to meet your needs. If your team has already begun adoption, we would like you to track your progress in [this spreadsheet](https://docs.google.com/spreadsheets/d/1VtOaE6x8slBvT3Xy3eJL_nKHWprIq-VEXw1YxuPH4Bo/edit#gid=0).

[Contact us](/community/contact/) with any questions and/ or Modus training requests! Read the [Modus implementation success story](/news/2021-03-24-utg-modus-adoption/)!
