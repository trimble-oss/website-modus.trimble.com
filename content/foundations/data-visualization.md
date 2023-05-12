---
title: "Data Visualization"
layout: "single"
description: "Data visualization helps to communicate complex quantitative information."
foundations: true
hidden: true
private: true
sitemap_exclude: true
---

### What is data visualization good for?

Visualizations are tools that can make complex concepts easier for humans to understand. In the words of engineer and inventor Douglas Engelbart, _“a tool doesn’t just make something easier—it allows for new, previously-impossible ways of thinking, of living, of being.”_

The utility of data visualization can be divided into three main goals: to explore, to monitor, and to explain. While some visualizations can span more than one of these, most focus on a single goal.

- **To explore**<br>
  When users are looking for an open-ended tool that helps them to find patterns and insights in data, a data visualization focused on exploration and fast iteration can help. Exploration tools should have strong connections to other tools that collect (extract), clean (transform), and curate (load) data.

- **To monitor**<br>
  When users need to check on the performance of something, a data visualization focused on monitoring is best. Monitoring tools, such as dashboards, should focus on leading indicators and showing information that is connected to useful and direct actions.

- **To explain**<br>
  When users want to go beyond the “what” of a problem and dig into the “why,” a data visualization focused on explanation is ideal. Explanatory visualizations are often hand-crafted to help a broad audience understand a complex subject, and usually are not able to be automated.

## Glossary of terms

The following are terms we use in Spectrum to talk about data visualization. Any commonly used synonyms for these are noted in-line in specific guidelines.

### Metric

A metric contains numeric, quantitative values that can be measured. Measures are continuous, and the difference between values can be quantified.

<!-- prettier-ignore-start -->
| Scale                                      | Categorical                     | Ordinal                                      | Interval                        | Ratio                               |
| ------------------------------------------ | ------------------------------- | -------------------------------------------- | ------------------------------- | ----------------------------------- |
| Example                                    | **Country** (US, Japan, Mexico) | **Status** (Extinct, Endangered, Threatened) | **Temperature** (32°, 54°, 68°) | **Height** (1.65 m, 3.1 m, 2.01 m.) |
| The order of the values is known           |                                 | x                                            | x                               | x                                   |
| Has a **mode** (most frequent value)       | x                               | x                                            | x                               | x                                   |
| Has a **median** (middle value)            |                                 | x                                            | x                               | x                                   |
| Has a **mean** (average value)             |                                 |                                              | x                               | x                                   |
| Can quantify the difference between values |                                 |                                              | x                               | x                                   |
| Can multiply and divide values             |                                 |                                              |                                 | x                                   |
| Has a “true” zero                          |                                 |                                              |                                 | x                                   |
{class="table table-sm table-bordered table-colors"}
<!-- prettier-ignore-end -->

### Dimension

A dimension contains qualitative values such as names, types, or places. Dimensions can be used to categorize, segment, and reveal details in data. A dimension is discrete; each value is individually separate and distinct.

### Categorical scale

In a categorical (nominal) scale, values are not associated with numeric values. Examples of this include locations (e.g., cities, states, countries) or scientific classification systems (e.g., kingdoms of animals or plants).

### Ordinal scale

In an ordinal (ordered) scale, values have implicit order. Two common examples of this is a ranked list (e.g., 1st, 2nd, 3rd) and sentiment (e.g., strongly disagree, disagree, neutral, agree, strongly agree), in which the order the items appear in is a vital piece of information.

### Ratio scale

One example of a ratio scale is a ruler, where values are plotted at specific points on the scale to represent their exact measure. Things like height and age also use this scale. Ratio scales usually start at zero because zero is the most meaningful starting point.

### Interval scale

An interval scale has a lot in common with a ratio scale, but it lacks a meaningful zero or origin point. Examples of this include temperature and time. In an interval scale, 20° is 15° hotter than 5°, but it would be misleading to claim that 20° is four times as hot as 5°.

### Continuous data

When values represent measurements (for example, height or age), the data is continuous.

### Categorical data

When values represent distinct entities (for example, names), they are discrete, and the data is categorical. The values themselves are often referred to as "categories.”

### Discrete data

See categorical data.

### Bin

Binning is a way of taking continuous data and making it discrete. When numerical values are divided into discrete sections, these sections are referred to as “bins.” Bins are usually equal in size.

### Mean

The average value.

### Median

The middle value

### Mode

The most frequent value.

## Colors

### Options

#### Categorical

Categorical colors help users map non-numeric meaning to objects in a visualization. These are designed to be visually distinct from one another. The Spectrum categorical 6-color palette has been optimized to be distinguishable for users with color vision deficiencies.

#### Sequential

Sequential colors have numeric meaning. These are a gradation of colors that go from light to dark.

Spectrum supports 5 palettes designed for use with sequential data:

- Viridis
- Magma
- Rose
- Cerulean
- Forest

#### Diverging

Diverging colors also have numeric meaning. They’re useful when dealing with negative values or ranges that have two extremes with a baseline in the middle. Diverging palettes are a pair of 2 gradations of colors that meet in the center.

Spectrum has 3 palettes designed for use with diverging data:

- Orange-yellow-seafoam
- Red-yellow-blue
- Red-blue

#### Usage guidelines

- Categorical colors are not ordered. Use these for categorical scales. Do not use these for ordinal, interval, or ratio scales.
- Sequential colors are ordered. Use these for ordinal and interval scales. It’s also acceptable to use these for ratio scales. Do not use these for categorical scales.
- Diverging colors are ordered. Use these for ordinal and ratio scales, especially when there is a meaningful middle value. These may also be used for interval scales. Do not use these for categorical scales.

#### Use categorical colors only in certain cases

Instead of giving each item a categorical color, encode them with a secondary dimension — ideally, one with few values. An exception is when the chart is paired with other charts that use color for the same categories.

- Use color to separate items into categories.
- Don't use color to separate items.

#### Use up to 6 categorical colors

It’s best to use fewer than 6 colors in the Spectrum categorical color palette. Categorical colors become more difficult to comprehend starting at 6 colors, and extremely difficult to understand at 12. If you have a need for more than 6 colors, try alternative visual encoding, such as position, which can be easier to read and scales better.

#### Don’t use sequential colors with categorical data

Sequential colors are optimized for numeric meaning. Using these colors for dimensions can undermine the numeric association and lead users to misunderstand visualizations.

#### Don’t use categorical or diverging colors with sequential data

Categorical colors are optimized for maximum differentiation. Using them for sequences (ordinal, interval, or ratio scales), even when arranged by hue, makes it more difficult for users to understand.

#### Use darker colors to show larger numbers

Dark colors can often carry a subconscious association with density. Use a palette that transitions from light to dark as the numbers get larger.

#### Crop diverging colors

Diverging colors are designed to be balanced from a central midpoint. When the maximum value in your data is not the same distance from the center as your minimum value, alter the palette to reflect those values. It’s best to crop out unneeded colors; don’t distort the palette to make them fit.

#### Be consistent with color across charts

It’s important to be consistent with color when there are multiple charts in the same view. If a color is used to represent something in one chart, all other charts should echo that relationship.
