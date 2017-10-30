(function() {
    'use strict';


    angular.module('app',[])
        .controller('GameController', ['$scope', 'gameSvc', GameController ]);

    function GameController($scope, gameSvc) {

        this._initializeGame = function() {
            $scope.noOfTries = 0;
            $scope.original = Math.floor((Math.random() * 1000) + 1);
            $scope.guess = null;
            $scope.deviation = null;
        };

        $scope.searchResult = "";

        $scope.join = function() {
            gameSvc.joinOnline(function() {
                // success
            }, function(errMsg) {
                // error
            });
        };

        $scope.verifyGuess = function () {
            $scope.deviation = $scope.original - $scope.guess;
            $scope.noOfTries = $scope.noOfTries + 1;
        };

        $scope.title = "Guess a Number Game";
        $scope.intro = "Please enter number:";

        this._initializeGame();
    }

})();