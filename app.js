'use strict;'
var allProjects = [];
function MyProject (proj) {
  this.name = proj.name;
  this.path = proj.path;
  this.description = proj.description;
  this.languages = proj.languages;
  allProjects.push(this);
}

//new MyProject('Rosemary Tuttle Guessing Game', 'https://rtuts67.github.io/guessing_game/', 'This was the very first project I worked on as an aspiring developer.', lang)
//new MyProject('Campfire Coffee', 'https://rtuts67.github.io/lab7/', 'This second project was heavily weigted on JavaScript.', lang)
//new MyProject('Bus Mall', 'https://rtuts67.github.io/lab11/', 'The third project involved localStorage!', lang)
//new MyProject('Home Field Advantage', 'https://rtuts67.github.io/Final_Project_HFA_201n6/', 'The final project was built for the purpose of helping prospective home-buyers look for a property in Seattle.', lang)
TODO:
//create prototype method that includes .toHTML and renders projects to the domain with jquery
//add nav bar
//create event listener for nav bar,
//add data-attributes to show certain sections based on nav bar
//create function to show what is selected in nav bar
//use jquery to hide what i dont need
