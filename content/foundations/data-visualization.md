---
title: Data Visualization
layout: single
description: Data visualization helps to communicate complex quantitative information.
foundations: true
group: foundations
aliases:
  - "/foundations/data-vis/"
---

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="/js/dataviz-charts.js"></script>

<figure class="text-center mb-3">
  <blockquote class="blockquote">
  <p>The purpose of visualization is insight, not pictures.
</p>
</blockquote>
  <figcaption class="blockquote-footer">
    Ben Shneiderman</figcaption>
</figure>

<p class="lead mb-5">
Data visualization empowers designers to transform raw data into engaging visual narratives, transcending static imagery to create interactive visuals that resonate with audiences. This requires understanding data structures, storytelling techniques, and visual perception psychology.</p>

## Data visualization principles

**Maximize Data-Ink Ratio:** Remove non-essential elements and maximize the proportion of ink used to represent data, minimizing clutter and enhancing clarity in the visualization.

**Provide Context:** Include contextual information such as labels, scales, and reference lines to aid interpretation and provide a clear understanding of the data's significance within its broader context.

**Use Informative Titles and Labels:** Craft titles and labels that succinctly convey the main message or key insights of the visualization, guiding viewers in interpreting the data accurately.

**Promote Data Integrity:** Ensure the accuracy and integrity of the data being visualized, clearly indicating sources, methodologies, and any limitations or uncertainties associated with the data.

**Strive for Simplicity:** Simplify complex datasets and visualizations to their essential components, making them more accessible and intuitive for viewers to interpret and comprehend.

**Encourage Exploration:** Design interactive visualizations that allow viewers to interact with the data dynamically, enabling exploration, analysis, and discovery of insights tailored to individual interests and inquiries.

## Types of data visualization

Data visualization encompasses a wide array of techniques and tools, each tailored to specific data types and objectives. Understanding the strengths and limitations of different visualization types is crucial for selecting the most appropriate method to convey data effectively. Common types of data visualization include:

### Bar and Column Graphs

<div class="d-flex flex-column flex-xxl-row my-4">
  <div id="bar_chart_div"></div>
  <div class="ms-xxl-4" id="column_chart_div"></div>
</div>

Bar and column graphs excel in comparing discrete categories or showing the distribution of a single categorical variable. Use bar graphs when categories are non-sequential or unordered, and column graphs when the categories follow a logical sequence. These graphs are effective for visualizing changes over time, comparing quantities between different groups, or displaying rankings. For example, a bar graph can display sales figures for various products, while a column graph can illustrate the performance of different departments over quarters.

### Stacked Bar and Column Graphs

<div class="d-flex flex-column flex-xxl-row my-4">
  <div id="stacked_bar_chart"></div>
  <div class="ms-xxl-4" id="stacked_column_chart"></div>
</div>

Stacked bar and column graphs are effective for illustrating the composition of a whole, where each bar or column is divided into segments representing different categories. They are suitable for comparing the total size of multiple categories while also showing the contribution of each category to the whole. Stacked bar graphs are often used in business reports to display revenue breakdown by product categories over time, while stacked column graphs can visualize demographic data such as age distribution within different regions.

### Line and Area Graphs

<div class="d-flex flex-column flex-xxl-row my-4">
  <div id="line_chart_div"></div>
  <div class="ms-xxl-4" id="area_chart_div"></div>
</div>

Line and area graphs are ideal for displaying trends and patterns over time or continuous data sets. Use line graphs to show trends or changes in data over time, while area graphs are suitable for highlighting the magnitude of change in addition to trends. These graphs are commonly employed in tracking stock prices, visualizing temperature fluctuations, or displaying population growth over years. Line graphs are particularly effective when illustrating changes in variables such as sales revenue over months, while area graphs can emphasize cumulative data trends, such as total sales over time.

### Stacked Area Graphs

<div class="d-flex flex-column flex-xxl-row my-4">
  <div id="stacked_area_chart"></div>
  <div class="ms-xxl-4" id="stacked_area_pct_chart"></div>
</div>

Stacked area graphs are similar to regular area graphs but depict multiple data series stacked on top of each other, showing the cumulative contribution of each series to the whole. They are useful for illustrating changes in the composition of a total over time and are effective for highlighting both individual trends and the overall trend of the dataset. Stacked area graphs find applications in visualizing trends in market share over time, tracking budget allocations across different departments, or displaying the distribution of energy sources in a country's energy production portfolio.

