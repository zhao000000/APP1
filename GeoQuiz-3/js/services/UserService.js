//获取用户信息服务
angular.module('myApp.services', [])
    .factory('UserService', function () {
        var user;//当前用户信息
        return{
            login: function (u) {
                
            },
            setUser: function (u) {
                user = u;
            }
        }
    });