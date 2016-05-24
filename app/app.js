var app = angular.module('rea', ['rea.services.robot', 'rea.model.table', 'rea.filter.range', 'rea.model.robot']);

app.controller('RobotController', ['$scope', 'RobotService', 'Table', 'RobotModel', function($scope, RobotService, Table, RobotModel) {
  $scope.robotService = RobotService;
  $scope.table = Table;
  $scope.currentPosition = function(ix, iy) {
    return RobotModel.getX() == ix && RobotModel.getY() == iy;
  };
  $scope.run = function() {
    var commands = $scope.inputTextarea.split("\n");
    for (var c = 0; c < commands.length; c++) {
      var cmd = commands[c];
      if (cmd.indexOf("PLACE") > -1) {
        var args = cmd.split("PLACE ")[1].split(",");
        RobotService.place(args[0], args[1], args[2]);
      }
      if (cmd.indexOf("MOVE") > -1) {
        RobotService.move();
      }
      if (cmd.indexOf("LEFT") > -1) {
        RobotService.left();
      }
      if (cmd.indexOf("RIGHT") > -1) {
        RobotService.right();
      }
      if (cmd.indexOf("REPORT") > -1) {
        $scope.outputTextarea = RobotService.report();
      }
    }
  };
}]);