### Pie and Donut Charts

<div class="d-flex flex-column flex-xxl-row my-4">
  <div id="pie_chart_div"></div>
  <div class="ms-xxl-4" id="donut_chart_div"></div>
</div>

Pie charts are best used to illustrate parts of a whole, where each category represents a proportion of the total. They are effective for displaying percentages or proportions and are useful when the data consists of a few distinct categories. However, they can become cluttered and difficult to interpret with too many categories or when the differences in proportions are subtle. Pie charts are commonly used to represent market share distribution, budget allocations, or demographic distributions.

### Scatter and Bubble Charts

<div class="d-flex flex-column flex-xxl-row my-4">
  <div id="scatter_chart_div"></div>
  <div class="ms-xxl-4" id="bubble_chart_div"></div>
</div>

Scatter and bubble charts are ideal for visualizing relationships between two or more variables, showing how one variable impacts another. Scatter charts plot individual data points on a two-dimensional grid, making them suitable for identifying correlations, trends, or outliers in the data. Bubble charts extend scatter charts by adding a third variable, represented by the size of the bubbles, to convey additional information. Scatter and bubble charts are commonly used in scientific research, financial analysis, and social sciences to explore relationships between variables, such as the correlation between income and education level or the impact of advertising spending on sales.

## Colors

Colors play a crucial role in data visualization, enhancing the visual appeal of charts and graphs while conveying information effectively. The choice of colors can influence how viewers interpret and engage with the data, making it essential to select colors that align with the data type, audience, and intended message. When choosing colors for data visualization, consider the following color schemes and guidelines.

### Text and Gridline Colors

When designing data visualizations,  text should be readable on both light and dark backgrounds.  Gridlines should be subtle and not overpower the data.  The following table shows the recommended text and gridline colors for light and dark backgrounds from the Modus color palette.

<table class="table table-bordered table-sm mx-auto align-middle" style="max-width: 500px;">
  <thead>
    <tr>
      <th colspan="2" class="text-center">Light Background</th>
      <th colspan="2" class="text-center">Dark Background</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="25%" class="text-center" style="background-color: #fff; color: #252A2E;">Text</td>
      <td class="text-center" style="background-color: #fff; color: #252A2E;">Grid</td>
      <td class="text-center" style="background-color: #000; color: #fff;">Text</td>
      <td class="text-center" style="background-color: #000; color: #fff;">Grid</td>
    </tr>
    <tr>
      <td style="height: 30px; background-color: #252A2E;"></td>
      <td style="height: 30px; background-color: #E0E1E9;"></td>
      <td style="height: 30px; background-color: #FFF;"></td>
      <td style="height: 30px; background-color: #353A40;"></td>
    </tr>
    <tr>
      <td class="text-center" style="background-color: #fff; color: #252A2E;">#252A2E</td>
      <td class="text-center" style="background-color: #fff; color: #252A2E;">#E0E1E9</td>
      <td class="text-center" style="background-color: #000; color: #fff;">#FFFFFF</td>
      <td class="text-center" style="background-color: #000; color: #fff;">#353A40</td>
    </tr>
    <tr>
      <td class="text-center" style="background-color: #fff; color: #252A2E;">Trimble Gray</td>
      <td class="text-center" style="background-color: #fff; color: #252A2E;">Gray 0</td>
      <td class="text-center" style="background-color: #000; color: #fff;">White</td>
      <td class="text-center" style="background-color: #000; color: #fff;">Gray 9</td>
    </tr>
  </tbody>
</table>

### Categorical Colors

Categorical color schemes are suitable for data sets with distinct, non-ordered categories. They employ a range of colors with high contrast to differentiate between categories effectively. Use categorical color schemes when visualizing data such as types of fruits, different departments in a company, or political party affiliations. The goal is to ensure that each category is easily distinguishable from the others without implying any inherent order or relationship between them.

<color-ramp colors="#368fc7,#fbad26,#73b847,#e86363,#1abdc5,#aa8fe0,#c97d51,#89c6ed,#ffce74,#b9da8f,#f6989b,#e3aff2" steps="8" discrete="true">
</color-ramp>

### Sequential Colors

Sequential color schemes are ideal for representing ordered or continuous data sets, where values progress from low to high or vice versa. These schemes typically utilize a single hue that varies in saturation or brightness to indicate magnitude or progression. Sequential color schemes are commonly used in visualizations such as heatmaps, where darker shades represent lower values and lighter shades represent higher values, or in choropleth maps to depict population density or temperature gradients.

