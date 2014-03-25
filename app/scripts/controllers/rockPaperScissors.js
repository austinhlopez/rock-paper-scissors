(function() {
  'use strict';
  angular.module('rockPaperScissorsApp').controller('rockPaperScissorsCtrl', [
    "rockPaperScissorsService", "$scope", function(rockPaperScissorsService, $scope) {
      $scope.name = "(your name here)";
      $scope.weapons = ["rock", "paper", "scissors"];
      return $scope.playGame = function() {
        $scope.opponentWeapon = rockPaperScissorsService.getRandomWeapon();
        return $scope.gameResult = rockPaperScissorsService.getGameResult($scope.playerWeapon, $scope.opponentWeapon);
      };
    }
  ]);

}).call(this);
