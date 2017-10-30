(function(){
    'use strict';

    angular.module('app').directive('headerDirective', [
        function() {

            function _search(searchText) {
                return "Result is:" + searchText;
            }

            var controllerFunc = function($scope) {

                $scope.searchText = "abc";
                $scope.startSearch = function() {
                    $scope.result = _search($scope.searchText);
                };

                //
                // expose functions for unit test.
                //
                $scope.search = _search;
            };


            var directive = {
                scope: {
                    result: '='
                },

                template : '<div style="background:grey">' +
                                '<span>this is a directive</span>' +
                                '<span>' +
                                    '<input type="text" style="margin:5px" ng-model="searchText"></input>' +
                                    '<button ng-click="startSearch()" class="btn btn-default btn-sm">Search</button>' +
                                '</span>' +
                            '</div>',
                restrict: 'E',
                controller: controllerFunc
            };
            return directive;

        }]);
})();
