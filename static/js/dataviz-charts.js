class ChartObservable {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  emit(value) {
    this.observers.forEach((observer) => observer(value));
  }
}

google.charts.load('current', { packages: ['corechart'] });

google.charts.setOnLoadCallback(() => chartDraw.emit(darkMode));

const chartDraw = new ChartObservable();
const htmlElement = document.querySelector('html');
let darkMode = htmlElement.getAttribute('data-bs-theme') === 'dark';
const themeObserver = new MutationObserver(function (mutationsList, themeObserver) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-bs-theme') {
      darkMode = htmlElement.getAttribute('data-bs-theme') === 'dark';
      setChartOptions();
      chartDraw.emit(darkMode);
    }
  }
});
themeObserver.observe(htmlElement, { attributes: true });

const chartColors = {
  textDark: '#fff',
  textLight: '#252a2e',
  lineDark: '#353a40',
  lineLight: '#e0e1e9',
  categoryColors: [
    '#368fc7',
    '#fbad26',
    '#73b847',
    '#e86363',
    '#1abdc5',
    '#aa8fe0',
    '#c97d51',
    '#89c6ed',
    '#ffce74',
    '#b9da8f',
    '#f6989b',
    '#e3aff2',
  ],
};

const textStyle = {
  color: darkMode ? chartColors.textDark : chartColors.textLight,
  fontName: 'Open Sans',
  bold: false,
  italic: false,
  fontSize: 14,
};

const legendTextStyle = {
  color: darkMode ? chartColors.textDark : chartColors.textLight,
  fontName: 'Open Sans',
  bold: false,
  italic: false,
  fontSize: 12,
};

let pieSliceBorder = darkMode ? chartColors.textLight : chartColors.textDark;

const chartOptions = {
  width: 450,
  height: 350,
  backgroundColor: {
    fill: 'transparent',
    stroke: darkMode ? chartColors.lineDark : chartColors.lineLight,
    strokeWidth: 1,
  },
  titleTextStyle: {
    color: darkMode ? chartColors.textDark : chartColors.textLight,
    fontName: 'Open Sans',
    fontSize: 18,
  },
  animation: {
    startup: true,
    duration: 1000,
    easing: 'out',
  },
  annotations: {
    textStyle: textStyle,
  },
  legend: { position: 'none' },
  hAxis: {
    textStyle: textStyle,
    titleTextStyle: textStyle,
    title: '',
    gridlines: { color: darkMode ? chartColors.lineDark : chartColors.lineLight },
    minorGridlines: { color: darkMode ? chartColors.lineDark : chartColors.lineLight },
    baselineColor: darkMode ? chartColors.lineDark : chartColors.lineLight,
  },
  vAxis: {
    textStyle: textStyle,
    titleTextStyle: textStyle,
    title: '',
    gridlines: { color: darkMode ? chartColors.lineDark : chartColors.lineLight },
    minorGridlines: { color: darkMode ? chartColors.lineDark : chartColors.lineLight },
    baselineColor: darkMode ? chartColors.lineDark : chartColors.lineLight,
  },
};

function setChartOptions() {
  chartOptions.backgroundColor.stroke = darkMode ? chartColors.lineDark : chartColors.lineLight;
  textStyle.color = darkMode ? chartColors.textDark : chartColors.textLight;
  legendTextStyle.color = darkMode ? chartColors.textDark : chartColors.textLight;
  pieSliceBorder = darkMode ? chartColors.textLight : chartColors.textDark;
  chartOptions.titleTextStyle.color = darkMode ? chartColors.textDark : chartColors.textLight;
  chartOptions.hAxis.gridlines.color = darkMode ? chartColors.lineDark : chartColors.lineLight;
  chartOptions.hAxis.minorGridlines.color = darkMode ? chartColors.lineDark : chartColors.lineLight;
  chartOptions.hAxis.baselineColor = darkMode ? chartColors.lineDark : chartColors.lineLight;
  chartOptions.vAxis.gridlines.color = darkMode ? chartColors.lineDark : chartColors.lineLight;
  chartOptions.vAxis.minorGridlines.color = darkMode ? chartColors.lineDark : chartColors.lineLight;
  chartOptions.vAxis.baselineColor = darkMode ? chartColors.lineDark : chartColors.lineLight;
}

