$( document ).ready(function() {
    alert("page loaded");
});

$( ".clickme" ).click(function() {
  $( ".bluetshirtpic" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});

$( ".clickme1" ).click(function() {
  $( ".bluetshirtpic" ).fadeIn( "slow", function() {
    // Animation complete.
  });
});