angular.module('frontEndApp')
  .factory('msRequestFactory', function () {

    var createRequest = function(area, resource, id, request) {
      if (!request)
        request = {};

      return {
        "area" : area,
        "resource" : resource,
        "id" : id,
        "request" : request
      };
    };

    return {
      createRequest : createRequest
    };

  });
