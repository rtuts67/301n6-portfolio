'use strict';

(function(module) {

  function MyProject (proj) {
    this.name = proj.name;
    this.filepath = proj.path;
    this.description = proj.description;
    this.languages = proj.languages;
  }

  MyProject.allProjects = [];

  MyProject.prototype.toHtml = function() {
    var htmlTemplate = $('#template').html();
    var template = Handlebars.compile(htmlTemplate);
    return template(this);
  };

  MyProject.loadAll = function(proj) {
    proj.forEach(function(currentProj) {
      MyProject.allProjects.push(new MyProject(currentProj));
    });
  }
  MyProject.loadAll();
  //MyProject.allProjects.forEach(function(project) {
    //$('#Projects').append(project.toHtml());
})(window);
