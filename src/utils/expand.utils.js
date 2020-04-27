/* Toggle Nav with Raw JavaScript */
// Set variables for key elements
var mainNav = document.getElementById('mainNav');
var navToggle = document.getElementById('navToggle');

// Start by adding the class "collapse" to the mainNav
mainNav.classList.add('aboutExpand');

// Establish a function to toggle the class "collapse"
function mainNavToggle() {
  mainNav.classList.toggle('aboutExpand');
}

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', mainNavToggle);
