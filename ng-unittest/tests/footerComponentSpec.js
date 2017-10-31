describe('footComponent', function () {
    "use strict";
    
    var _theComponent, _theController;

    beforeEach(module('app'));

    beforeEach(function () {
        //
        // build up the component
        //
        inject(function ($rootScope, $compile) {
            var scope = $rootScope.$new();
            _theComponent = $compile('<footer-component title="User information"></footer-component>')(scope);
            _theController = _theComponent.controller("footerComponent");

        });
    });

    describe("when created", function() {
        it('component should not be null', function () {
            expect(_theComponent).not.toBeNull();
        });

        it('component\'s controller should not be null', function () {
            expect(_theController).not.toBeNull();
        });

        it('user name should be john', function () {
            expect(_theController.userName).toBe('John');
        });
    });


    describe("_doLogin", function() {
        it('should return true', function () {

            //
            // Arrange
            //

            //
            // Act
            //
            var result = _theController._doLogin();

            //
            // Assett
            //
            expect(result).toBe(true);
        });
    });

});