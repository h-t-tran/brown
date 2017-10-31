describe('gameSvc', function () {
    "use strict";

    var _realGameSvc;
    var _getMock = jasmine.createSpy();
    var _postMock = jasmine.createSpy();
    var _deleteMock = jasmine.createSpy();

    beforeEach(module('app'));

    beforeEach(function () {
        module('app', function($provide) {

            // Create a mock $http object that will be injected into the gameSvc.
            // NOTE: we can also use $httpBackend.
            $provide.service('$http', function() {

                // create the mock functions.
                this.get = _getMock.and.returnValue({
                    then : jasmine.createSpy()
                });

                this.post = _postMock;
                this.delete = _deleteMock;
            });
        });

        //
        // inject and save the real game svc service
        //
        inject(function (_gameSvc_) {
            _realGameSvc = _gameSvc_;
        });
    });

    // Another way to "create" the gameSvc is....
    // beforeEach(function() {
    //     inject(function($injector) {
    //         _realGameSvc = $injector.get('gameSvc');
    //     });
    // });

    it('should be injected.', function() {
        expect(_realGameSvc).toBeTruthy();
    });

    describe('joinOnline', function() {
        it('should invoke the http.get()', function() {
            //
            // Arrange
            //
            var success = jasmine.createSpy();
            var error = jasmine.createSpy();

            //
            // Act
            //
            _realGameSvc.joinOnline(success, error);

            //
            // Assert
            //
            expect(_getMock).toHaveBeenCalled();
            expect(_postMock).not.toHaveBeenCalled();
            expect(_deleteMock).not.toHaveBeenCalled();
        });
    });
});