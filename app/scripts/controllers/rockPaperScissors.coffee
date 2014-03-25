'use strict'

angular.module('rockPaperScissorsApp')
  .controller 'rockPaperScissorsCtrl', ($scope) ->
    $scope.name = "(your name here)"
    $scope.weapons = ["rock", "paper", "scissors"]
