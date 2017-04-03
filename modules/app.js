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
    project.map(function(ele) {
      MyProject.allProjects.push(new MyProject(ele))
    });

  //replaced for each
  //}
    //project.forEach(function(currentProj) {
    //  MyProject.allProjects.push(new MyProject(currentProj));
  //    var namesOnly = MyProject.allProjects.map(function (currentnewProj) {
  //      return currentnewProj.name;
  //    })
  //    console.log(namesOnly)
    //});
    //TODO: add a reduce
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
