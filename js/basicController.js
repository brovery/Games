(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = [];

    function basicController() {

        // list everything
        var bc = this;
        bc.minimum = 0;
        bc.maximum = 0;
        bc.numberOfDice = 1;
        bc.numberOfSides = 6;
        bc.rolls = [];
        bc.numberOfCardsDrawn = 1;
        bc.useJoker = false;
        bc.reShuffle = false;
        bc.deck = [];
        bc.aceVal = 20;
        bc.draws = [];
        bc.roll = roll;
        bc.shuffle = shuffle;

        createDeck();


        // define functions
        function roll() {
            var sumOfRolls = 0;
            for (var i = 0; i < bc.numberOfDice; i++) {
                var rnd = Math.floor(bc.numberOfSides*Math.random()+1);
                bc.rolls.push(rnd);
                sumOfRolls += rnd;
                console.log("Roll", i + ":", rnd);
            }
            console.log("Total of rolls:", sumOfRolls);
            console.log("Average of rolls:", sumOfRolls/bc.numberOfDice);
        }

        function shuffle() {
            if (bc.aceVal == "1") {
                console.log("Changing Ace");
                changeAce();
            }

            if (bc.useJoker == true) {
                bc.deck.push({suit: "None", name: "Joker", value: 30});
                bc.deck.push({suit: "None", name: "Joker", value: 30});
            }

            var sumOfDraws = 0;
            for (var i = 0; i < bc.numberOfCardsDrawn; i++) {
                var rnd = Math.floor(bc.deck.length*Math.random());

                bc.draws.push(bc.deck[rnd]);
                sumOfDraws += bc.deck[rnd].value;
                console.log("Draw", i + ":", bc.deck[rnd]);
                if (bc.reShuffle == false) {
                    bc.deck.splice(rnd,1);
                }
            }
            console.log("Total of Draws:", sumOfDraws);
        }

        function createDeck() {
            var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
            var names = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King", "Ace"];
            var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20];

            for (var i = 0; i < suits.length; i++) {
                for (var j = 0; j < names.length; j++) {
                    bc.deck.push({
                        suit: suits[i],
                        name: names[j],
                        value: values[j]
                    });
                }
            }
        }

        function changeAce() {
            for (var i = 0; i < bc.deck.length; i++) {
                if (bc.deck[i].name == "Ace") {
                    bc.deck[i].value = 1;
                }
            }
            console.log(bc.deck);
        }

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })


    }

}());
