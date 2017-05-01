angular.module('app',[])
    .controller('GameController', GameController);
function GameController($scope) {
    $scope.verifyGuess = function () {
        $scope.deviation = $scope.original - $scope.guess;
        $scope.noOfTries = $scope.noOfTries + 1;
    }

    $scope.title = "Guess a Number Game";
    $scope.intro = "Please enter number:";

    $scope.initializeGame=function() {
        $scope.noOfTries = 0;
        $scope.original = Math.floor((Math.random() * 1000) + 1);
        $scope.guess = null;
        $scope.deviation = null;
    }
    $scope.initializeGame();
}