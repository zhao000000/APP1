angular.module('myApp.config', ['ngRoute'])
    .config(function ($routeProvider) {
        // 1:配置路由
        $routeProvider.when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).when('/user_list', {
            templateUrl: 'views/user_list.html',
            controller: 'UserController'
        }).when('/class_list', {
            templateUrl: 'views/class_list.html',
            controller: 'ClassController'
        }).when('/exams_list', {
            templateUrl: 'views/exam_list.html',
            controller: 'ExamController'
        }).otherwise({
            redirectTo: '/'
        })


    });