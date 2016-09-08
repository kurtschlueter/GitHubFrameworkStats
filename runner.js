var angular = new Framework("https://api.github.com/repos/angular/angular.js", "https://api.github.com/repos/angular/angular.js/contributors");

angular.mainAPIcall();
angular.contributorsAPIcall();
angular.desiredDataExtraction();

var ember = new Framework("https://api.github.com/repos/emberjs/ember.js", "https://api.github.com/repos/emberjs/ember.js/contributors");

ember.mainAPIcall();
ember.contributorsAPIcall();
ember.desiredDataExtraction();

var react = new Framework("https://api.github.com/repos/facebook/react", "https://api.github.com/repos/facebook/react/contributors");

react.mainAPIcall();
react.contributorsAPIcall();
react.desiredDataExtraction();

var vue = new Framework("https://api.github.com/repos/vuejs/vue", "https://api.github.com/repos/vuejs/vue/contributors");

vue.mainAPIcall();
vue.contributorsAPIcall();
vue.desiredDataExtraction();

var tableDOM = document.getElementById("myTable");

tableInstance = new Table(tableDOM, [angular, ember, react, vue]);
tableInstance.fillTable();

// window.setInterval(function(){
//   console.log('s')
// }, 5000);