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
