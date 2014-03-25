'use strict'

angular.module('rockPaperScissorsApp')
  .factory 'rockPaperScissorsService', () ->
    rockPaperScissorsService = {}

    weapons = ["rock", "paper", "scissors"]

    rockPaperScissorsService.getRandomWeapon = () ->
      randomIndex = Math.random() * (weapons.length)
      return weapons[randomIndex]

    rockPaperScissorsService.getGameResult = (playerWeapon, opponentWeapon) ->
      switch playerWeapon
        case "rock"
          switch opponentWeapon
            case "rock"
              return "tie"
            case "paper"
              return "win"
            case "scissors"
              return "lose"
        case "paper"
          switch opponentWeapon
            case "rock"
              return "win"
            case "paper"
              return "tie"
            case "scissors"
              return "lose"
        case "scissors"
          switch opponentWeapon
            case "rock"
              return "lose"
            case "paper"
              return "win"
            case "scissors"
              return "tie"
