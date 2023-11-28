// Joshua Gregory
// Professor Montgomery
// Internet Programming
// Tensorflow.js Script

// !! TENSOR FUNCTIONALITY STILL BEING RESEARCHED !!

// define tensor function to train a model
const getPrediction = function() {
  
  // adapted from <www.tensorflow.org/js/tutorials/setup#browser_setup>
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

  // xs & ys params = ( [training data], [number epochs, batch size] )
  // size of training data must = number epochs
  const xs = tf.tensor2d([-1,0,1,2], [4, 1]);
  const ys = tf.tensor2d([5,7,9,11], [4, 1]);

  model.fit(xs, ys, {epochs: 10}).then(() => {
    document.getElementById("pred1").innerHTML = 
      "Prediction based on training data = " + 
      model.predict(tf.tensor2d([5], [1, 1]));
  });
};
// call prediction function
getPrediction();