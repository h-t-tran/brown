describe('headerDirective', function () {
    "use strict";
    
    var _theDirective, _theController;

    beforeEach(module('app'));

    beforeEach(function () {
        //
        // attempt to build up the directive
        //
        inject(function ($rootScope, $compile) {
            _theDirective = angular.element('<header-directive result="searchResult"></header-directive>');

            var scope = $rootScope.$new();

            // build the directive
            $compile(_theDirective)(scope);
            $rootScope.$digest();

            // extract the controller associated with this directive.
            _theController = _theDirective.controller('headerDirective');
        });
    });

    describe("when created", function() {
        it('directive should not be null', function () {
            expect(_theDirective).not.toBeNull();
        });

        it('directive\'s controller should not be null', function () {
            expect(_theController).not.toBeNull();
        });

        it('searchText should be set to "abc"', function () {
            var scope = _theDirective.isolateScope();
            expect(scope.searchText).toBe("abc");
        });
    });

    describe("search", function() {
        it('should return search result', function () {

            var result = _theController.search("john");

            expect(result).toBe("Result is:john");
        });
    });

    describe("startSearch", function() {
        it('should set %scope.result', function () {

            //
            // Arrange
            //
            var scope = _theDirective.isolateScope();
            scope.result = null;   // reset
            scope.searchText = "navy";

            //
            // Act
            //
            scope.startSearch();

            //
            // Assett
            //
            expect(scope.result).toBe("Result is:navy");
        });
    });

});