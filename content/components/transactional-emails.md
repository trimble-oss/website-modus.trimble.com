---
title: "Transactional Emails"
layout: "single"
description: "Auto-response emails that follow an action by a subscriber or user."
components: true
images:
  - "/img/headers/elements/transactional-email.png"
---

## Overview

Transactional email is a method of customer communication in which automated, real-time messages are sent to users through email after a specific action has been performed within an application, website, or portal. Sometimes referred to as “triggered emails” or “automated emails,” transactional emails typically contain personalized information that pertains directly to the action taken by the user, or provide system notifications.

One of the main goals of sending transactional emails is to instantaneously connect and communicate valuable information to a single user at key moments of the user’s interaction with the system. For a positive user experience, the most critical piece of sending transactional emails is 100% deliverability.

![Transactional Email](/img/email-template.png)

## Usage

**Use when**

- You need to confirm a user’s action performed in the application, such as change of password, email confirmation, or change of system status
- You need the system to automatically generate a message based on the user’s actions or system status change.
- You need to communicate
  - Account changes
  - Account creation and activation
  - E-commerce transaction receipt
  - Legal notifications
  - Maintenance notifications
  - New user account
  - Password reminders, resets and two-factor authentication
  - Renewal notification
  - Security and account alerts
  - System/ product outage

**Don't use when**

- You need to send
  - Marketing or promotional message
  - Release notes, tips and tricks, or onboarding information
  - Abandoned cart emails
  - Newsletter
  - Education/ training email series
  - Upsell or cross-sell emails
  - Product announcements or promotions
  - Webinar, tradeshow, or event invitations and registration confirmations
  - Welcome or onboarding emails
  - Trial expiration

## Specifications

Transactional emails consist of a subject line, sender’s email address, preheader, header, content, and a footer. They need to be functional on any device and email client.

### Deliverability and Meta Information

While the content of the transaction email is most important, the meta information is what influences the recipient to open and read the message. It is also the way that email clients handle and display your information.

**Email Subject Lines**: The subject line clearly and succinctly explains the reason for the email before the user opens it. It should be informative, free of jargon, and refer to the relevant system and product, if possible. It should be no more than 50 characters. While not always possible, a good goal is to try to convey all of the relevant information in your email’s subject so that the recipient doesn’t even need to open the email.

For example, this subject clearly identities the source and reason the user is receiving the email, with the product or solution.

  **GOOD**: "Device 2 needs calibration - Product Name"

  **BAD**: "Trimble Product Name - Device calibration alert"

If you are not using the product or software name in the “from” address, you should begin your subject line with the product or solution name. The rest of the subject line should be used consistently and identically for that type of transactional email.

_For example_:
- SysQue Product Notification
- SysQue Password Reset
- SysQue System Outage
- SysQue Support Ticket Received

**Send From Name and Email Address**: Use either the Trimble Product or Division Name.
All emails should be sent from Trimble subdomains (@subdomain.trimble.com), and should not be sent from the trimble.com primary domain (@trimble.com). It is also recommended that the domain used to send transactional emails is different from the domain for sending marketing emails, as the marketing emails may dilute the sender’s domain reputation. It should include a human-readable sender name to aid in scanning through the inbox. If you are using the product name in the “from” name, you can omit it from the subject line.

**GOOD**:
- support@sysque.trimble.com
- help@legal.trimble.com
- confirmation@store.trimble.com

**BAD**:
- support@trimble.com
- legal@trimble.com
- order@trimble.com

To secure a subdomain, submit your proposed domain name to the the Corporate Web team for approval based on the availability and the nature of the subdomain, and then work with the IS team to configure various DNS settings (SPF/DKIM/DMARC).

**Reply-to Email Address**: If possible, avoid using “no-reply” email address. Ideally, the user can reply to the email and the reply will be sent to a monitored inbox.

**BEST**:
- reply@support.trimble.com
- support-reply@mep.trimble.com
- help-reply@legal.trimble.com

**OK** (if unmonitored):
- no-reply@mep.trimble.com

**BAD**:
- no-reply@trimble.com

In cases when you must use a “no-reply” email address, we recommend including language in the email footer to provide the recipient with instructions for replying.

_For example_:

“Please, do not reply directly to this email. If you’d like to contact us, email us at support@sketchup.trimble.com.”

**Preheader**: A summary text that follows a subject line when the email is viewed in an inbox. Email preheader text is what many mobile, desktop, and web email clients show readers to give them an idea of what's inside the message before they actually open it.

### Design, Content, and Brand

The primary page structure of an email includes graphics, background, content area, and footer. Transactional emails need to be responsive and functional on any device and in any email client.

**Font Type and Color**
Open Sans is the font used in transactional emails.
Trimble Gray (#363545) is the default font color.

**Graphics**
Following delivery best practices, transactional emails should not include any graphics, with the exception of the Trimble logo in the upper left hand corner of the email. This can be a single logo, or a co branded logo, above the main content box.

- Logos should be .png type files
- Logos should have a height of no more than 20 pixels
- Logos may be the single Trimble logo, or the Trimble logo with a divisional or product logo
- No email should have a divisional or product logo without the Trimble logo
- Logos should be placed outside of the main content canvas, in the frame of the email.

**Background**
Background color should be Gray Light (#f3f3f7).

**Content Area**
The white canvas area of the email will hold the content and main message of your email. The content may include the following:
- Header _required_
- Subheader _optional_
- Message _required_

**Header and Subheader**
Headers and subheaders help with visual hierarchy and allow the user to quickly understand the content when skimming. They should be short and concise and follow these guidelines:

- Headers should be left aligned, 24 point font, Open Sans font, in Trimble Gray
- Headers should follow a common structure, for every email of that same purpose having the same heading, for example “Scheduled Maintenance”, or “Password Reset”, etc.
- Subheaders should be left aligned, 18 point font, Open Sans font, in Trimble Gray

**Message**: The message provides information about the system’s status and any additional actions the user needs to take to complete the action. The content of the email includes a salutation, message, and optionally buttons or links.

**Footer**: The footer contains the end of the primary page structure, alongside our standard Trimble sign-off and content. The footer contains copyright information, links to privacy policy and terms of use, and physical address of a relevant Trimble office.

### Behaviors

A transactional email is triggered automatically by the user’s action within the application or by a change in the system that may affect the user’s experience or ability to use the system. The emails need to be responsive and functional on any device and in any email client. The footer should be the same on every email.

### Editorial

- The subject line should be no more than 50 characters.
- Make sure the subject line is informative, clear, free of jargon, and refers to the relevant system/ product. Clearly identify the source and reason the user is receiving the email.
  - **GOOD**: "Device 2 needs calibration - Product Name"
  - **BAD**: "Trimble Product Name - Device calibration alert"
- Headers and subheaders should be title case
- Headers should be no more than 3 to 5 words in length
- Subheaders should provide context to the email and be no more than two lines in length
- A successful transactional email is
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
| 08/06/2021 | 1.2.0   | Newly added element. | Z. Kulpa, J. Dong |
{{</ whats-changed-table >}}
