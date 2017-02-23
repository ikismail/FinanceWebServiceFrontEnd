/**
 * Created by ikism on Feb 23, 2017
 */

var app = angular.module('myApp', [ 'ngRoute' ]);

console.log('--starting app.js')
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'Pages/APR.html'
	}).when('/apr', {
		templateUrl : 'Pages/APR.html'
	}).when('/leastMonthlyPayment', {
		templateUrl : 'Pages/LeastMonthlyPayment.html'
	}).when('/loanMonthlyPayment', {
		templateUrl : 'Pages/LoanMonthlyPayment.html'
	}).when('/loanNumberPayment', {
		templateUrl : 'Pages/LoanNumberPayment.html'
	}).otherwise({
		redirectTo : '/'
	})
})