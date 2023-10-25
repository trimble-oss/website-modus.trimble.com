---
title: "Contribution Process"
layout: "single"
description: "Step-by-step instructions how to contribute a design pattern to Modus."
url: "/community/contribution-process/"
community: true
group: community
hideToc: true
---

The Modus Delivery Team is dedicated to maintaining a consistent, top-quality product. Accordingly, before any component is revised or added, it goes through a process of reviews and approvals.

The Modus contribution process is led by the Modus Approval Board (MoAB).

The Modus Approval Board (MoAB) is a cross-organizational team consisting of Senior UX Designers representing a variety of Trimble products in addition to the Modus Delivery Team. MoAB is focused on maintaining, organizing, reviewing, and pushing along component and pattern submissions to Trimble's Modus Design System leading the contribution process.

{{< img src="/img/guide/contribution-process.svg" dark="/img/guide/contribution-process-dark.svg" width="854" height="392" alt="Contribution Process" loading="auto" >}}

### 1. Understanding the design system and the process

During this stage you review our documentation, [Submission Guidelines](/community/submission-guidelines/), and process. You should also familiarize yourself with our design principles and foundations, which address visual design, UX, content, branding, and accessibility ([Foundations](/foundations/) section of Modus).

To ensure timely approval with a shorter production lead time, avoid overly complex submissions covering several components or including product specifics. This will reduce the need for iteration and revision of parts of the submission. As a result, a compact, well-outlined submission will be approved faster.

### 2. Submission

Identify the user needs your pattern solves and explain its advantages over alternative patterns. Include original design files and any user research that supports this pattern. You should contribute a pattern when

a.) A new component has been created on your product team (e.g. Chips for displaying and interacting with content filters).

b.) The component exists as design elements and interaction pattern sequence in Figma.

c.) The component has undergone usability testing with documented results or is currently in use in the product.

d.) The product team decides to propose the pattern to the Modus Approval Board (MoAB).

Modus submissions cover:

- Design submissions
- Engineering submissions

#### 2.1. Design Submission

To submit your pattern, please follow the [Submission Guidelines](/community/submission-guidelines/). Fill in the Submission Form and attach all necessary documentation as described in the guidelines.

Upon submission, a Clickup issue is automatically created in the "Submitted" column on the MoAB Board. MoAB meets weekly for reviews and handles incoming submissions. Please, allow five (5) business days for your submission to be reviewed. The submitting party is notified by the MoAB lead once their submission is reviewed.

#### 2.2. Engineering Submission

Before starting development, ensure the component is approved and updated in Modus Figma and Modus Style guide.
During development, only use Modus Figma and Modus Style Guide for reference.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>.</th>
      <th>Checklist</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.</td>
      <td>
        a.) Familiarize yourself with the current code. Alternatively, if you would like the Modus team to guide you through it, feel free to reach out.
      </td>
    </tr>
    <tr>
      <td>.</td>
      <td>
        b.) Share your proposed implementation methods, coding strategies, component architecture. Discuss with the Modus Team to finalize an approach.
      </td>
    </tr>
    <tr>
      <td>.</td>
      <td>
        c.) Fork the repository and create a new branch. Once you have completed your development work, submit a pull request (PR).
      </td>
    </tr>
        <tr>
      <td>.</td>
      <td>
        d.) The MWC-Maintainers group on GitHub will initiate the PR review process and provide feedback by adding comments either on the PR itself or in the respective Google chat.
      </td>
    </tr>
        <tr>
      <td>.</td>
      <td>
        e.) If the topic is too complex or too large to be fully discussed in PR comments, schedule a meeting  to clarify any questions and avoid any delays.
      </td>
    </tr>
        <tr>
      <td>.</td>
      <td>
        f.) Once all the comments on the PR have been addressed and the PR approved, the submitted component can be merged and released.
      </td>
    </tr>
  </tbody>
</table>

### 3. Review

Once an issue is entered into the backlog MoAB board the Modus Approval Board (MoAB) reviews the new pattern submission within 5 business days, iterates it (if needed) with the submission author, and informs the Modus Product Manager about the final result. In complex cases, it is encouraged that the submission author could walk the MoAB Team through the submission themselves or provide screen capturing video snippets for better understanding.

#### 3.1. Evaluation

Patterns are reviewed according to the following criteria:

a.) Pattern is designed according to the current design standards (tokens, foundations, as put forward in the style guide and existing pattern library)

b.) Pattern presents new functionality or promises to solve an existing design problem in a novel way

c.) Each individual reviewer should conduct a heuristic review of the pattern and come prepared with an assessment grade:

1 = I have some significant design and/or usability concerns (document these concerns)

2 = The pattern seems useful and generally usable, but I would request a few tweaks (document these tweaks and the reason for requesting them)

3 = The pattern seems useful and generally usable, and I have no concerns

Some of the criteria used in the heuristic review include (but are not limited to)

- Usability
  - Is the pattern responsive?
  - Is the interaction flow and behavior clearly documented?
- Accessibility
  - Is the pattern accessible to all audiences?
  - Does it meet WCAG 2.1 standards?
- Visual design
  - Is the contribution consistent with our visual style?
- Content
  - Does the pattern have plain language, correct spelling, and grammar?
  - Are actions clearly described?
  - Is there enough contextual information to aid the user?

d.) Review usability tests or any other submitted research data.

#### 3.2. Tracking

You can track the status of submissions [here](/community/submissions-status/). The status can be approved, revision requested (if iteration needed), presented for evaluation by a [Tiger Team](/community/tiger-teams/), or marked not compliant with Modus.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Status on Clickup</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Submitted</td>
      <td>
        After filling in the submission form, your submission automatically appears on the MoAB Clickup board for review. MoAB strives for a lead time of five (5) business days until first feedback to the submission author.
      </td>
    </tr>
    <tr>
      <td>In Review</td>
      <td>
        Submissions scheduled for the next weeklyMoAB review meeting.
      </td>
    </tr>
    <tr>
      <td>Tiger Team Evaluation</td>
      <td>
        Submissions presented to the active Tiger Team leads for evaluation. Ideally, the submission author can connect with the Tiger Team leader for further discussion.
      </td>
    </tr>
    <tr>
      <td>Revision Required</td>
      <td>
        Part of the submission requires revision. MoAB lead will reach out to the submission author.
      </td>
    </tr>
        <tr>
      <td>Approved</td>
      <td>
        Submission is approved for further steps to be first incorporated into Figma and Style Guide and then moved to (engineering) production.
      </td>
    </tr>
    <tr>
      <td>In Production</td>
      <td>
        Ongoing incorporation into Figma, Style Guide, and Web Components. Trackable on GitHub.
      </td>
    </tr>
    <tr>
      <td>Non-Compliant</td>
      <td>
        Submission deemed not compliant to be part of Modus, but accepted as product-specific.
      </td>
    </tr>
    <tr>
      <td>Closed</td>
      <td>
        Production completed, pattern moved to maintenance and usage monitoring.
      </td>
    </tr>
  </tbody>
</table>

### 4. Prioritization and recommendation

When the pattern is approved, it is prioritized and scheduled for a release. The Modus Delivery Team will make sure your pattern is added to all supported code and design libraries, conduct ongoing maintenance of your pattern, and monitor its usage.

After approval, the status on Clickup is “In Production” and a GitHub issue is created for Figma, Style Guide, and Web Components production. The submitting party is automatically notified as follower upon the change of status in GitHub. To speed up the design implementation process, the submission author can create a Figma branch and submit it for merge to the UI kit.
