//主页相关逻辑控制器
angular.module('myApp.controllers', ['myApp.services'])
//    .controller('LoginController', function ($scope, $location, UserService) {
//        $scope.login = function () {
//            UserService.login($scope.user).then(function (result) {
//                alter(result)
////                if (result.status == 'success') {
////                    //登录成功
////                    //1:设置用户
////                    UserService.setUser(result.user);
////                    //2：根据用户角色跳转：如果是管理员和教师跳转至用户管理模块;如果是学生跳转至考试模块。
////                    if (result.user.role == 3) {
////                        $location.path('/exam');
////                    } else {
////                        $location.path('/user_list');
////                    }
////                } else {
////                    alert('登录失败');
////                }
//            })
//        }
//    })
    .controller('LoginController', function ($scope, $location) {
        $scope.goUsersPage = function () {
            $location.path('/user_list')
        }
    })
    .controller('UserController', function ($scope, UserService) {
        $scope.isUserActive = true;
        $scope.isClassActive = false;
        $scope.isExamActive = false;
    })
    .controller('ClassController', function ($scope, ClassService) {

    })
    .controller('ExamController', function ($scope, ExamService) {

    })