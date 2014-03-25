'use strict'

angular.module('rockPaperScissorsApp')
  .factory 'rockPaperScissorsService', [
    () ->
      rockPaperScissorsService = {}

      weapons = ["rock", "paper", "scissors"]

      rockPaperScissorsService.getRandomWeapon = () ->
        randomIndex = Math.random() * (weapons.length)
        return weapons[randomIndex]

      rockPaperScissorsService.getGameResult = (playerWeapon, opponentWeapon) ->
        switch playerWeapon
          when "rock"
            switch opponentWeapon
              when "rock"
                return "tie"
              when "paper"
                return "win"
              when "scissors"
                return "lose"
          when "paper"
            switch opponentWeapon
              when "rock"
                return "win"
              when "paper"
                return "tie"
              when "scissors"
                return "lose"
          when "scissors"
            switch opponentWeapon
              when "rock"
                return "lose"
              when "paper"
                return "win"
              when "scissors"
                return "tie"

      rockPaperScissorsService
    ]
