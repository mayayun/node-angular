var app = angular.module('App', []);
app.controller("myContrl",function($http, $scope){
	$scope.login = function(){
		$http({
			method:"post",
			data:$scope.user,
			url:"http://115.28.242.3:91/user/login"
		}).success(function(data){
			console.log(data);
			if(data.status == "success"){
				location.href="./index.html"
			}
		}).error(function(err){
			alert(err);
		})
	}
})
