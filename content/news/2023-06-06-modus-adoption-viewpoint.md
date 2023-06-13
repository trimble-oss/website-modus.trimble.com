---
title: Retrospective on Viewpoint Modus Adoption
date: 2023-06-06
description: "The Viewpoint team worked for past couple of years on a long-term solution which would re-imagine the look & feel of the products to align with Modus. Read on how they approached it!"
image: "/img/blog/headers/2023-06-06-modus-adoption-viewpoint.png"
images:
  - /img/blog/headers/2023-06-06-modus-adoption-viewpoint.png
headerBgColor: "#bec8d0"
tags: ["modus", "adoption", "viewpoint"]
author: Dara Bedick
blog: true
layout: blog-post
---

_By Dara Bedick and Chelsea Christison_

**Who We Are?**

I'm Dara Bedick, UX Manager leading the Estimation and Analytics POD and living in Portland, OR. Together with Chelsea Christison, User Experience Designer, we looked back at the different phases of adopting Modus for Viewpoint.

### Background

Starting in 2019, the **Modus Adoption Plan for Viewpoint** was initially created by Stephen Williams in collaboration with the Modus design POD which included Aruna Chandroo, Chelsea Christison, and myself. We had some huge help from Mohammed Nawaz, Julian Oczkowski, Ewa Nowak, Eric Gunther, Neil Cadsawan, and our then intern Aishwarya Vellanki. The initial effort spanned about a year and a half to align with various teams and stakeholders and to start the implementation. Modus adoption is currently about two years in the making and nearing completion.

The goal of the Viewpoint adoption plan was to create unification for all of the Viewpoint Suite which includes six web products, three desktop products, and six mobile products in total. This also included dark mode for some of the mobile applications. At the beginning of this initiative, Viewpoint needed to align with Trimble branding. We worked on a long-term solution which would re-imagine the look and feel of the products at Viewpoint to align with Modus. We began by outlining how this would be best implemented through each team. Some of the questions we tried to answer were:

- How might we unify the Trimble Construction One software suite as we move toward a Trimble Connected Construction multi-product bundling, suite, and service offering?
- How might we improve Viewpoint product new logo closing, cross/up-selling, and enable Viewpoint-Trimble integrations, to unlock new sales plays by enabling cross-product user workflows, new customer value, and drive ARR goals?
- How can we leverage the One Trimble Modus Design System as much as
  possible across Viewpoint products to gain efficiencies?

## Design Implementation

The first problem to tackle for our team was how to implement the rebranding vision without overwhelming development teams who would be in the midst of completing their own backlogs.
We designed a plan which heavily focused on changing visually impactful elements first, and then trickling into changing the finer details later on.

We took large inspiration from [this article](/community/adoption/) which breaks down the rebranding work into four levels of achievement. With this incremental model we could now chunk the work teams would need to accomplish:

### Phase 1: Shared Portfolio

The goal of this phase was to implement Modus design foundations across Viewpoint. We called this the MVP (minimum viable product) work and it included:

1. Typography (as pragmatic per app)
2. Logo usage
3. Color palette mapping
4. Header
5. Copyright and privacy notice
6. Imagery
7. Login page

These are high impact elements that would visually bring Viewpoint’s products more in line with Trimble Modus. The shared portfolio goal meant these items were in scope for all products on all platforms.

### Phase 2.1: Holistic Approach

Phase 2 was divided into two different approaches to adopting Modus. The first of which is the holistic approach. This route was made for Viewpoint products that support directly consuming the Modus web libraries via web components. There would be no major changes to functionality or business logic - simply replacing current web components with their Modus counterparts. The order of swapping components would be up to the team.
New products would use the Modus web library for their construction.

### Phase 2.2: The Phased Approach

The other half of phase 2 is the phased approach which is meant for all other non-web based Viewpoint products. This approach was created based on the adoption strategy made by another Trimble team found [here](/community/adoption/). This approach is broken down into three smaller phases which each focus on implementing different components of Modus:

1. Data entry components

- Buttons
- Inputs
- Checkboxes, radio buttons, switches
- Dropdowns
- Chips
- Sliders
- Responsive grid and spacing

2. Content components

