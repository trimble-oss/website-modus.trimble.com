---
title: Modus Jira Configuration
date: 2020-12-01
description: "How is the Modus Digital Design System project set up in Jira and, based on the roadmap, what is the initial release schedule."
image: "/img/blog/headers/2020-12-01-modus-jira-configuration.jpg"
headerBgColor: "#F1F1F1"
tags: ["jira", "modus", "roadmap"]
author: Ewa Nowak
blog: true
layout: blog-post
---

Managing a design system in Jira involves creating a **project**, adding **stories** with a good descriptive **summary** and organization (**Epics**), and iterations (**Sprints**) that contribute towards releases (**Versions**). When stories get too complex or require more granularity and multiple people working on them, we break them down into **Subtasks**. There is no right or wrong way of setting up a Jira board: it comes down to preference and project needs.

## Project Name

**Modus Design System** is the name of the project. The project key is **DDS** (which stands for Digital Design System). The key followed by a number constitutes the unique identifier for each Jira issue.

## User Stories

The design system’s backlog is made up of user stories, which represent the features that will be built in future iterations. The purpose of a user story is to articulate how a piece of work will deliver a particular value back to the user. “Users” don’t have to be external end users in the traditional sense, they can also be internal customers or colleagues within the organization who depend on the design system. User stories are simple statements written from the user’s perspective that highlight the expectations of the user’s experience.

I have created user stories based on the work that needs to be done and organized it into epics and versions based on the [Modus Roadmap](https://miro.com/app/board/o9J_kvewBgE=/). Most stories should not take longer than a traditional (2-week) sprint; however, because we are not technically running scrum, at this time, it doesn’t so much matter. In anticipation of adopting a scrum process in the future, I have also created a scrum board, so we can utilize it as needed or as we start involving more people with DDS work, who normally follow the scrum process.

Stories most notably include the following information:

- **Summary:** descriptive title
- **Description:** the user story written by a stakeholder, so far the Design System Manager, who represents the UX Community along with some additional information for reference and guidance
- **Acceptance Criteria:** what’s needed for the story to be considered “done”
- **Version:** which release is this story part of
- **Due Date:** a way to keep track of stories and timelines
- **Priority:** how important is the story within the project, based on user needs and business requirements
- **Linked Issues:** what stories does this story block or is blocked by
- **Assignee:** who is assigned to work on this story
- **Epic:** which Epic does the story belong to
- **Comments:** a way to document and keep track of questions, progress, etc.

![Jira Story Example](/img/jira-story.png)

I added as much detail as is relevant to the stories. Stories that are being worked on (featured on the kanban board) or about to be moved from the backlog have more details; stories that are further out in the backlog have less details that will be filled in as we move closer to working on them.

[DDS Backlog](https://jira.trimble.tools/secure/RapidBoard.jspa?rapidView=5332&projectKey=DDS&view=planning.nodetail&selectedIssue=DDS-48)

### Subtasks

Some stories will be complex enough to warrant breaking them out into subtasks in order to better track progress, especially when the work being done is assigned to multiple people.

## Columns

A story is broken into repeatable steps (columns). As the story is completed, it moves from the “To Do” status to “Done” status to offer full visibility of progress. There are five types of statuses in Jira:

- Backlog
- To Do
- In Progress
- Selected for Development (we will add this type of column once we start working with other dev teams)
- Done

The DDS kanban board is set up with 5 columns:

- **Backlog:** includes stories that need to be done but aren’t ready to be worked on. This column doesn’t display on the board. To view it go to the “Backlog” tab.
- **Discover:** “To Do” column that represents the story being moved from the backlog to being worked on. The “discover” step may include gathering information, exploration of the topic, understanding of who needs to be involved, and any other preparatory tasks that need to happen before the story is officially “In Progress.”
- **In Progress:** depending on the story, “In Progress” may mean it’s in the design, code, or documentation stage. We may want to become more granular in the future and break the column up into more specific stages as we refine our process.
- **Review & QA:** “In Progress” column representing the review and QA process, a reminder that this step needs to happen before the story is considered “Done.”
- **Done:** in Agile, the definition of “Done” varies from team to team. Initial DDS definition of “Done” (subject to change): a story is considered “Done” when it has (1.) moved through all the steps (columns) and (2.) met all the acceptance criteria.

## Epics

Epics organize stories into well understood categories for filtering and scanning. The DDS epics are loosely based on the initial categories of work outlined in the [Modus Roadmap](https://href.li/?https://miro.com/app/board/o9J_kvewBgE=/). They are represented as “swimlanes” on the boards. Our epics can be divided into three categories: evergreen epics, formative epics for early growth, and epics representing growth and change.

### Evergreen Epics

These are the persistent categories that represent the work always being done on the system.

- **Operations:** Administrative tasks for running the DDS
- **Foundations & Visual Style:** Foundations, brand guidelines, topography, color, spacing, accessibility, etc.
- **UI Components:** Fix, enhance, deprecate, or add
- **Technical Architecture:** Code libraries
- **Design Pattern Library:** Sketch, Figma, Adobe XD libraries

### Formative Epics

Starting a design system at Trimble requires some initial big investments that will taper off as the system matures.

- **UX Community Engagement:** Opening communication channels, establishing submission methods, offering training, etc.
- **Adopters:** Early adopters coordination to discover, align, and collaborate and experiment with how efficacy of the system

### Epics of Growth and Change

After the formative period, the work will transition into business-as-usual. Nevertheless, the system will evolve and grow creating a need for epics representing new initiatives.

![March 2020 DDS Kanban Board](/img/modus-kanban.png)

[DDS Kanban Board](https://jira.trimble.tools/secure/RapidBoard.jspa?projectKey=DDS&rapidView=5332)

![March 2020 DDS Backlog](/img/jira-backlog.png)

[DDS Backlog](https://jira.trimble.tools/secure/RapidBoard.jspa?rapidView=5332&projectKey=DDS&view=planning&issueLimit=100)

## Versions

Based on the Modus Roadmap, all backlog stories have been organized into **Versions**. Releases include work done on the components of the system along with administrative tasks for communication with the UX community. I have assigned loose dates to each release and set up versions to release approximately every two months. This schedule will inevitably change, but it gives us a good starting place to test out the process and prepares us for Modus 2.0 release by the end of Q4 of 2021.

[DDS Release Schedule (draft)](https://jira.trimble.tools/projects/DDS?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page&status=unreleased)
