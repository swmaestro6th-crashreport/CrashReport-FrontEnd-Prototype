angular.module('frontEndApp')
  .controller('LoginCtrl', [
    '$scope',
    '$state',
    'SessionService',
    'SessionInfo',
    '$log',
    function ($scope, $state, SessionService, SessionInfo, $log) {

      $scope.submitLogin = function() {
        SessionService.login($scope.login, changeState);
      }

      function changeState(response){
        alert(SessionInfo.getCurrentUser().name + '님 반갑습니다 :)');
        $state.go("report");
      }
    }]);
