'use strict'

describe 'Service: RockpaperscissorsserviceCoffee', () ->

  # load the service's module
  beforeEach module 'rockPaperScissorsApp'

  # instantiate service
  RockpaperscissorsserviceCoffee = {}
  beforeEach inject (_RockpaperscissorsserviceCoffee_) ->
    RockpaperscissorsserviceCoffee = _RockpaperscissorsserviceCoffee_

  it 'should do something', () ->
    expect(!!RockpaperscissorsserviceCoffee).toBe true