// bar chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Element', 'Density', { role: 'style' }],
    ['Copper', 8.94, chartColors.categoryColors[0]],
    ['Silver', 10.49, chartColors.categoryColors[1]],
    ['Gold', 19.3, chartColors.categoryColors[2]],
    ['Platinum', 21.45, chartColors.categoryColors[3]],
  ]);
  const options = { ...chartOptions };
  options.title = 'Density of Precious Metals';
  options.hAxis.title = 'g/cm^3';
  options.vAxis.title = '';
  options.chartArea = { left: 100, top: 50, width: '65%', height: '70%' };
  const chart = new google.visualization.BarChart(document.getElementById('bar_chart_div'));
  chart.draw(data, options);
});

// column chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Quarter', 'Sales', { role: 'style' }],
    ['Q1', 1000, chartColors.categoryColors[0]],
    ['Q2', 1500, chartColors.categoryColors[0]],
    ['Q3', 1200, chartColors.categoryColors[0]],
    ['Q4', 1800, chartColors.categoryColors[0]],
  ]);
  const options = { ...chartOptions };
  options.title = 'Sales by Quarter';
  options.hAxis.title = '2023';
  options.vAxis.title = 'Thousands of USD';
  options.chartArea = { left: 80, top: 50, width: '70%', height: '70%' };
  const chart = new google.visualization.ColumnChart(document.getElementById('column_chart_div'));
  chart.draw(data, options);
});

// stacked bar chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', { role: 'annotation' }],
    ['2010', 10, 24, 20, 32, 18, 5, ''],
    ['2020', 16, 22, 23, 30, 16, 9, ''],
    ['2030', 28, 19, 29, 30, 12, 13, ''],
  ]);
  const options = { ...chartOptions };
  options.title = 'Sales by Category';
  options.hAxis.title = '';
  options.vAxis.title = '';
  options.chartArea = { left: 75, top: 50, width: '58%', height: '70%' };
  options.isStacked = 'percent';
  options.legend = { position: 'right', textStyle: legendTextStyle };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.BarChart(document.getElementById('stacked_bar_chart'));
  chart.draw(data, options);
});

// stacked column chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Quarter', 'Electronics', 'Clothing', 'Furniture'],
    ['Q1', 200, 100, 150],
    ['Q2', 300, 150, 200],
    ['Q3', 250, 120, 180],
    ['Q4', 400, 200, 250],
  ]);
  const options = { ...chartOptions };
  options.title = 'Sales by Quarter';
  options.hAxis.title = '2023';
  options.vAxis.title = 'Thousands of USD';
  options.chartArea = { left: 75, top: 80, width: '75%', height: '60%' };
  options.isStacked = true;
  options.legend = { position: 'top', textStyle: legendTextStyle, maxLines: 3 };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.ColumnChart(document.getElementById('stacked_column_chart'));
  chart.draw(data, options);
});

// line chart
chartDraw.subscribe((value) => {
  const data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'Guardians of the Galaxy');
  data.addColumn('number', 'The Avengers');
  data.addColumn('number', 'Transformers: Age of Extinction');
  data.addRows([
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]);
  const options = { ...chartOptions };
  options.title = 'Box Office Earnings in First Two Weeks of Opening';
  options.hAxis.title = 'Days';
  options.vAxis.title = 'Millions of USD';
  options.chartArea = { left: 75, top: 80, width: '55%', height: '60%' };
  options.legend = { position: 'right', textStyle: legendTextStyle };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));
  chart.draw(data, options);
});

// area chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ]);
  const options = { ...chartOptions };
  options.title = 'Company Performance';
  options.hAxis.title = '';
  options.vAxis.title = 'Thousands of USD';
  options.chartArea = { left: 80, top: 80, width: '70%', height: '60%' };
  options.legend = { position: 'top', textStyle: legendTextStyle };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.AreaChart(document.getElementById('area_chart_div'));
  chart.draw(data, options);
});

//  stacked area chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Year', 'Trucks', 'Ships', 'Planes', 'Trains'],
    ['2018', 1000, 400, 200, 100],
    ['2019', 1170, 460, 250, 120],
    ['2020', 660, 1120, 300, 150],
    ['2021', 1030, 540, 350, 200],
  ]);
  const options = { ...chartOptions };
  options.title = 'Transportation Mode Volume';
  options.hAxis.title = '';
  options.vAxis.title = 'Units';
  options.chartArea = { left: 80, top: 80, width: '70%', height: '60%' };
  options.isStacked = true;
  options.legend = { position: 'top', textStyle: legendTextStyle, maxLines: 3 };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.AreaChart(document.getElementById('stacked_area_chart'));
  chart.draw(data, options);
});

