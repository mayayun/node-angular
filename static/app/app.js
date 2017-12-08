//模板位置
Template = {
	main:"template/1/main.html",
	teacher:{
		teacherMsg:"teacherMsg.html",
		teacherMsg_edit:"teacherMsg_edit.html",
		portrait:"portrait.html"
	},
	book:{
		myBook:"template/1/myBook.html",
		addNewBook:"template/1/addNewBook.html"
	},
	personalMsg:"template/1/personalMsg.html",
	question:{
		questionList:"template/1/main.html",
	},
	course:{
		courseList:"template/1/courseList.html",
		addNewCourse:"template/1/addNewCourse.html"
	},
	answer:{
		answer:"template/1/answer.html",
		myAnswer:"template/1/myAnswer.html"
	}
}


var app = angular.module('App', ['ngRoute','ngFileUpload']);
