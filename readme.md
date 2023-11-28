Joshua Gregory
Professor Montgomery
Internet Programming
Final Project Readme

This site is for the Internet Programming final project. It is meant to display
how Javascript can be used in data science applications.

Bootstrap5 is used for responsiveness. Semantic tags, alt attributes, and arias are used for
accessibility and to drive user experience.

index.html
  Includes an "about" section explaining the site's purpose and general navigation to improve   
  user experience. 
  
  Below that is a web form that posts to an external directory. The web form
  uses HTML validation. The fields for birthdate and zip code are further validated using a 
  Javascript function (linked externally) that is called upon attempted submission of the form.  
  
  The calendar input for the birthday field subtracted from a Date API object. If the 
  difference is less than 18, submission is blocked. The range of zip codes are stored for each
  of the available states of residence in the required state of residence drop-down menu. If the
  input for the zip code field does not fall within the range for the selected state, form
  submission is blocked.

1-walkthru.html
  Includes a Bootstrap5 slideshow of a handful of screenshots from various stages of the
  project.

  
  