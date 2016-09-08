// Table class
var Table = function (table, frameworks_array) {
  this.table = table;
  this.frameworks_array = frameworks_array;
};


Table.prototype.orderFrameworks = function(property, direction) {

};

Table.prototype.clearTable = function() {

};

Table.prototype.fillTable = function() {
  for(i = 0 ; i < this.frameworks_array.length ; i++) {
    var row = this.table.insertRow(-1);
    var avatarCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var watchersCell = row.insertCell(2);
    var starsCell = row.insertCell(3);
    var forksCell = row.insertCell(4);
    var contributorsCell = row.insertCell(5);
    var contributionsCell = row.insertCell(6);
    avatarCell.innerHTML = "<img src=" + this.frameworks_array[i].avatarURL + "width='42' height='42'>"
    nameCell.innerHTML = this.frameworks_array[i].nombre;
    watchersCell.innerHTML = this.frameworks_array[i].watchers.toString();
    starsCell.innerHTML = this.frameworks_array[i].stars.toString();
    forksCell.innerHTML = this.frameworks_array[i].forks.toString();
    contributorsCell.innerHTML = this.frameworks_array[i].contributors.toString();
    contributionsCell.innerHTML = this.frameworks_array[i].contributions.toString();
  }
};


