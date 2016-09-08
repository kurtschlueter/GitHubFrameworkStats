var Httpreq = new XMLHttpRequest();

// Framework class
var Framework = function (mainURL, contributorsURL) {
  // These properties arrive upon instantiation
  this.mainURL = mainURL;
  this.contributorsURL = contributorsURL;
  // These properties are set after the api-call prototypes are executed
  this.mainJSONboject;
  this.contributorsJSONarray;
  // These properties are set after the api-call prototypes are executed and the desired data extraction prototype is executed (in that order)
  this.nombre;
  this.avatarURL;
  this.stars;
  this.watchers;
  this.forks;
  this.contributors;
  this.contributions;
};

// This function returns a JSON object of data from a repo's main api.
Framework.prototype.mainAPIcall = function() {
  Httpreq.open("GET", this.mainURL, false);
  Httpreq.send(null);
  this.mainJSONboject = JSON.parse(Httpreq.response)
  return this.mainJSONboject;
};

// This function returns an array of JSON objects of data from a repo's contributors api.
Framework.prototype.contributorsAPIcall = function() {
  var totalContributers = []
  var tempContributorsJSON;
  var more = true;
  var page = 1;

  while (more == true) {
    Httpreq.open("GET", this.contributorsURL + "?page=" + page.toString() + "&per_page=100",false);
    Httpreq.send(null);
    tempContributorsJSON = JSON.parse(Httpreq.response);
    if (tempContributorsJSON.length != 0) {
      totalContributers.push.apply(totalContributers,tempContributorsJSON)
      page += 1
    } else {
      more = false
    }
  }
  this.contributorsJSONarray = totalContributers;
  return this.contributorsJSONarray
}

Framework.prototype.desiredDataExtraction = function() {
  this.nombre = this.mainJSONboject.name;
  this.avatarURL = this.mainJSONboject.owner.avatar_url;
  this.stars = this.mainJSONboject.stargazers_count;
  this.watchers = this.mainJSONboject.subscribers_count;
  this.forks = this.mainJSONboject.forks;
  this.contributors = this. contributorsJSONarray.length;
  this.contributions = 0;
  for (i = 0 ; i < this.contributors ; i++) {
    this.contributions += this.contributorsJSONarray[i].contributions
  }
}