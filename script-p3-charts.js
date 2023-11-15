// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Chart.js JS File

// ORIGINAL DATA HOSTED AT:
// www.kaggle.com/datasets/chemcnabb/bfro-bigfoot-sighting-report

// call function
getData();

// define async function to load classifcation grade csv
async function getData() {
  // fetch the csv file, wait for reply
  const response = await fetch("dataset/grade_class.csv");
  const data = await response.text();
  
  let a = 0, b = 0, c = 0;

  // split into arr, delimited by new lines
  const tbl = data.split("\n");
  const col = tbl[10].slice(1).split(",");

  document.getElementById("js-chart1-info").innerHTML = col;
};

// open full size img of charts
const pyChart1 = document.getElementById("py-chart1");
const pyChart2 = document.getElementById("py-chart2");
const pyChart3 = document.getElementById("py-chart3");

pyChart1.addEventListener("click", function() {
  window.open(img1.src);
});