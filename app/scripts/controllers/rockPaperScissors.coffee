'use strict'

angular.module('rockPaperScissorsApp')
  .controller 'rockPaperScissorsCtrl', [
    "rockPaperScissorsService"
    "$scope"
    (rockPaperScissorsService, $scope) ->
      $scope.name = "(your name here)"
      $scope.weapons = ["rock", "paper", "scissors"]

      $scope.playGame = () ->
        $scope.opponentWeapon = rockPaperScissorsService.getRandomWeapon()
        $scope.gameResult = rockPaperScissorsService.getGameResult($scope.playerWeapon, $scope.opponentWeapon)
    ]
