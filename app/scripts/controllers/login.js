angular.module('frontEndApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {
    $scope.submitLogin = function() {
      var data = {
        email: $scope.email,
        password: $scope.password,
      };
      var res = $http.post('http://localhost:3000/users', data);
      res.success(function(data, status, headers, config) {
        $scope.message = data;
        alert($scope.message);

        $rootScope.email =  $scope.email;
        $rootScope.isLogined = true;

        $location.path('/report');
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
    };

    $rootScope.logout = function() {
      $rootScope.email = '';
      $rootScope.isLogined = false;
      alert('로그아웃 되셨습니다.');
      $location.path('/login');
    }
  }]);
