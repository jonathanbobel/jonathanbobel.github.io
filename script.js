$(document).ready(function() {
	// Get references to the form elements
	var $breakfast = $('#breakfast');
	var $lunch = $('#lunch');

	// Listen for changes to the form elements
	$breakfast.on('change', generateSentence);
	$lunch.on('change', generateSentence);

	// Function to generate the sentence
  function generateSentence() {
    // Get the selected values from the form elements
    var breakfast = $breakfast.val();
    var lunch = $lunch.val();

    // Check if both options have been selected
    setTimeout(function () {
      // Check if both breakfast and lunch are selected
      if (breakfast && lunch) {
        // Build the sentence
        var sentence = "For breakfast, I'd like to have " + breakfast + ". For lunch, I'd like to have " + lunch + ".";
        // Update the result element
        $('#result').text(sentence);
      }
    }, 500);
  }
});