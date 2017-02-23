/**
 * Created by ikism on Feb 23, 2017
 */

app.controller('angularController', function($scope, angularService, $http,
		$location) {

	console.log('----Starting AngularController')

	// Annual Payment Rate
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
	
	$scope.submitApr = function() {
		$scope.calculateAPR($scope.apr);
	}
	
	$scope.resetApr = function(){
		$scope.apr = {};
	}

	// Least Monthly Payment
	$scope.leastMP = {
		loanAmount : '',
		residualValue : '',
		interestRate : '',
		months : '',
		value : ''
	}

	$scope.calculateLeastMP = function(leastMP) {
		console.log('entering leastMP Calculation Controller')
		angularService.calculateLeastMP(leastMP).then(function(data) {
			console.log('Calculated')
			$scope.leastMP = data;
			console.log('Value: ' + $scope.leastMP.value);
		}, function(errResponse) {
			console.error('error while calculating')
		})
	};
	
	$scope.submitLeastMP = function() {
		$scope.calculateLeastMP($scope.leastMP);
	}

	// Loan Monthly Payment
	$scope.loanMP = {
		loanAmount : '',
		interestRate : '',
		months : '',
		value : ''
	}

	$scope.calculateLoanMP = function(loanMP) {
		console.log('entering LoanMP Calculation Controller')
		angularService.calculateLoanMP(loanMP).then(function(data) {
			console.log('Calculated')
			$scope.loanMP = data;
			console.log('Value: ' + $scope.loanMP.value);
		}, function(errResponse) {
			console.error('error while calculating')
		})
	};
	
	$scope.submitLoanMP = function() {
		$scope.calculateLoanMP($scope.loanMP);
	};

	// Loan Number of Payment
	$scope.loanNumP = {
		loanAmount : '',
		interestRate : '',
		monthlyPayment : '',
		value : ''
	}
	
	$scope.calculateLoanNumP = function(loanNumP) {
		console.log('entering loanNumP Calculation Controller')
		angularService.calculateLoanNumP(loanNumP).then(function(data) {
			console.log('Calculated')
			$scope.loanNumP = data;
			console.log('Value: ' + $scope.loanNumP.value);
		}, function(errResponse) {
			console.error('error while calculating')
		})
	};
	
	$scope.submitloanNumP = function() {
		$scope.calculateLoanNumP($scope.loanNumP);
	};

})
