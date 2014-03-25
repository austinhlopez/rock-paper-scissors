'use strict';

describe('Service: RockpaperscissorsserviceCoffee', function () {

  // load the service's module
  beforeEach(module('controllersApp'));

  // instantiate service
  var RockpaperscissorsserviceCoffee;
  beforeEach(inject(function (_RockpaperscissorsserviceCoffee_) {
    RockpaperscissorsserviceCoffee = _RockpaperscissorsserviceCoffee_;
  }));

  it('should do something', function () {
    expect(!!RockpaperscissorsserviceCoffee).toBe(true);
  });

});
