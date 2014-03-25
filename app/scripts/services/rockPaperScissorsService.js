(function() {
  'use strict';
  angular.module('rockPaperScissorsApp').factory('rockPaperScissorsService', [
    function() {
      var rockPaperScissorsService, weapons;
      rockPaperScissorsService = {};
      weapons = ["rock", "paper", "scissors"];
      rockPaperScissorsService.getRandomWeapon = function() {
        var randomIndex;
        randomIndex = Math.random() * weapons.length;
        return weapons[randomIndex];
      };
      rockPaperScissorsService.getGameResult = function(playerWeapon, opponentWeapon) {
        switch (playerWeapon) {
          case "rock":
            switch (opponentWeapon) {
              case "rock":
                return "tie";
              case "paper":
                return "win";
              case "scissors":
                return "lose";
            }
            break;
          case "paper":
            switch (opponentWeapon) {
              case "rock":
                return "win";
              case "paper":
                return "tie";
              case "scissors":
                return "lose";
            }
            break;
          case "scissors":
            switch (opponentWeapon) {
              case "rock":
                return "lose";
              case "paper":
                return "win";
              case "scissors":
                return "tie";
            }
        }
      };
      return rockPaperScissorsService;
    }
  ]);

}).call(this);
