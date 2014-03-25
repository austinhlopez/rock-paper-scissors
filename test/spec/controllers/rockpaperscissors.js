(function() {
  'use strict';
  describe('Controller: RockpaperscissorsctrlCtrl', function() {
    var RockpaperscissorsctrlCtrl, scope;
    beforeEach(module('rockPaperScissorsApp'));
    RockpaperscissorsctrlCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      return RockpaperscissorsctrlCtrl = $controller('RockpaperscissorsctrlCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
