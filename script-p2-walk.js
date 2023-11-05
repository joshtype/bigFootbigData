// Joshua Gregory
// Professor Montgomery
// Internet Programming
// SLideshow and Walkthrough JS

// search dom for slideshow id names
const img0 = document.getElementById("img0");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// search dom for progress marker dots
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");

// set img path to first img src 
img0.src = img1.src;

// listen for when next btn is clicked, execute process
next.addEventListener("click", function() {
  if(img0.src === img1.src) {
    // if img src set to first slide
    img0.src = "";        // empty src path
    img0.src = img2.src;  // replace with img2 src
    
    // shift color to reflect slide position
    dot1.style.backgroundColor = "white";
    dot2.style.backgroundColor = "olivedrab";
  }
  else if(img0.src === img2.src) {
    img0.src = "";
    img0.src = img3.src;
    dot2.style.backgroundColor = "white";
    dot3.style.backgroundColor = "olivedrab";
  }
  else if(img0.src === img3.src) {
    img0.src = "";
    img0.src = img4.src;
    dot3.style.backgroundColor = "white";
    dot4.style.backgroundColor = "olivedrab";
  }
  else if(img0.src === img4.src) {
    // if img src set to last slide
    img0.src = "";        // emtpy src path
    img0.src = img1.src;  // nav to img1
    
    // give appearance of resetting progress dots
    dot4.style.backgroundColor = "white";
    dot1.style.backgroundColor = "olivedrab";
  }
});

// listen for when prev btn is clicked, execute process
prev.addEventListener("click", function() {
  if(img0.src === img4.src) {
    // if img src is set to last slide
    img0.src = "";        // empty src path
    img0.src = img3.src;  // replace with img3 src
    
    // shift dot colors to reflect slide position
    dot4.style.backgroundColor = "white";
    dot3.style.backgroundColor = "olivedrab";
  }
  else if(img0.src === img3.src) {
    img0.src = "";
    img0.src = img2.src;
    dot3.style.backgroundColor = "white";
    dot2.style.backgroundColor = "olivedrab";
  }
  else if(img0.src === img2.src) {
    img0.src = "";
    img0.src = img1.src;
    dot2.style.backgroundColor = "white";
    dot1.style.backgroundColor = "olivedrab";
  }
  else if(img0.src === img1.src) {
    // if img src is set to first slide
    img0.src = "";        // empty src path
    img0.src = img4.src;  // nav to last slide
    
    // give appearance of resetting progress dots
    dot1.style.backgroundColor = "white";
    dot4.style.backgroundColor = "olivedrab";
  }
});

// view slide image at original size
img0.addEventListener("click", function() {
  if(img0.src === img1.src) {
    window.open(img1.src);
  }
  if(img0.src === img2.src) {
    window.open(img2.src);
  }
  if(img0.src === img3.src) {
    window.open(img3.src);
  }
  if(img0.src === img4.src) {
    window.open(img4.src);
  }
});