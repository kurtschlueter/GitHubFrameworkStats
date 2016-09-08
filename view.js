// Table class
var Table = function (table, frameworks_array) {
  this.table = table;
  this.frameworks_array = frameworks_array;
  this.nameOrder = 'desc';
  this.watchersOrder = 'none';
  this.starsOrder = 'none';
  this.forksOrder = 'none';
  this.contributorsOrder = 'none';
  this.contributionsOrder = 'none';
};

Table.prototype.clearTable = function() {

    for (var i = this.table.rows.length - 1; i > 0; i--) {
      this.table.deleteRow(i);
    }
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

// Ok I know this is ridiculous. I should refactor later.
Table.prototype.orderTable = function(property) {

  if (property == 'framework') {
    if (this.nameOrder != 'desc') {
      this.frameworks_array.sort(function(a, b) {
        return a.nombre.localeCompare(b.nombre)
      });
      this.nameOrder = 'desc'
    } else {
      this.frameworks_array.sort(function(a, b) {
        return b.nombre.localeCompare(a.nombre)
      });
      this.nameOrder = 'asc'
    }
    this.watchersOrder = 'none';
    this.starsOrder = 'none';
    this.forksOrder = 'none';
    this.contributorsOrder = 'none';
    this.contributionsOrder = 'none';
  }

  if (property == 'watchers') {
    if (this.watchersOrder != 'desc') {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(b.watchers) - parseFloat(a.watchers);
      });
      this.watchersOrder = 'desc'
    } else {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(a.watchers) - parseFloat(b.watchers);
      });
      this.watchersOrder = 'asc'
    }
    this.nameOrder = 'none';
    this.starsOrder = 'none';
    this.forksOrder = 'none';
    this.contributorsOrder = 'none';
    this.contributionsOrder = 'none';
  }

  if (property == 'stars') {
    if (this.starsOrder != 'desc') {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(b.stars) - parseFloat(a.stars);
      });
      this.starsOrder = 'desc';
    } else {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(a.stars) - parseFloat(b.stars);
      });
      this.starsOrder = 'asc';
    }
    this.nameOrder = 'none';
    this.watchersOrder = 'none';
    this.forksOrder = 'none';
    this.contributorsOrder = 'none';
    this.contributionsOrder = 'none';
  }

  if (property == 'forks') {
    if (this.forksOrder != 'desc') {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(b.forks) - parseFloat(a.forks);
      });
      this.forksOrder = 'desc';
    } else {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(a.forks) - parseFloat(b.forks);
      });
      this.forksOrder = 'asc';
    }
    this.nameOrder = 'none';
    this.watchersOrder = 'none';
    this.starsOrder = 'none';
    this.contributorsOrder = 'none';
    this.contributionsOrder = 'none';
  }

  if (property == 'contributors') {
    if (this.contributorsOrder != 'desc') {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(b.contributors) - parseFloat(a.contributors);
      });
      this.contributorsOrder = 'desc';
    } else {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(a.contributors) - parseFloat(b.contributors);
      });
      this.contributorsOrder = 'asc';
    }
    this.nameOrder = 'none';
    this.watchersOrder = 'none';
    this.starsOrder = 'none';
    this.forksOrder = 'none';
    this.contributionsOrder = 'none';
  }

  if (property == 'contributions') {
    if (this.contributionsOrder != 'desc') {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(b.contributions) - parseFloat(a.contributions);
      });
      this.contributionsOrder = 'desc';
    } else {
      this.frameworks_array.sort(function(a, b) {
        return parseFloat(a.contributions) - parseFloat(b.contributions);
      });
      this.contributionsOrder = 'asc';
    }
    this.nameOrder = 'none';
    this.watchersOrder = 'none';
    this.starsOrder = 'none';
    this.forksOrder = 'none';
    this.contributorsOrder = 'none';
  }
};


