(function(){
    'use strict';

    angular.module('app').component('footerComponent', {
        template: '<div style="background:grey">' +
                        '<div>{{viewmodel.title}}</div>' +
                        '<span>' +
                            '<span>Name:</span>' +
                            '<input type="text" style="margin:5px" ng-model="viewmodel.userName"></input>' +
                            '<button ng-click="viewmodel.login()" class="btn btn-default btn-sm">Login</button>' +
                        '</span>' +
                    '</div>',

        controllerAs: "viewmodel",

        bindings: {
            title: '@'
        },

        controller: [
            "$scope",
            function($scope) {
                var vm = this;
                vm.userName = "John";

                vm.login = function() {
                    _doLogin(vm.userName);
                }

                function _doLogin(userName) {
                    return true;
                }

                //
                // expose "private" function for unit testing
                //
                vm._doLogin = _doLogin;
            }
        ]
    });
})();
