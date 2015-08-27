angular.module('frontEndApp')
  .service('SessionService', [
    'msRequestFactory',
    'msRestfulApi',
    'SessionInfo',
    '$log',
    function SessionService(msRequestFactory, msRestfulApi, SessionInfo, $log) {

      this.login = function(params, successCallback) {
        // 1) create request
        var request = msRequestFactory.createRequest('authentication', 'users', '');

        // 2) set params
        request.params = {
          email: params.email,
          password: params.password
        }

        // 3) call ajax
        msRestfulApi.login(request,
          function(response) {
            // success
            SessionInfo.reset();
            SessionInfo.setUserInfo(response);
            successCallback(response);
          },
          function(error){
            // fail
            alert('Login Failed');
            $log.error('Server Exception is ', error);
          })
      };

    }]);
