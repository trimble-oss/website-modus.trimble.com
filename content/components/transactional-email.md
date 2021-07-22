---
title: "Transactional Email"
layout: "single"
description: "An email message that follows an action carried out by a subscriber or user."
components: true
images:
  - "/img/headers/components/transactional-email.png"
draft: true
private: true
---

## Overview

Transactional email is a method of customer communication in which automated, real-time messages are sent to users through email after a specific action has been performed within an application. It is an interaction between the system and the user that contributes to the product’s user experience.

![Transactional Email](/img/email-template.png)

## Usage

**Use when**

- You need to confirm a user’s action performed in the application, such as change of password, email confirmation, or change of system status.
- You need the system to automatically generate a message based on the user’s actions or system status change.

**Don't use when**

- You need to send a marketing or promotional message.
- You need to communicate release notes, tips and tricks, or onboarding information.

## Specifications

Transactional emails consist of a subject line, sender’s email address, preheader, header, content, and a footer. They need to be functional on any device and email client.

Benton Sans as the official typeface for emails (Open Sans is the fallback font).

**Email Subject Lines:** The subject line clearly and succinctly explains the reason for the email before the user opens it.

**From and Reply Addresses:** All emails should be sent from trimble.com domains, and should include a human-readable sender name to aid in scanning through the inbox. If you do not monitor the reply email inbox, please use a no-reply address

- From any of the following are appropriate - GOOD:
  - Trimble: <no-reply@trimble.com>
  - Trimble Product: <no-reply@product.trimble.com>
  - Trimble Product Team: <product@.trimble.com>
- The following are not appropriate - BAD:
  - No-reply: <no-reply@trimble.com>
  - Product: <no-reply@productdomain.com>

![Do's and Don'ts](/img/email-address-dos-donts.png)

**Preheader:** A summary text that follows a subject line when the email is viewed in an inbox. Email preheader text is what many mobile, desktop, and web email clients show readers to give them an idea of what's inside the message before they actually open it.

**Header:** Contains the start of the primary page structure, logo, and graphics.

*(Add language to specify how to create own image header: send them along to Tyler. Add dimensions! Add info about submitting for approval. Create illustrator/ Photoshop template.)*

**Content:** The message to the user that provides information about the system’s status and any additional actions he needs to take to complete the action. The content of the email includes a salutation, message, and optionally buttons or links.

**Footer:** Contains the end of the primary page structure, alongside our standard Trimble sign-off and content. The footer contains links to privacy policy, terms of use, and copyright information.

It is recommended that your system is constructed in a way to allow for the header and footer to be maintained separately from the content. If you need additional images hosted under the trimble.com domain, please get in touch with your main divisional Marcom team member.


### Behaviors

A transactional email is triggered automatically by the user’s action within the application or by a change in the system that may affect the user’s experience or ability to use the system. The emails need to be responsive and functional on any device and in any email client.

### Editorial

**Subject Line:** Make sure the subject line is informative, clear, free of jargon, and refers to the relevant system/ product. Clearly identify the source and reason the user is receiving the email.
- GOOD: "Device 2 needs calibration - Product Name"
- BAD: "Trimble Product Name - Device calibration alert"

**Preheader and Email Content:**
A successful transactional email is
- Easy to view and comprehend
- Focused on the primary action

### Accessibility

- **Use descriptive subject lines:** Your subject lines should be brief but descriptive, and give subscribers an accurate idea of what's in the email. See above.

- **Maintain a logical structure:** It's important for all your subscribers to be able to view your content in a logical order no matter what device they're using, but it's especially vital for people who use screen readers. Our templates are designed to be responsive and organized in a logical order.

- **Use appropriate HTML tags to structure your email:** Screen readers rely on page elements like tables and headers to determine the informational hierarchy of a web page or HTML email. Make sure your email is easy to scan and navigate through to access the most important information. Use HTML heading tags like `<h1>` and `<h2>` to identify important sections of your content; do not rely on style elements like colors or bold text.

- **Use appropriate color contrasts:** Make sure you maintain appropriate color contrasts so the content of the email is readable to users with visual impairments.

- **Don't hide information in images:** Screen reader users or users who have images blocked in their email client aren't going to see information in images or infographics. Make sure the most critical content in your message is presented in text, and if appropriate use images to complement that text.

- **Use Proper Alt Text for Images:** Alt text, or alternative text, is a brief description of an image that's displayed when a subscriber can't view your images. Alt text should be short but descriptive, and highlight the relevance of the image to your message.

- **Use meaningful link text:** Make sure a link text or a button tells your users what they're clicking on. Avoid vague link text. Do not use "Click Here"; Instead, tell the user what to expect when they click the link (e.g. “Change your password here”).

<a href="/email/transactional-email.html" target="_blank" class="btn btn-primary mb-1" download>
Download the template
</a>


{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 06/02/2021 | 1.1.0   | Newly added element. | Z. Kulpa, J. Dong |
{{</ whats-changed-table >}}
