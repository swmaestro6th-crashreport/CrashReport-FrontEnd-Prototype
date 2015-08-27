angular.module('frontEndApp')
  .service('SessionInfo', ['$rootScope', function SessionInfo($rootScope) {
    this.localStorageKey = "__SESSION_INFO";
    try {
      $rootScope.currentUser = JSON.parse(localStorage.getItem(this.localStorageKey) || "{}");
    } catch(e) {
      $rootScope.currentUser = {};
    }

    this.getCurrentUser = function() {
      return $rootScope.currentUser;
    }

    this.isUserSignedIn = function() {
      if(this.getCurrentUser() && this.getCurrentUser().id) {
        return true;
      } else {
        return false;
      }
    };

    this.setUserInfo = function(info) {
      angular.extend($rootScope.currentUser, info);
      localStorage.setItem(this.localStorageKey, JSON.stringify($rootScope.currentUser));
    };

    this.reset = function() {
      $rootScope.currentUser = {};
      localStorage.setItem(this.localStorageKey, JSON.stringify($rootScope.currentUser));
    };
  }]);
