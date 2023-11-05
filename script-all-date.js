// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Sitewide Datetime JS

// DYNAMIC DATETIME FUNCTION:
let dynamicDateTime = function() {
  // initialize new Date obj using Date API
  const currDate = new Date(document.lastModified);
  // search DOM by id for current datetime, replace with new date
  document.getElementById("update-date").innerHTML = currDate;
};
// execute function after loading html body:
dynamicDateTime();