angular.module('rea.services.robot', ['rea.model.table', 'rea.model.robot']).service('RobotService', ['Table', 'RobotModel', function(Table, RobotModel) {
  /*
   * The DIRECTIONS array has been using like a ring
   * The begin and the end positions are like next to each other
   * So turning left/right in that positions causes 
   * refering the face index variable to 0 or 3
   */
  var DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

  var robotService = {
    place: function(xx, yy, ff) {
      xx = xx < 0 ? 0 : xx;
      yy = yy < 0 ? 0 : yy;
      xx = xx > Table.getSizeX() - 1 ? Table.getSizeX() - 1 : xx;
      yy = yy > Table.getSizeY() - 1 ? Table.getSizeY() - 1 : yy;
      RobotModel.setX(xx);
      RobotModel.setY(yy);
      RobotModel.setFace(DIRECTIONS.indexOf(ff));
    },
    move: function() {
      switch (DIRECTIONS[RobotModel.getFace()]) {
        case 'NORTH':
          if (RobotModel.getY() < Table.getSizeY() - 1) {
            RobotModel.increaseY();
          }
          break;
        case 'SOUTH':
          if (RobotModel.getY() > 0) {
            RobotModel.decreaseY();
          }
          break;
        case 'EAST':
          if (RobotModel.getX() < Table.getSizeX() - 1) {
            RobotModel.increaseX();
          }
          break;
        case 'WEST':
          if (RobotModel.getX() > 0) {
            RobotModel.decreaseX();
          }
          break;
      }
    },
    left: function() {
      if (RobotModel.getFace() > 0) {
        RobotModel.decreaseFace();
      } else {
        /*
         * if the robot turn left in NORTH position
         * it will turn to WEST position
         */
        RobotModel.setFace(3);
      }
    },
    right: function() {
      if (RobotModel.getFace() < 3) {
        RobotModel.increaseFace();
      } else {
        RobotModel.setFace(0);
      }
    },
    getFace: function() {
      return DIRECTIONS[RobotModel.getFace()];
    },
    report: function() {
      return RobotModel.getX() + ", " + RobotModel.getY() + ", " + DIRECTIONS[RobotModel.getFace()];
    },
    directions: function() {
      return DIRECTIONS;
    }
  };
  return robotService;
}]);