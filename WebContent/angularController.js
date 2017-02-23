/**
 * Created by ikism on Feb 23, 2017
 */

app.controller('aprController', function($scope, angularService, $http,
		$location) {

	console.log('----Starting APRController')

	$scope.apr = {
		loanAmount : '',
		extraCost : '',
		interestRate : '',
		months : '',
		value : ''
	}

	$scope.calculateAPR = function(apr) {
		console.log('entering APR Calculation Controller')
		angularService.calculateAPR(apr).then(function(data) {
			console.log('Calculated')
			$scope.apr = data;
			console.log('Value: ' + $scope.apr.value);
		}, function(errResponse) {
			console.log('error while calculating')
		})
	};
	$scope.submit = function() {
		$scope.calculateAPR($scope.apr);
	}
})
