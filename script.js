var Httpreq = new XMLHttpRequest();

Httpreq.open("GET","https://api.github.com/repos/facebook/react",false);
Httpreq.send(null);
var reactJSON = JSON.parse(Httpreq.response);

Httpreq.open("GET","https://api.github.com/repos/angular/angular.js",false);
Httpreq.send(null);
var angularJSON = JSON.parse(Httpreq.response);

Httpreq.open("GET","https://api.github.com/repos/emberjs/ember.js",false);
Httpreq.send(null);
var emberJSON = JSON.parse(Httpreq.response);

Httpreq.open("GET","https://api.github.com/repos/vuejs/vue",false);
Httpreq.send(null);
var vueJSON = JSON.parse(Httpreq.response);

window.onload = function() {
//        //when the document is finished loading, replace everything
//        //between the <a ...> </a> tags with the value of splitText
//    document.getElementById("myLink").innerHTML='cat';
// }

  var table = document.getElementById("myTable");
  for (i = 1; i < 5; i++) {
    var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "NEW CELL1";
      cell2.innerHTML = "NEW CELL2";
      cell3.innerHTML = "NEW CELL3";
      cell4.innerHTML = "NEW CELL4";
      cell5.innerHTML = "NEW CELL5";
  }
}