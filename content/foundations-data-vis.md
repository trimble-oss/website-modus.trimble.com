---
title: "Data Visualization"
layout: "single"
description: "Data visualization helps to communicate complex quantitative information."
foundations: true
url: "/foundations/data-vis/"
---

## Overview

Graphs, charts, and gauges express data visually to reveal patterns and trends that text or a table alone cannot. A data visualization story displays the relationship between a set of values--quantitative values or a quantitative and categorical value. An effective data visualization provides enough context to show the graph or chart’s purpose, whether it is to analyze, communicate, monitor, or plan.

## Colors

Use the following color sequences based on the number of data points.

![Color Sequences for Data Visualization](/img/foundations/data-vis-color-sequences.png)

The sequences are designed to show a uniformity between each data point, so that no value appears more important than another. If you need to intentionally differentiate a certain data point, you may want to use a contrasting color to represent it.

[Color sequences for more than 6 data points](/img/foundations/data-vis-color-sequences-full.png)

## Chart Anatomy

![Chart Specifications](/img/foundations/chart-specs.png)

### Title

A title describes what the graph represents. It may state the type of quantitative and categorical relationship the data presents (e.g., “2018 Account Total by Month”). A title can be omitted only if the visualization’s representation can be safely inferred from the surrounding content on the page.

### X & Y Axes

Typical graphs (with the exception of pie charts and gauges) have two axes: the horizontal x-axis and the vertical y-axis. Together, the axes outline the area where visual information is displayed.

### Axis Label

An axis label describes the quantitative or categorical value of an axis. For a quantitative label, make sure to include the units, either in the label name or in parentheses after it. For example, “Cost in Dollars” is the y-axi label title and “Time” is the x-axis label. Y-axis labels should always appear on the left of the chart. Axes labels should display at least 8 pixels from their corresponding axis.

### Grid Lines

Grid lines are points of reference aligned to data increments that divide the area of a graph into smaller regions, enhancing the ability to notice subtle differences. They make comparing and reading data easier. On bar charts, use y-axis grid lines on the left side of the chart and horizontal grid lines throughout at relevant intervals. On line graphs and scatter plot graphs, use both vertical and horizontal grid lines in desktop view; on mobile, use only horizontal lines.

### Data Representation

The position where a quantitative and categorical value meet is portrayed as either a point, bar, or line.

### Data Increments

Keep the distance between tick marks on the x and y-axis consistently spaced. This provides a predictable reference and eliminates the likelihood of distorting data. The larger the data range, the more tick marks a graph should contain.

Categorical values should be labeled in logical increments, such as consecutive months. For quantitative values, choose round numbers that fit the given data range and always include an additional increment greater than the dataset.

### Key

A key explains what the plotted data in a graph represents. We recommend using no more than five datasets in any given graph: any more will affect the comparative value of graphs. The key is generally located to the right of a graph. However, if the amount of items listed in the key exceeds that space or the span of the graph is limited, place the key below.

![Alternate Key](/img/foundations/alternate-key.png)

### Tooltips

A tooltip appears when hovering over content in a chart or graph showing the exact value represented or a point of intersection of the x and y-axes.

## Types

There are over 100 types of charts and graphs. We identified the most popular types in order to provide guidance and examples:

![Decision Chart](/img/foundations/data-vis-decision-chart.png)

### Pie or Donut Charts

Pie and donut charts illustrate numerical proportions: individual values that make up a whole data set, so users can understand the composition of a data set and how each value compares to the whole. A common way to express the part-to-whole relationship is to use percentages, with the whole equaling 100% and each of its parts equaling smaller or larger percentages corresponding to its value relative to the whole.

A donut chart is functionally identical to a pie chart with the exception of a blank center and the ability to support multiple statistics at once. Donut charts provide a better data intensity ratio to standard pie charts since the blank center can be used to display additional, related data.

![Pie Chart Examples](/img/foundations/data-vis-pie.png)

### Bar Charts

Bar charts use rectangles or bars to represent quantitative information. Bars make it easy to identify individual values and compare them as each bar is visually distinct in position, color, and/or length. The width of the bar doesn't hold meaning but its length matches a quantitative value on its axis. The base of every bar should always start at zero, otherwise it's difficult to make relative comparisons between the values. When displaying a time-series, vertical bar graphs are always used to show change over time by placing time on the x-axis so it reads chronologically from left to right.

![Simple Bar Chart Example](/img/foundations/data-vis-bar-simple.png)

The height of a bar varies based on the value for that data increment. The width of a bar is calculated based on the width of the graph and the number of bars. In other words, the more bars there are in a graph the thinner the bars will be and vice versa. Use a vertical y-axis on the left and right and evenly-spaced horizontal grid lines corresponding to values represented.

![Stacked Bar Chart Examples](/img/foundations/data-vis-bar-stacked.png)

A grouped bar graph follows the same width and height rules for a single bar graph data set. Spacing between groups of bars is larger than bars within a group. Maintain a minimum of 4px between bars within a group to meet color contrast standards.

![Grouped Bar Chart Example](/img/foundations/data-vis-bar-grouped.png)

### Line Graphs

Line graphs connect individual data values together to show the continuity from one value to the next, making it a great way to display the shape of values as they change over time. When displaying time-series, always place time on the x-axis, so it reads chronologically from left to right.

![Line Graph Examples](/img/foundations/data-vis-line.png)

### Scatter Plot Graphs

Scatter plots are used to determine whether there is a relationship between two sets of quantitative values by showing the linear correlation between them. Users can identify an individual value on the x-axis and see what happens to that value in relation to the y-axis. Considering the graph as a whole, users can see the strength and direction of the correlation. A strong correlation has a tighter grouping of values, whereas a weak correlation has a looser grouping. A positive correlation shows values trending upward from left to right, which is the opposite from a negative correlation, where values trend downward from left to right.

![Scatter Plot Graph Example](/img/foundations/data-vis-scatter.png)

### Gauges

Gauge graphs show the part-to-whole relationship of one value compared to its total.

<style>
img[alt="Gauge Example"] {
  width: 200px !important;
}
</style>

![Gauge Example](/img/foundations/data-vis-gauge.png)

[Additional Resources](https://domohelp.domo.com/hc/en-us/articles/360042935294-Best-Practices-for-Choosing-Chart-Types)

## Accessibility

### Color Reliance

Color must not be used as the sole means of conveying meaning. For example, consider deuteranopia (red-green color blindness). If a user is presented with a chart with one set of values in green and the other in red in the absence of any other non-color indicators, they will not have a way of distinguishing one from the other rendering the chart meaningless. Use other non-color indicators (such as icons, patterns, or tooltips) to help a user make sense of the chart.

### Contrast

Make sure there is 3:1 contrast ratio maintained between different values on a chart or graph. The color sequences above are specifically designed to be perceivable by users with color blindness and other visual impairments.

### Alt Text and Tooltips

When possible offer alternative text to supplement the data visualization in the form of

- Titles
- Key
- Axis labels
- Values
- Tooltips.

Make sure the text alternatives are available to be read by a screen reader.

### Animations

Sometimes a well-designed animation can enhance the usability of a graph or chart. An animated chart has the ability to convey content that cannot adequately be presented by a static image. To prevent triggering a seizure in a user with photosensitive epilepsy, make sure your animation

- Does not flash more than 3 times per second,
- Is very small and low contrast (a very small flashing image, such as a cursor, will not cause a seizure),
- Does not loop or can be disabled by the user.
