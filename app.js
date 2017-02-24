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

  MyProject.getAll = function() {
    if (localStorage.projects) {
      var lStorageMyProjects = JSON.parse(localStorage.getItem('projects'));
      MyProject.loadAll(lStorageMyProjects)
    } else {
      $.getJSON('projects.json').then(
        function(fancydata) {
          localStorage.setItem('project', JSON.stringify(fancydata))
        }
      );
    }
  };

  MyProject.getAll();
  module.MyProject = MyProject;
  //MyProject.loadAll();
  //MyProject.allProjects.forEach(function(project) {
    //$('#Projects').append(project.toHtml());
})(window);
