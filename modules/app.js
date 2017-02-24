'use strict';

(function(module) {

  function MyProject (proj) {
    this.name = proj.name;
    this.filepath = proj.filepath;
    this.description = proj.description;
    this.languages = proj.languages;
  }

  MyProject.allProjects = [];

  MyProject.prototype.toHtml = function() {
    var htmlTemplate = $('#template').html();
    var template = Handlebars.compile(htmlTemplate);
    return template(this);
  };

  MyProject.loadAll = function(project) {
    project.forEach(function(currentProj) {
      MyProject.allProjects.push(new MyProject(currentProj));
    });
  }

  MyProject.getAll = function() {
    if (localStorage.projects) {
      var lStorageMyProjects = JSON.parse(localStorage.getItem('projects'));
      MyProject.loadAll(lStorageMyProjects)
    } else {
      $.getJSON('./data/projects.json').then(
        function(data) {
          localStorage.setItem('projects', JSON.stringify(data))
          MyProject.loadAll(data);
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
