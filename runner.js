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

window.onload = function() {

  var table = document.getElementById("myTable");

  for (i = 0; i < 4; i++) {
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = "<img src=" + frameworks[i].owner.avatar_url + "width='42' height='42'>"
    cell2.innerHTML = frameworks[i].name;
    cell3.innerHTML = frameworks[i].subscribers_count.toString();
    cell4.innerHTML = frameworks[i].stargazers_count.toString();
    cell5.innerHTML = frameworks[i].forks.toString();
  }
}

// window.setInterval(function(){
//   console.log('s')
// }, 5000);