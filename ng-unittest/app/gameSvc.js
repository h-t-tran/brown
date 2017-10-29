(function() {
    'use strict';

    angular.module('app').factory('gameSvc', [
        '$http'
        , '$timeout'
        , function ($http, $timeout ) {

            var self = {};

            self.joinOnline = function(successCb, errorCb) {
                $http.get("www.google.com").then(function() {
                    successCb();
                }, function() {
                    errorCb("Unable to invoke remote site.")
                });
            }

            return self;
        }]);
})();