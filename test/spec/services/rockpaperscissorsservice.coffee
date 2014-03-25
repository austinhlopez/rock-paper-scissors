'use strict'

describe 'Service: Rockpaperscissorsservice', () ->

  # load the service's module
  beforeEach module 'rockPaperScissorsApp'

  # instantiate service
  Rockpaperscissorsservice = {}
  beforeEach inject (_Rockpaperscissorsservice_) ->
    Rockpaperscissorsservice = _Rockpaperscissorsservice_

  it 'should do something', () ->
    expect(!!Rockpaperscissorsservice).toBe true
