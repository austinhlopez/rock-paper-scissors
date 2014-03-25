(function() {
  'use strict';
  angular.module('rockPaperScissorsApp').factory('rockPaperScissorsService', function() {
    var rockPaperScissorsService, weapons;
    rockPaperScissorsService = {};
    weapons = ["rock", "paper", "scissors"];
    return rockPaperScissorsService.getRandomWeapon = function() {
      return Math.random() * weapons.length;
    };
  });

}).call(this);
