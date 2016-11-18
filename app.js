'use strict;'
var allProjects = [];
var lang = ['JavaScript', 'HTML5', 'CSS3']
function MyProject (name, path, description, languages) {
  this.name = name;
  this.path = path;
  this.description = description;
  this.languages = languages;
  allProjects.push(this);
}

new MyProject('Rosemary Tuttle Guessing Game', 'https://rtuts67.github.io/guessing_game/', 'This was the very first project I worked on as an aspiring developer.', lang)
new MyProject('Campfire Coffee', 'https://rtuts67.github.io/lab7/', 'This second project was heavily weigted on JavaScript.', lang)
new MyProject('Bus Mall', 'https://rtuts67.github.io/lab11/', 'The third project involved localStorage!', lang)
new MyProject('Home Field Advantage', 'https://rtuts67.github.io/Final_Project_HFA_201n6/', 'The final project was built for the purpose of helping prospective home-buyers look for a property in Seattle.', lang)
