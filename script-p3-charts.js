// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Chart.js JS File

// !! CHART FUNCTIONALITY STILL BEING RESEARCHED !! 
// Data Source: www.kaggle.com/datasets/chemcnabb/bfro-bigfoot-sighting-report

// DEFINE ASYNCH FUNCTION TO LOAD CSVs
async function pieData() {
  // fetch the csv file, wait for reply, store in vars
  const response = await fetch("dataset/grade_arr.csv");
  const data = await response.text();
  // split into arr, delimiters = new lines
  const table = data.split("\n");
  let num_A, num_B, num_C;
  table.forEach(row => {
    const col = row.split(",");
    num_A = col[0];
    num_B = col[1];
    num_C = col[2];
  })
  let arr = [];
  arr.push(num_A);
  arr.push(num_B);
  arr.push(num_C);
  return arr;
};
// PIE COLORS & HOVER FUNCTIONS (source: chartjs.org)
function colorize(opaque, hover, ctx) {
  const v = ctx.parsed;
  const c = v < -50 ? '#D60000'
    : v < 0 ? '#F46300'
    : v < 50 ? '#0358B6'
    : '#44DE28';

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

  return opaque ? c : Utils.transparentize(c, opacity);
}
function hoverColorize(ctx) {
  return colorize(false, true, ctx);
}
// PIE CHART SETTINGS
const pieConfig = {
  type: 'pie',
  data: pieData(),
  options: {
    plugins: {
      legend: false,
      tooltip: false,
    },
    elements: {
      arc: {
        backgroundColor: colorize.bind(null, false, false),
        hoverBackgroundColor: hoverColorize
      }
    }
  }
};
// search dom for canvas, attach chart to canvas
const canvas1 = document.getElementById("js-chart1-canvas");
canvas1.innerHTML = pieConfig;

// OPEN PYTHON CHARTS FULL-SIZE IN NEW TAB
const pyChart1 = document.getElementById("py-chart1");
const pyChart2 = document.getElementById("py-chart2");
const pyChart3 = document.getElementById("py-chart3");
pyChart1.addEventListener("click", function() {
  window.open(pyChart1.src, "_blank");
});
pyChart2.addEventListener("click", function() {
  window.open(pyChart2.src, "_blank");
});
pyChart3.addEventListener("click", function() {
  window.open(pyChart3.src, "_blank");
});