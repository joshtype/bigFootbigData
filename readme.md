Joshua Gregory
Professor Montgomery
Internet Programming
Final Project Readme

# bigFootBigData.html
## A Javascript + Python + Data Science Project

This project site is designed to demonstrate how Javascript can
be used in data science applications.

Bootstrap5 is used for responsiveness. Semantic tags, alt attributes, 
and arias are used for accessibility and to drive user experience.

Local Javascript is externally linked. Bootstrap5 CSS/JS linked via CDN.

Pages are structured using a Bootstrap5 grid. 
Header: 1 row of 12 columns
  displays site name
Nav: 1 row of 12 columns
  brand logo, site navigation, link to GitHub Repo
Main: 1 row of 12 columns
  page content
Footer: 2 rows, 1st row split into 3 columns, 2nd row spans 12 columns
  brand info, navigation, contact info, copyright info,
  Javascript used to show datetime of last time the page was modified

## index.html: Home Page
  Includes an "about" section explaining the site's purpose and general navigation to   
  improve user experience and a web form.

  The web form that posts to an external directory. The web form uses HTML validation
  and Javascript validation. The fields for birthdate and zip code are further validated 
  using a Javascript function (linked externally) that is called upon attempted submission   of the form.  

  The calendar input for the birthday field subtracted from a Date API object. If the 
  difference is less than 18, submission is blocked. The range of zip codes are stored for 
  each of the available states of residence in the required state of residence drop-down 
  menu. If the input for the zip code field does not fall within the range for the 
  selected state, form submission is blocked. Once HTML and JS validation passes, the form
  will submit.

# /1-walkthru.html: Project Walkthrough
  Includes a Bootstrap5 slideshow of a handful of screenshots from various stages of the
  project. 

  Includes a link to the original dataset hosted at Kaggle.com.

  The walkthrough is organized into two sections: Python steps and Javascript steps.
  A description is included of the steps taken in Python to prepare, summarize, and export 
  data to csv. An iFrame can be interacted with that displays the Python code. The csv
  files are also provided for download. Javascript steps are still in progress. They will
  detail the steps used to build Chart.js graphs and Tensorflow.js predictions.

# /2-visualize.html: Data Visualizations
  Includes 3 canvas elements that will display Chart.js graphs (being researched).

  Below that are the images of graphs created using Python and Maptplotlib.pyplot from the 
  same data that the Chart.js are using. Code tags are used to display the Matplotlib 
  methods used. Once the Chart.js graphs are debugged, users will be able to compare them
  to the Python graphs. Chart.js provides more visually appealing and interactive charts
  that provide vastly improved UX compared to static images of Python graphs.

# /3-predict.html: Data Predictions
  Still being researched. Will include predictions based on the same data with which the 
  graphs were created. These predictions will be made using Javascript through the library
  Tensorflow.js that combines DOM functionality with Tensorflow's neural network model 
  training. Once complete, the model will be able to predict the best day of the month
  and month of the year for sighting bigfoots. A possible addition will be best
  latitude and longitude. However, inconstistencies have been discovered the latitude
  and longitude datasets that need to be resolved.