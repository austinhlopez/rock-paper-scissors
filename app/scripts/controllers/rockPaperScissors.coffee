'use strict'

angular.module('rockPaperScissorsApp')
  .controller 'rockPaperScissorsCtrl', [
    "rockPaperScissorsService"
    "$scope"
    (rockPaperScissorsService, $scope) ->
      $scope.name = "(your name here)"
      $scope.weapons = ["rock", "paper", "scissors"]

      $scope.playGame = () ->
        console.log rockPaperScissorsService
        $scope.opponentWeapon = rockPaperScissorsService.getRandomWeapon()
        console.log $scope.playe
        $scope.gameResult = rockPaperScissorsService.getGameResult($scope.myWeapon, $scope.opponentWeapon)
    ]
