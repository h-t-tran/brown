describe('GameController', function () {
    "use strict";

    var _scope, _controller, _gameSvc;

    beforeEach(function () {
        module('app', function($provide) {
            $provide.service('gameSvc', function() {

            });
        });

        ////////////////////////////////////////////////
        // inject and save the mock game svc services
        //
        inject(function (gameSvc) {
            _gameSvc = gameSvc;
        });
    });



    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        // create a cope to be injected into the controller function
        _scope = $rootScope.$new();

        // a function to create the controller.
        var controllerFunc = function() {
            return $controller('GameController', {
                '$scope': _scope,
                'gameSvc': _gameSvc
            });
        };

        //
        // create the controller we want to test
        //
        _controller = controllerFunc();

    }));


    describe('created', function() {
        it('should create controller and services', function () {
            expect(_gameSvc).toBeTruthy();
            expect(_controller).toBeTruthy();
        });
    });

    describe('_initializeGame', function() {
        it('should reset all properties', function() {
            //
            // Arrange
            //

            //
            // Act
            //
            _controller._initializeGame();

            //
            // Assert
            //
            expect(_scope.noOfTries).toBe(0);
            expect(_scope.guess).toBe(null);
            expect(_scope.deviation).toBe(null);
        });
    });

    describe('join', function() {
        it('should call gameSvc.joinOnline()', function() {
            //
            // Arrange
            //
            _gameSvc.joinOnline =  jasmine.createSpy(_gameSvc, 'joinOnline');

            //
            // Act
            //
            _scope.join();

            //
            // Assert
            //
            expect(_gameSvc.joinOnline).toHaveBeenCalled();

        });
    });
});