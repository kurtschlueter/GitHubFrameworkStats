function launchStats() {
  var angular = new Framework("https://api.github.com/repos/angular/angular.js", "https://api.github.com/repos/angular/angular.js/contributors", "https://api.github.com/repos/angular/angular.js/stats/participation");

  angular.mainAPIcall();
  angular.contributorsAPIcall();
  angular.commitsAPIcall();
  angular.desiredDataExtraction();

  var ember = new Framework("https://api.github.com/repos/emberjs/ember.js", "https://api.github.com/repos/emberjs/ember.js/contributors", "https://api.github.com/repos/emberjs/ember.js/stats/participation");

  ember.mainAPIcall();
  ember.contributorsAPIcall();
  ember.commitsAPIcall();
  ember.desiredDataExtraction();

  var react = new Framework("https://api.github.com/repos/facebook/react", "https://api.github.com/repos/facebook/react/contributors", "https://api.github.com/repos/facebook/react/stats/participation");

  react.mainAPIcall();
  react.contributorsAPIcall();
  react.commitsAPIcall();
  react.desiredDataExtraction();

  var vue = new Framework("https://api.github.com/repos/vuejs/vue", "https://api.github.com/repos/vuejs/vue/contributors", "https://api.github.com/repos/vuejs/vue/stats/participation");

  vue.mainAPIcall();
  vue.contributorsAPIcall();
  vue.commitsAPIcall();
  vue.desiredDataExtraction();

  var tableDOM = document.getElementById("myTable");

  var tableInstance = new Table(tableDOM, [angular, ember, react, vue]);
  tableInstance.clearTable();
  tableInstance.fillTable();

  angularData.length = 0;
  emberData.length = 0;
  reactData.length = 0;
  vueData.length = 0;

  angularData.push.apply(angularData, angular.weeklyCommitsArray);
  emberData.push.apply(emberData, ember.weeklyCommitsArray);
  reactData.push.apply(reactData, react.weeklyCommitsArray);
  vueData.push.apply(vueData, vue.weeklyCommitsArray);

  chart.render();
}


function orderFrameworks() {
  tableInstance.clearTable();
  tableInstance.orderTable('framework');
  tableInstance.fillTable();
}

function orderWatchers() {
  tableInstance.clearTable();
  tableInstance.orderTable('watchers');
  tableInstance.fillTable();
}

function orderStars() {
  tableInstance.clearTable();
  tableInstance.orderTable('stars');
  tableInstance.fillTable();
}

function orderForks() {
  tableInstance.clearTable();
  tableInstance.orderTable('forks');
  tableInstance.fillTable();
}

function orderContributors() {
  tableInstance.clearTable();
  tableInstance.orderTable('contributors');
  tableInstance.fillTable();
}

function orderContributions() {
  tableInstance.clearTable();
  tableInstance.orderTable('contributions');
  tableInstance.fillTable();
}

launchStats();
