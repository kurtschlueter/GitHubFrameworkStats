var frameworks = []
var angularTotalContributers = []
var angularTempContributorsJSON;
var more = true;
var page = 1;

var Httpreq = new XMLHttpRequest();

while (more == true) {
  Httpreq.open("GET","https://api.github.com/repos/angular/angular.js/contributors?page=" + page.toString() + "&per_page=100",false);
  Httpreq.send(null);
  angularTempContributorsJSON = JSON.parse(Httpreq.response);
  if (angularMasterContributorsJSON.length != 0) {
    angularTotalContributers.push.apply(angularTotalContributers,angularTempContributorsJSON)
    page += 1
  } else {
    more = false
  }
}





// Httpreq.open("GET","https://api.github.com/repos/facebook/react",false);
// Httpreq.send(null);
// var reactJSON = JSON.parse(Httpreq.response);
// frameworks[0] = reactJSON

// Httpreq.open("GET","https://api.github.com/repos/angular/angular.js",false);
// Httpreq.send(null);
// var angularJSON = JSON.parse(Httpreq.response);
// frameworks[1] = angularJSON

// Httpreq.open("GET","https://api.github.com/repos/emberjs/ember.js",false);
// Httpreq.send(null);
// var emberJSON = JSON.parse(Httpreq.response);
// frameworks[2] = emberJSON

// Httpreq.open("GET","https://api.github.com/repos/vuejs/vue",false);
// Httpreq.send(null);
// var vueJSON = JSON.parse(Httpreq.response);
// frameworks[3] = vueJSON

// window.onload = function() {

//   var table = document.getElementById("myTable");

//   for (i = 0; i < 4; i++) {
//     var row = table.insertRow(i+1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//     cell1.innerHTML = "<img src=" + frameworks[i].owner.avatar_url + "width='42' height='42'>"
//     cell2.innerHTML = frameworks[i].name;
//     cell3.innerHTML = frameworks[i].subscribers_count.toString();
//     cell4.innerHTML = frameworks[i].stargazers_count.toString();
//     cell5.innerHTML = frameworks[i].forks.toString();
//   }
// }

// window.setInterval(function(){
//   console.log('s')
// }, 5000);