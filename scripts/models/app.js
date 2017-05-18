'use strict';

(function(module) {

  function MyProject (proj) {
    for (let keys in proj) {
      this[keys] = proj[keys]
    }
  }

  MyProject.allProjects = [];

  MyProject.prototype.toHtml = function() {
    var htmlTemplate = $('#template').html();
    var template = Handlebars.compile(htmlTemplate);
    return template(this);
  };

  MyProject.loadAll = function(project) {
    project.forEach(function(ele) {
      MyProject.allProjects.push(new MyProject(ele))
    });
  }

  MyProject.getAll = function() {
    if (localStorage.projects) {
      var lStorageMyProjects = JSON.parse(localStorage.getItem('projects'));
      MyProject.loadAll(lStorageMyProjects)
      MyProject.showProjects(lStorageMyProjects)
    } else {
      $.getJSON('./data/projects.json').then(
        function(data) {
          localStorage.setItem('projects', JSON.stringify(data))
          var lData = JSON.parse(localStorage.getItem('projects'));
          MyProject.loadAll(lData);
          MyProject.showProjects(lData)
        }
      );
    }
  };

  MyProject.displayTheGroupProjects = function() {
    return MyProject.allProjects.map(function(projects2) {
      return projects2
    })
    .reduce(function(acc, curr) {
      if (acc.indexOf(curr) === -1) {
        acc.push(curr)
      }
      return acc;
    }, []);
  }
  MyProject.getAll();
  //MyProject.displayTheGroupProjects();
  module.MyProject = MyProject;
})(window);
