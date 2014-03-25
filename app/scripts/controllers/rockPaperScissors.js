(function() {
  'use strict';
  angular.module('rockPaperScissorsApp').controller('rockPaperScissorsCtrl', [
    "rockPaperScissorsService", "$scope", function(rockPaperScissorsService, $scope) {
      $scope.name = "(your name here)";
      $scope.weapons = ["rock", "paper", "scissors"];
      return $scope.playGame = function() {
        console.log(rockPaperScissorsService);
        $scope.opponentWeapon = rockPaperScissorsService.getRandomWeapon();
        console.log($scope.playe);
        return $scope.gameResult = rockPaperScissorsService.getGameResult($scope.myWeapon, $scope.opponentWeapon);
      };
    }
  ]);

}).call(this);
