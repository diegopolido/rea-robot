angular.module('rea.model.table', []).service('Table', [function() {
  var sizeX = 5;
  var sizeY = 5;
  var table = {
    setSizes: function(x, y) {
      sizeX = x >= 0 ? x : 0;
      sizeY = y >= 0 ? y : 0;
    },
    getSizeX: function() {
      return sizeX;
    },
    getSizeY: function() {
      return sizeY;
    },
    getRangeX: function() {
      return new Array(sizeX);
    },
    getRangeY: function() {
      return new Array(sizeY);
    }
  };
  return table;
}]);