//  stacked area chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Year', 'Trucks', 'Ships', 'Planes', 'Trains'],
    ['2018', 1000, 400, 200, 100],
    ['2019', 1170, 460, 250, 120],
    ['2020', 660, 1120, 300, 150],
    ['2021', 1030, 540, 350, 200],
  ]);
  const options = { ...chartOptions };
  options.title = 'Transportation Mode Volume';
  options.hAxis.title = '';
  options.vAxis.title = '';
  options.chartArea = { left: 80, top: 80, width: '70%', height: '60%' };
  options.isStacked = 'percent';
  options.legend = { position: 'top', textStyle: legendTextStyle, maxLines: 3 };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.AreaChart(document.getElementById('stacked_area_pct_chart'));
  chart.draw(data, options);
});

// pie chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Pizza', 'Popularity'],
    ['Pepperoni', 33],
    ['Sausage', 26],
    ['Mushroom', 22],
    ['Hawaiian', 10],
    ['Anchovies', 9],
  ]);
  const options = { ...chartOptions };
  options.title = 'Popularity of Types of Pizza';
  options.legend = { position: 'right', textStyle: legendTextStyle };
  options.chartArea = { width: '80%', height: '80%', left: 80, top: 65 };
  options.pieSliceBorderColor = pieSliceBorder;
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
  chart.draw(data, options);
});

// donut chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]);
  const options = { ...chartOptions };
  options.title = 'My Daily Activities (in hours)';
  options.legend = { position: 'right', textStyle: legendTextStyle };
  options.pieSliceText = 'value';
  options.pieHole = 0.4;
  options.chartArea = { width: '80%', height: '80%', left: 80, top: 65 };
  options.pieSliceBorderColor = pieSliceBorder;
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.PieChart(document.getElementById('donut_chart_div'));
  chart.draw(data, options);
});

// scatter chart
chartDraw.subscribe((value) => {
  const data = google.visualization.arrayToDataTable([
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ]);
  const options = { ...chartOptions };
  options.title = 'Age vs. Weight comparison';
  options.hAxis.title = 'Age';
  options.vAxis.title = 'Weight';
  options.chartArea = { left: 80, top: 50, width: '70%', height: '70%' };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart_div'));
  chart.draw(data, options);
});

// bubble chart
chartDraw.subscribe((value) => {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Life Expectancy', 'Per Capita Income', 'Continent', 'Population'],
    // Africa
    ['Nigeria', 54.69, 5580, 'Africa', 206139587],
    ['Ethiopia', 66.6, 820, 'Africa', 114963588],
    ['Egypt', 71.99, 10550, 'Africa', 102334404],
    ['DR Congo', 60.68, 887, 'Africa', 89561403],
    ['South Africa', 64.13, 12200, 'Africa', 59308690],
    // Asia
    ['China', 76.92, 10847, 'Asia', 1439323776],
    ['India', 69.66, 2258, 'Asia', 1380004385],
    ['Indonesia', 71.85, 4449, 'Asia', 273523615],
    ['Pakistan', 67.27, 1541, 'Asia', 220892331],
    ['Bangladesh', 72.8, 1914, 'Asia', 164689383],
    // Europe
    ['Germany', 81.41, 46930, 'Europe', 83783942],
    ['United Kingdom', 81.32, 42446, 'Europe', 67886011],
    ['France', 82.3, 42658, 'Europe', 65273511],
    ['Italy', 83.5, 35462, 'Europe', 60461826],
    ['Spain', 83.03, 30394, 'Europe', 46754778],
    // North America
    ['United States', 78.99, 65297, 'North America', 331002651],
    ['Mexico', 75.05, 10277, 'North America', 128932753],
    ['Canada', 82.43, 46632, 'North America', 37742154],
    ['Cuba', 79.74, 7771, 'North America', 11326616],
    ['Haiti', 64.03, 1716, 'North America', 11402533],
    // South America
    ['Brazil', 75.88, 8711, 'South America', 212559417],
    ['Colombia', 77.29, 6282, 'South America', 50882891],
    ['Argentina', 76.67, 11601, 'South America', 45195777],
    ['Peru', 77.07, 7202, 'South America', 32971846],
    ['Venezuela', 72.06, 7434, 'South America', 28435940],
  ]);
  const options = { ...chartOptions };
  options.title = 'Comparing Life Expectancy, Income, and Population';
  options.hAxis.title = 'Life Expectancy';
  options.vAxis.title = 'Per Capita Income (USD)';
  options.vAxis.format = 'short';
  options.chartArea = { left: 75, top: 80, width: '55%', height: '60%' };
  options.legend = { position: 'right', textStyle: legendTextStyle };
  options.colors = chartColors.categoryColors;
  const chart = new google.visualization.BubbleChart(document.getElementById('bubble_chart_div'));
  chart.draw(data, options);
});
