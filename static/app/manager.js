app.controller("mageCtrl",function($rootScope,$routeParams, $rootScope, $scope, $http){

})
app.config(["$routeProvider",function($routeProvider){
	 $routeProvider
	 			.when('/teacher',{
	 				templateUrl: "./template/2/main.html",
	 				controller:function($rootScope,$scope){
	 					
	 				}
	 			})
	 			.when('/teacherMsg',{
	 				templateUrl: "./template/2/teacherMsg.html",
	 				controller:function($rootScope,$scope){
	 					
	 				}
	 			})
	 			.when('/teacherMsg_edit',{
	 				templateUrl: "./template/2/teacherMsg_edit.html",
	 				controller:function($rootScope,$scope){
	 					
	 				}
	 			})
	 			.when('/questionnaire',{
	 				templateUrl: "./template/2/questionnaire.html",
	 				controller:function($rootScope,$scope){
	 					
	 				}
	 			})
                 .when('/addQ',{
                 	templateUrl:'./template/2/addQ.html',
                 	controller:function($rootScope,$scope){
                 		$scope.arr = [{"asswer":[1,2,3]},{"asswer":[1,2,3]},{"asswer":[1,2,3]}];
                 		$scope.addNewQ = function(){
                 			$scope.arr.push({"asswer":[1,2,3]});
                 		}
                 		$scope.addAn = function(index){
                 			$scope.arr[index].asswer.push(index);
                 		}
	 				}
                 });
    $routeProvider .otherwise({redirectTo:'/teacher'});



}])
