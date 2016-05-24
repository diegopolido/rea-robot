angular.module('rea.filter.range',[]).filter('range', function() {
  return function(val, range) {
    range = parseInt(range);
    for (var i = 0; i < range; i++)
      val.push(i);
    return val;
  };
});
angular.module('rea.filter.range').filter('reverseRange', function() {
  return function(val, range) {
    range = parseInt(range);
    for (var i = range - 1; i >= 0; i--)
      val.push(i);
    return val;
  };
});