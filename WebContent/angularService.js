/**
 *  Created by ikism on Feb 23, 2017
 */

app.factory('angularService',function($http){
	console.log('---starting AngularService')
	
	var BASE_URL = "http://localhost:8098/WebService"
		
	var angularService = this;
	
	angularService.calculateAPR = function(apr){
		console.log('entering APR calculation')
		return $http.post(BASE_URL + "/APR/", apr).then(
				function(response){
					console.log('calculating APR')
					console.log('Status : ' + response.status)
					console.log('Data: ' + response.data)
					return response.data
				},function(response){
					console.log('Error While calculating')
					return response.data
				});
	};
	
	angularService.calculateLeastMP = function(leastmp){
		console.log('entering leastmp calculation')
		return $http.post(BASE_URL + "/LeastMonthlyPayment/", leastmp).then(
				function(response){
					console.log('calculating leastmp')
					console.log('Status : ' + response.status)
					console.log('Data: ' + response.data)
					return response.data
				},function(response){
					console.log('Error While calculating')
					return response.data
				});
	};
	
	angularService.calculateLoanMP = function(loanmp){
		console.log('entering loanmp calculation')
		return $http.post(BASE_URL + "/LoanMonthlyPayment/", loanmp).then(
				function(response){
					console.log('calculating loanmp')
					console.log('Status : ' + response.status)
					console.log('Data: ' + response.data)
					return response.data
				},function(response){
					console.log('Error While calculating')
					return response.data
				});
	};
	
	angularService.calculateLoanNumP = function(loanNp){
		console.log('entering loanNp calculation')
		return $http.post(BASE_URL + "/LoanNumberPayment/", loanNp).then(
				function(response){
					console.log('calculating loanNp')
					console.log('Status : ' + response.status)
					console.log('Data: ' + response.data)
					return response.data
				},function(response){
					console.log('Error While calculating')
					return response.data
				});
	};
	return angularService;
})