describe('Testing Robot', function() {
  var robotService, robotModel, table;

  beforeEach(module('rea'));

  beforeEach(inject(function (_RobotService_, _RobotModel_, _Table_) {
    robotService = _RobotService_;
    robotModel = _RobotModel_;
    table = _Table_;
  }));
    
  it('robotService.place()', function () {
    robotService.place(2,3,'NORTH');
    expect(robotModel.getX()).toEqual(2);
    expect(robotModel.getY()).toEqual(3);
    expect(robotModel.getFace()).toEqual(0);
    expect(robotService.getFace()).toEqual('NORTH');
  });
        
  it('robotService.left()', function () {
    robotService.place(2,3,'NORTH');
    robotService.left();
    expect(robotService.getFace()).toEqual('WEST');
  });
        
  it('robotService.right()', function () {
    robotService.place(2,3,'NORTH');
    robotService.right();
    expect(robotService.getFace()).toEqual('EAST');
  });
        
  it('robotService.move()', function () {
    robotService.place(2,3,'NORTH');
    robotService.move();
    expect(robotModel.getY()).toEqual(4);
    robotService.place(2,1,'EAST');
    robotService.move();
    expect(robotModel.getX()).toEqual(3);
  });
    
  it('robotService.report()', function () {
    robotService.place(2,3,'NORTH');
    expect(robotService.report()).toEqual("2, 3, NORTH");
  });
    
  it('table.setSizes()', function () {
    table.setSizes(3,6);
    expect(table.getSizeX()).toEqual(3);
    expect(table.getSizeY()).toEqual(6);
    table.setSizes(2,3);
    expect(table.getSizeX()).toEqual(2);
    expect(table.getSizeY()).toEqual(3);
  });
});