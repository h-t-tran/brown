
(function() {
    'use strict';
	angular.module('common-modal', ['ui.bootstrap']).service('modalSvc', ['$uibModal',
		function ($uibModal) {

			var modalDefaults = {
				backdrop: true,
				keyboard: true,
				modalFade: true,
				template: [
						'<div class="modal-header">',
							'<h3>{{modalOptions.headerText}}</h3>',
						'</div>',
						'<div class="modal-body">',
								'<p>{{modalOptions.bodyText}}</p>',
						'</div>',
						'<div class="modal-footer">',
							'<button class="btn btn-primary" data-ng-click="modalOptions.ok();">{{modalOptions.actionButtonText}}',
							'</button>',
							'<button type="button" class="btn" data-ng-click="modalOptions.close()">{{modalOptions.closeButtonText}}',
							'</button>',
						'</div>'
					].join(""),
				size: 'sm'
			};

			var modalOptions = {
				closeButtonText: 'Cancel',
				actionButtonText: 'OK',
				headerText: 'Proceed?',
				bodyText: 'Perform this action?'
			};

			this.showModal = function (customModalDefaults, customModalOptions) {
				if (!customModalDefaults) {
					customModalDefaults = {};
				}
				customModalDefaults.backdrop = 'static';
				return this.show(customModalDefaults, customModalOptions);
			};

			this.show = function (customModalDefaults, customModalOptions) {
				//Create temp objects to work with since we're in a singleton service
				var tempModalDefaults = {};
				var tempModalOptions = {};

				//Map angular-ui modal custom defaults to modal defaults defined in service
				angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

				//Map modal.html $scope custom properties to defaults defined in service
				angular.extend(tempModalOptions, modalOptions, customModalOptions);

				if (!tempModalDefaults.controller) {
					tempModalDefaults.controller = [ '$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
						$scope.modalOptions = tempModalOptions;
						$scope.modalOptions.ok = function (result) {
							$uibModalInstance.close(result);
						};
						$scope.modalOptions.close = function (result) {
							$uibModalInstance.dismiss('cancel');
						};
					}];
				}

				return $uibModal.open(tempModalDefaults).result;
			};

		}]);
})();