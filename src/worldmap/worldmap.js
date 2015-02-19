angular.module('ui.bootstrap.worldmap', [])
  .directive('jvectormap', function () {
    return {
      restrict: 'A', scope: {options: '='}, link: function (scope, ele) {
        var options;
        return options = scope.options, ele.vectorMap(options);
      }
    };
  });
