---
title: "Autocomplete"
layout: "single"
description: "The autocomplete is a text input field enhanced by a panel of suggested options."
images:
  - "/img/components/headers/autocomplete.png"
components: true
componentsWeb: true
keywords: typeahead
aliases:
  - "/components/autocomplete/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/user-inputs-autocomplete--default
tags: [usage]
---

## Overview

An autocomplete dropdown allows the user to search and select one option from a set of choices. When the user enters text into the input field, a list of suggestions are provided.

{{< img src="/img/components/autocomplete-overview.svg" dark="/img/components/autocomplete-overview-dark.svg" class="w-100" width="790" height="283" alt="Autocomplete Example" loading="auto" >}}

## Usage

#### Use when

- Searching and results can be auto-populated.
- Application requires predictive, suggestive or instant search results.
- Filtering list items.
- Single selection from a list is necessary.

#### Don't use when

- Providing only two options. Instead, use [Radio Buttons](/components/web/radio-buttons/) or a [Switch](/components/web/switches/).

## Types

Autocomplete comes in three varieties:

- **Basic Autocomplete**: Typical “search-as-you-type” function that matches what a person is typing, usually the beginning of a word, or a prefix, part of a word or with a word list.
- **Autocomplete Suggestions**: Suggestions not only predict user intentions, but they also help users construct more useful searches than they might on their own. Suggestions go beyond matching text strings by including new search items within the suggested results. It is useful during information-seeking tasks, where there isn’t a single “right answer.”
- **Instant Results**: Sometimes users may prefer to autocomplete actual search results instead of retooling their search phrase. For example, the display of rich information right in the autocomplete instead of a list of suggestions that lead to a search results page.

{{< img src="/img/components/autocomplete-types.svg" dark="/img/components/autocomplete-types-dark.svg" class="w-100" alt="Autocomplete Types" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                    | Contributors                                      |
| ---------- | ------- | ------------------------ | ------------------------------------------------- |
| 03/30/2022 | 1.3.0   | New component submitted. | S. Edwards, E. Gunther, C. Rodriguez, D. Zambrano |

{{</ whats-changed-table >}}