- Writing style
- Alerts, messages, toasts
- Dialogs
- Tabs or accordions (prioritize based on prominence)
- Cards or tables (prioritize based on prominence)
- Pagination
- Accessibility

3. Remaining components

- Cards or tables (whichever is leftover)
- Tabs or accordions (whichever is leftover)
- Badges
- Progress bars, spinners
- Tooltips
- Breadcrumbs
- Lists

Each micro phase was designed to be small enough for developers to place into their already busy quarters. Especially since teams who have to take this phased route will be recreating Modus components from scratch which can take up a lot of development time. Compared to the holistic approach where developers did not need to recreate Modus components, we needed to be mindful of development effort and time.

### Phase 3: Final Structure

The final phase of the rebranding journey consisted of structural and navigational upgrades to products that would need them. This includes:

1. Implementing official Modus header requirements (requires repositioning of certain elements across products).
2. Side navigation panel.
3. Updated information architecture as needed.

These final changes were on a case-by-case basis.

## Lessons Learned

Throughout the past two years, our journey of working with development teams, project managers (PMs), and each other has taught us invaluable lessons. One of the key realizations we had was that change does not happen as quickly as initially anticipated. Different teams had varying resource allocations and competing priorities in their backlogs, which sometimes took precedence over adopting our design recommendations.

Flexibility became a crucial aspect of our design process. We encountered teams with tech stacks, such as web and mobile products, where implementing UI changes globally (e.g., fonts, buttons, inputs, tables) was relatively easy. On the other hand, there were teams with older products or desktop applications that posed challenges. These products did not support global changes, relied on third-party elements, or had manual page creation processes that limited the scope of our redesigns. As a design team, we had a vision for each product and what would be the best design approach. However, we had to navigate within the technical constraints of each product, each with its unique limitations.

A significant part of our process involved effectively communicating our design vision to the developers, receiving their feedback on what was implementable, and incorporating their input. This iterative cycle of communication, feedback, and design flexibility played a pivotal role in achieving our goals.

Working collaboratively across teams emphasized the importance and value of everyone's input. We gained a deep understanding of how vital this collaborative effort is for our company. We greatly appreciate every individual who contributed to the entire process, as it truly exemplifies the saying, "It takes a village." Both the design and engineering teams are thrilled because we now have an environment that enables faster design and execution. Moreover, our users will benefit from the consistent experiences we have achieved across our products.

## Uplifted Examples

The following are before/after renderings of a small selection of Viewpoint products.

### JobPac Connect

**Dashboard Screen - Before:**

{{< img src="/img/news/viewpoint-job-pac-dashboard-before.png" class="w-100" width="854" height="427" alt="Jobpac Dashboard Before" loading="auto" >}}

**Dashboard Screen - After:**

{{< img src="/img/news/viewpoint-job-pac-dashboard-after.svg" class="w-100" width="854" height="427" alt="Jobpac Dashboard After" loading="auto" >}}

As a part of the phase 1 rebranding initiative, mobile products worked on implementing the logo, splash screen, login pages, app tiles, fonts, and colors.

## Service Tech Mobile

**Landing Screen - Side-By-Side Before and After:**

{{< img src="/img/news/viewpoint-service-mobile-landing-before-after.svg" dark="/img/news/viewpoint-service-mobile-landing-before-after-dark.svg" class="w-100" width="854" height="427" alt="Service Tech Mobile Landing Screen Before and After" loading="auto" >}}

### Team Mobile

**Landing Screen - Side-By-Side Before and After:**

{{< img src="/img/news/viewpoint-team-mobile-landing-before-after.svg" dark="/img/news/viewpoint-team-mobile-landing-before-after-dark.svg" class="w-100" width="854" height="427" alt="Team Mobile Landing Screen Before and After" loading="auto" >}}

### Field Management Mobile Dark Mode

**Landing Screen - Side-By-Side Before and After:**

{{< img src="/img/news/viewpoint-fm-landing-screen-before-after.svg" dark="/img/news/viewpoint-fm-landing-screen-before-after-dark.svg" class="w-100" width="854" height="427" alt="Field Management Mobile Landing Screen Before and After" loading="auto" >}}

_Title Image Credit: Designed by mockup.store_
