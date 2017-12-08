app.controller("teacherCtrl",function($rootScope,$routeParams, $rootScope, $scope, $http){
	$rootScope.question = true;
	$rootScope.replay = false;
	$rootScope.course = false;
	$rootScope.book = false;
	$rootScope.msg = false;

	console.log($scope.sss);
	 $scope.$watch('sss',  function(newValue, oldValue) {
            alert(newValue)
      });
})
app.config(["$routeProvider",function($routeProvider){
	 $routeProvider
	 			.when('/questionList',{
	 				templateUrl: "./template/1/main.html",
	 				controller:function($rootScope,$scope){
	 					$rootScope.question = true;
						$rootScope.replay = false;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
	 			})
	 			.when('/answer',{
	 				templateUrl: "./template/1/answer.html",
	 				controller:function($rootScope,$scope){
	 					$rootScope.question = false;
						$rootScope.replay = true;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
	 			})
	 			.when('/myAnswer',{
	 				templateUrl: "./template/1/myAnswer.html",
	 				controller:function($rootScope,$scope){
	 					$rootScope.question = false;
						$rootScope.replay = true;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
	 			})
	 			.when('/personalMassage',{
	 				templateUrl: "./template/1/personalMsg.html",
	 				controller:function($rootScope,$scope){
	 					$rootScope.question = true;
						$rootScope.replay = false;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
	 			})
                 .when('/myreplay',{
                 	templateUrl:'./template/1/answer.html',
                 	controller:function($rootScope,$scope){
                 		$rootScope.question = false;
						$rootScope.replay = true;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
                 })
                 .when('/answerDetail',{
                 	templateUrl:'./template/1/answerDetail.html',
                 	controller:function($rootScope,$scope){
                 		$rootScope.question = false;
						$rootScope.replay = true;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
                 })
                 .when('/myCourse',{
                 	templateUrl:'./template/1/courseList.html',
                 	controller:function($rootScope,$scope){
                 		$rootScope.question = false;
						$rootScope.replay = false;
						$rootScope.course = true;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
	 			})
                 .when('/addNewCourse',{
                 	templateUrl:'./template/1/addNewCourse.html',
                 	controller:function($rootScope,$scope){
						$rootScope.question = false;
						$rootScope.replay = false;
						$rootScope.course = true;
						$rootScope.book = false;
						$rootScope.msg = false;
	 				}
                 })
                 .when('/myBook',{
                 	templateUrl:'./template/1/myBook.html',
                 	controller:function($rootScope,$scope){
                 		$rootScope.question = false;
						$rootScope.replay = false;
						$rootScope.course = false;
						$rootScope.book = true;
						$rootScope.msg = false;
	 				}
                 })
                 .when('/addNewBook',{
                 	templateUrl:'./template/1/addNewBook.html',
                 	controller:function($rootScope,$scope,Upload){
                 		$rootScope.question = false;
						$rootScope.replay = false;
						$rootScope.course = false;
						$rootScope.book = true;
						$rootScope.msg = false;
									$scope.uploadImg = '';
			            //提交
			            $scope.submit = function () {
			                $scope.upload($scope.file);
			            };
			            $scope.upload = function (file) {
			                $scope.fileInfo = file;
			                Upload.upload({
			                    url: 'Ashx/UploadFile.ashx',
			                    data: {'username': $scope.username},
			                    file: file
			                }).progress(function (evt) {
			                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			                    console.log('progess:' + progressPercentage + '%' + evt.config.file.name);
			                }).success(function (data, status, headers, config) {
			                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
			                    $scope.uploadImg = data;
			                }).error(function (data, status, headers, config) {
			                    console.log('error status: ' + status);
			                });
			            };

	 				}
                 })
                 .when('/msg',{
                 	templateUrl:'./template/1/msg.html',
                 	controller:function($rootScope,$scope){
                 		$rootScope.question = false;
						$rootScope.replay = false;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = true;
	 				}
                 })
                 .when('/msgReplay',{
                 	templateUrl:'./template/1/msgReplay.html',
                 	controller:function($rootScope,$scope){
                 		$rootScope.question = false;
						$rootScope.replay = false;
						$rootScope.course = false;
						$rootScope.book = false;
						$rootScope.msg = true;
	 				}
                 });
    $routeProvider .otherwise({redirectTo:'/questionList'});



}])
