var statsTableInstance;
var summariesTableInstance;

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

  var statsTableDOM = document.getElementById("statsTable");
  statsTableInstance = new StatsTable(statsTableDOM, [angular, ember, react, vue]);

  statsTableInstance.clearTable();
  statsTableInstance.fillTable();

  var summariesTableDOM = document.getElementById("summariesTable");
  summariesTableInstance = new SummariesTable(summariesTableDOM);

  summariesTableInstance.fillContent('angular');

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
  statsTableInstance.clearTable();
  statsTableInstance.orderTable('framework');
  statsTableInstance.fillTable();
}

function orderWatchers() {
  statsTableInstance.clearTable();
  statsTableInstance.orderTable('watchers');
  statsTableInstance.fillTable();
}

function orderStars() {
  statsTableInstance.clearTable();
  statsTableInstance.orderTable('stars');
  statsTableInstance.fillTable();
}

function orderForks() {
  statsTableInstance.clearTable();
  statsTableInstance.orderTable('forks');
  statsTableInstance.fillTable();
}

function orderContributors() {
  statsTableInstance.clearTable();
  statsTableInstance.orderTable('contributors');
  statsTableInstance.fillTable();
}

function orderContributions() {
  statsTableInstance.clearTable();
  statsTableInstance.orderTable('contributions');
  statsTableInstance.fillTable();
}

function selectAngular() {
  summariesTableInstance.fillContent('angular');
}

function selectEmber() {
  summariesTableInstance.fillContent('ember');
}

function selectReact() {
  summariesTableInstance.fillContent('react');
}

function selectVue() {
  summariesTableInstance.fillContent('vue');
}

launchStats();
