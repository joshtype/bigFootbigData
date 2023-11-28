// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Sitewide Datetime JS

// LOGO CLICK FUNCTION:
const logoClick = function() {
  alert("It's a bigfoot!");
};

// DYNAMIC DATETIME FUNCTION:
const dynamicDateTime = function() {
  // initialize new Date obj using Date API
  const currDate = new Date(document.lastModified);
  // search DOM by id for current datetime, replace with new date
  document.getElementById("update-date").innerHTML = currDate;
};

// execute function after loading html body:
dynamicDateTime();

