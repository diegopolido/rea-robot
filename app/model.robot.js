angular.module('rea.model.robot', []).service('RobotModel', [function() {
  var x = 0, y = 0, face = 0;
  return {
    increaseX: function() {
      x++;
    },
    decreaseX: function() {
      x--;
    },
    increaseY: function() {
      y++;
    },
    decreaseY: function() {
      y--;
    },
    increaseFace: function() {
      face++;
    },
    decreaseFace: function() {
      face--;
    },
    getX: function() {
      return x;
    },
    getY: function() {
      return y;
    },
    getFace: function() {
      return face;
    },
    setX: function(_x) {
      x = _x;
    },
    setY: function(_y) {
      y = _y;
    },
    setFace: function(_face) {
      face = _face;
    }
  };
}]);