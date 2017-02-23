/**
 * Created by ikism on Feb 23, 2017
 */

var app = angular.module('myApp', [ 'ngRoute' ]);

console.log('--starting app.js')
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'Pages/APR.html'
	}).when('/apr', {
		templateUrl : 'Pages/APR.html',
		controller : 'aprController'
	}).when('/leastMonthlyPayment', {
		templateUrl : 'Pages/LeastMonthlyPayment.html',
		controller : 'aprController'
	}).when('/loanMonthlyPayment', {
		templateUrl : 'Pages/LoanMonthlyPayment.html',
		controller : 'aprController'
	}).when('/loanNumberPayment', {
		templateUrl : 'Pages/LoanNumberPayment.html',
		controller : 'aprController'
	}).otherwise({
		redirectTo : '/'
	})
})