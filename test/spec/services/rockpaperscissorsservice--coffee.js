(function() {
  'use strict';
  describe('Service: RockpaperscissorsserviceCoffee', function() {
    var RockpaperscissorsserviceCoffee;
    beforeEach(module('rockPaperScissorsApp'));
    RockpaperscissorsserviceCoffee = {};
    beforeEach(inject(function(_RockpaperscissorsserviceCoffee_) {
      return RockpaperscissorsserviceCoffee = _RockpaperscissorsserviceCoffee_;
    }));
    return it('should do something', function() {
      return expect(!!RockpaperscissorsserviceCoffee).toBe(true);
    });
  });

}).call(this);
