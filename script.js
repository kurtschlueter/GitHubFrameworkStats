// $(document).ready(function () {
  console.log('page loaded')



var Httpreq = new XMLHttpRequest(); // a new request
Httpreq.open("GET",'https://api.github.com/users/technoweenie',false);
Httpreq.send(null);
console.log(Httpreq.responseText);



// });