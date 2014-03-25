(function() {
  'use strict';
  angular.module('rockPaperScissorsApp').controller('rockPaperScissorsCtrl', function($scope) {
    $scope.name = "(your name here)";
    return $scope.weapons = ["rock", "paper", "scissors"];
  });

}).call(this);
