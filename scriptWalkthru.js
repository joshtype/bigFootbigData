// Joshua Gregory
// Professor Montgomery
// Internet Programming
// SLideshow and Walkthrough JS

// VIEW SLIDE IMAGES IN NEW TAB
// search dom for each slide img
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");

// add an event listener to each slide
slide1.addEventListener("click", function() {
  // that opens the src in a new tab when clicked
  window.open(slide1.src, "_blank");
});
slide2.addEventListener("click", function() {
  window.open(slide2.src, "_blank");
});
slide3.addEventListener("click", function() {
  window.open(slide3.src, "_blank");
});
slide4.addEventListener("click", function() {
  window.open(slide4.src, "_blank");
});
slide5.addEventListener("click", function() {
  window.open(slide5.src, "_blank");
});

