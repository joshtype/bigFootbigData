// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Web Form JS

// VALIDATE FORM: BDAY IS 18+, ZIP CODE IS REAL
const validateForm = function() {
  // store birthdate input
  const bday = document.getElementById("bday").value;
  // store state selection input
  const state = document.getElementById("states");
  // store zip code input
  const zip = document.getElementById("zip");
  // zip code error msg
  const err = "Please enter a valid zip code."
  // bday error msg
  const err2 = "Must be at least age 18."

  // validate bday is 18+ using Date API
  let inp = new Date(bday);  // pass in bday
  let year = inp.getFullYear();
  let age = (new Date().getFullYear()) - year;
  if(age < 18) {
    document.getElementById("bday-err").innerHTML = err2;
    return false;  // prevent submission
  }

  // validate zip code if state is alabama
  if(state.value === "al") {
    // alabama zip code ranges: 35004 - 36925
    if(zip.value < 35004 || zip.value > 36925){
      document.getElementById("zip-err").innerHTML = err;
      return false;  // prevent submission
    }
  }
  // validate zip code if state is florida
  if(state.value === "fl") {
    // florida zip code ranges: 32004	- 34997
    if(zip.value < 32004 || zip.value > 34997) {
      document.getElementById("zip-err").innerHTML = err;
      return false;  // prevent submission
    }
  }
  // validate zip code if state is georgia
  if(state.value === "ga") {
    // georgia zip code ranges: 30001	- 31999
    if(zip.value < 30001 ||  zip.value > 31999) {
      document.getElementById("zip-err").innerHTML = err;
      return false;  // prevent submission
    }
  }
};

// clear error when fields are clicked
const clearError = function() {
  document.getElementById("zip-err").innerHTML = "";
  document.getElementById("mail-err").innerHTML = "";
};
 