<color-ramp colors="#fbad26,#368fc7" steps="8">
</color-ramp>

<color-ramp colors="#fff,#368fc7" steps="8">
</color-ramp>

<color-ramp colors="#fff,#e86363" steps="8">
</color-ramp>

<color-ramp colors="#fff,#73b847" steps="8">
</color-ramp>

### Divergent Colors

Divergent color schemes are effective for visualizing data sets with a meaningful midpoint or a point of comparison between two extremes. These schemes use contrasting hues to emphasize the positive and negative deviations from the midpoint. Divergent color schemes are often employed in visualizations such as correlation matrices, where colors represent the strength and direction of correlations between variables, or in election result maps to highlight shifts in voter preferences from one election to another. The goal is to clearly distinguish between values above and below the midpoint while ensuring that the midpoint itself is visually prominent.

<color-ramp colors="#e86363,#fff,#73b847" steps="7">
</color-ramp>
<color-ramp colors="#368fc7,#fff,#e86363" steps="7">
</color-ramp>

<color-ramp colors="#fbad26,#fff,#73b847" steps="7">
</color-ramp>

### Color Usage Guidelines

**Use categorical colors only in certain cases:** Reserve categorical colors for data sets with distinct, non-ordered categories where each category needs to be easily distinguishable. Overuse of categorical colors can lead to visual clutter and confusion.

**Use up to 8 categorical colors:** Limit the number of categorical colors to 8 or fewer to ensure clarity and avoid overwhelming the audience with excessive color variation. Beyond this threshold, it becomes challenging for viewers to differentiate between colors, diminishing the effectiveness of the visualization.

**Don't use sequential colors with categorical data:** Avoid using sequential color schemes, which represent ordered or continuous data, with categorical data, as it can mislead viewers into perceiving a false order or progression among categories that don't exist.

**Don't use categorical or diverging colors with sequential data:** Similarly, refrain from using categorical or diverging color schemes with sequential data, as this can obscure the natural progression or continuity of the data, leading to misinterpretation.

**Use darker colors to show larger numbers:** When using sequential color schemes to represent ordered data, employ darker colors to denote larger numbers or higher values. This ensures that viewers can easily discern the magnitude or intensity of the data represented by the colors.

**Crop diverging colors:** Trim the range of colors in diverging color schemes to highlight the most relevant data points or to avoid emphasizing extreme values excessively. This prevents distortion and ensures that the focus remains on the data's central trends or comparisons.

**Be consistent with color across charts:** Maintain consistency in color usage across multiple charts or visualizations within the same presentation or report to facilitate easier comprehension and comparison. Consistency helps viewers associate specific colors with particular data categories or meanings consistently throughout the visualization.

## Chart Elements

### Titles

A well-crafted title should be concise, descriptive, and informative, capturing the main message or purpose of the visualization. Titles should be placed prominently at the top of the chart, using a larger font size and bold styling to distinguish them from other text elements.

| Title Typography |
| --- |
| Font Family: Open Sans |
| Font Weight: Bold, 700, Semibold, 600 |
| Font Size: 18 px/ 1.125 rem |
| Case: Title |

### Axes

Axes provide a frame of reference for the data, indicating the scale, units, and range of values represented in the visualization. Axes should be clearly labeled with descriptive titles and units of measurement, using legible fonts and appropriate font sizes to ensure readability.

| Axis Label Typography |
| --- |
| Font Family: Open Sans |
| Font Weight: Regular, 400 |
| Font Size: 14 px/ 0.875 rem |
| Case: Sentence |

### Legends

Legends are essential for interpreting the colors, symbols, or patterns used in the visualization to represent different data categories or series. Legends should be positioned under the title if possible, or to the right of the chart if the legend is too long.  The legend should use a smaller font size than the title and axis labels.

| Legend Typography |
| --- |
| Font Family: Open Sans |
| Font Weight: Regular, 400 |
| Font Size: 12 px/ 0.75 rem |
| Case: Sentence |

### Gridlines

Gridlines help viewers gauge the scale of the data and make comparisons between data points. Gridlines should be subtle and unobtrusive, using light colors and be used sparingly to avoid visual clutter. Gridlines should be aligned with the axes to guide viewers in interpreting the data accurately.

<script src="/js/modus-dataviz-colors.js"></script>
