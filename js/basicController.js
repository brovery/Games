(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = [];

    function basicController() {

        // list everything
        var bc = this;
        bc.numberOfDice = 1;
        bc.numberOfSides = 6;
        bc.rolls = [];
        bc.numberOfCardsDrawn = 1;
        bc.aceVal = 20;
        bc.draws = [];
        bc.roll = roll;
        bc.shuffle = shuffle;



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
            bc.aceVal = Number(bc.aceVal);
            var sumOfDraws = 0;
            for (var i = 0; i < bc.numberOfCardsDrawn; i++) {
                var rnd = Math.floor(14*Math.random()+1);
                if (rnd == 1) {
                    rnd = bc.aceVal;
                } else if (rnd == 14) {
                    rnd = 30;
                }

                bc.draws.push(rnd);
                sumOfDraws += rnd;
                console.log("Draw", i + ":", rnd);
            }

            console.log("Total of Draws:", sumOfDraws);
        }


    }

}());
