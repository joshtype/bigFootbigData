// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Chart.js JS File

// ORIGINAL DATA HOSTED AT:
// www.kaggle.com/datasets/chemcnabb/bfro-bigfoot-sighting-report

// CALL ASYNC FUNCTION, PASSING IN EACH CSV

getData();

// DEFINE ASYNCH FUNCTION TO LOAD CSVs
async function getData() {
  // fetch the csv file, wait for reply, store in vars
  const response = await fetch("dataset/day_data_uniques.csv");
  const data = await response.text();

  // split into arr, delimiters = new lines
  const rows = data.split("\n");

  rows.forEach(elt => {
    const row = elt.split(",");
    const day = row[0];
    document.getElementById("js-chart1").innerHTML = day;
  })
};


// open full size img of charts
const pyChart1 = document.getElementById("py-chart1");
const pyChart2 = document.getElementById("py-chart2");
const pyChart3 = document.getElementById("py-chart3");

pyChart1.addEventListener("click", function() {
  window.open(img1.src);
});