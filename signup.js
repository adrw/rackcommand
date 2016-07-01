(function() {
	var app = angular.module('rcSignUp', ['angularPayments']);

	app.controller('rcSignUpController', function($scope) {
		$scope.account = {};

		this.createAccount = function(account) {
			// ....


		};

	});




	// app.directive('uniqueEmail', ['$http', function($http) {  
	//   return {
	//     require: 'ngModel',
	//     link: function(scope, elem, attrs, ctrl) {
	//       scope.busy = false;
	//       scope.$watch(attrs.ngModel, function(value) {

	//         // hide old error messages
	//         ctrl.$setValidity('isTaken', true);
	//         ctrl.$setValidity('invalidChars', true);

	//         if (!value) {
	//           // don't send undefined to the server during dirty check
	//           // empty username is caught by required directive
	//           return;
	//         }

	//         // show spinner
	//         scope.busy = true;

	//         // send request to server
	//         $http.post('/signup/check/email', {email: value})
	//           .success(function(data) {
	//             // everything is fine -> do nothing
	//             scope.busy = false;
	//           })
	//           .error(function(data) {

	//             // display new error message
	//             if (data.isTaken) {
	//               ctrl.$setValidity('isTaken', false);
	//             } else if (data.invalidChars) {
	//               ctrl.$setValidity('invalidChars', false);
	//             }

	//             scope.busy = false;
	//           });
	//       })
	//     }
	//   }
	// }]);


	// Password Check for Email Signup
	app.directive('match', [function() {
		return {
			require: 'ngModel',
			link: function (scope, elem, attrs, ctrl) {
				scope.$watch('[' + attrs.ngModel + ',' + attrs.match + ']', function(value) {
					ctrl.$setValidity('match', value[0] === value[1]);
				}, true);
			}
		}
	}]);

	app.directive('mlength', [function() {
		return {
			require: 'ngModel',
			link: function (scope, elem, attrs, ctrl) {
				scope.$watch('[' + attrs.ngModel + ',' + attrs.match + ']', function(value) {
					ctrl.$setValidity('mlength', value[0] === value[1] && value[0].length >= 8 );
				}, true);
			}
		}
	}]);

})();