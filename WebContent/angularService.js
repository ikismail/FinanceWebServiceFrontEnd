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
	return angularService;
})