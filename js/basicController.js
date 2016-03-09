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
        bc.roll = roll;



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


    }

}());
