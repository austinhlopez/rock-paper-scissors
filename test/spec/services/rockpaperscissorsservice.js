(function() {
  'use strict';
  describe('Service: Rockpaperscissorsservice', function() {
    var Rockpaperscissorsservice;
    beforeEach(module('rockPaperScissorsApp'));
    Rockpaperscissorsservice = {};
    beforeEach(inject(function(_Rockpaperscissorsservice_) {
      return Rockpaperscissorsservice = _Rockpaperscissorsservice_;
    }));
    return it('should do something', function() {
      return expect(!!Rockpaperscissorsservice).toBe(true);
    });
  });

}).call(this);
