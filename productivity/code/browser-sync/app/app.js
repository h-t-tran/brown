angular.module('app',[ 'common-modal' ])
    .controller('GameController', ['$scope', 'modalSvc', GameController] );
function GameController($scope, modalSvc) {
    $scope.verifyGuess = function () {
        $scope.deviation = $scope.original - $scope.guess;
        $scope.noOfTries = $scope.noOfTries + 1;
    }

    $scope.title = "Guess a Number Game";
    $scope.intro = "Please enter number:";
    $scope.firstname = "";
    $scope.lastname = "";
    $scope.age = "";
    $scope.employer = "";

    $scope.initializeGame=function() {
        $scope.noOfTries = 0;
        $scope.original = Math.floor((Math.random() * 1000) + 1);
        $scope.guess = null;
        $scope.deviation = null;
    }

    $scope.reset = function() {
        $scope.guess = 0;
    }

    $scope.initializeGame();

    $scope.onOk = function() {
        var modalOptions = {
            headerText: 'Submit',
            bodyText: 'Are you sure you want to sumbit?'
        };

        modalSvc.showModal({}, modalOptions).then(function (result) {

        });
    }


}