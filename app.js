'use strict;'
var allProjects = [];
//var articleView = {};
function MyProject (proj) {
  this.name = proj.name;
  this.path = proj.path;
  this.description = proj.description;
  this.languages = proj.languages;
}

MyProject.prototype.toHtml = function() {
  var $newMyProject = $('article.template').clone();
  $newMyProject.removeClass('template');
  $newMyProject.find('project-name').text(this.name);
  $newMyProject.find('project-name').attr('href',this.path);
  $newMyProject.find('description').text(this.description);
  $newMyProject.find('languages').text(this.languages);
  $('#myprojects').append(this);
  return $newMyProject;
};

myLocalProjects.forEach(function(currentArticleObj) {
  allProjects.push(new MyProject(currentArticleObj));
});

allProjects.forEach(function(project) {
  $('#myprojects').append(project.toHtml());
});

//articleView.populateli = function() {
//  $('article').not('.template').each(function() {
//    var name, description, languages, ptag;
//    name = $(this).find('name').text();
//    description = $(this).find('description').text();
  //  languages = $(this).find('languages').text();
//    ptag = '<p>' + name + description + languages + '</p>';
  //  $('#myprojects').append(ptag);
//  });
//}
//articleView.populateli();

//new MyProject('Rosemary Tuttle Guessing Game', 'https://rtuts67.github.io/guessing_game/', 'This was the very first project I worked on as an aspiring developer.', lang)
//new MyProject('Campfire Coffee', 'https://rtuts67.github.io/lab7/', 'This second project was heavily weigted on JavaScript.', lang)
//new MyProject('Bus Mall', 'https://rtuts67.github.io/lab11/', 'The third project involved localStorage!', lang)
//new MyProject('Home Field Advantage', 'https://rtuts67.github.io/Final_Project_HFA_201n6/', 'The final project was built for the purpose of helping prospective home-buyers look for a property in Seattle.', lang)
//TODO:
//create prototype method that includes .toHTML and renders projects to the domain with jquery
//add nav bar
//create event listener for nav bar,
//add data-attributes to show certain sections based on nav bar
//create function to show what is selected in nav bar
//use jquery to hide what i dont need
