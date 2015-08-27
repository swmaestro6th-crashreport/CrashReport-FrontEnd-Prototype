angular.module('frontEndApp')
  .factory('msRestfulApi', ['$resource', function ($resource) {
    var prefixUrl = 'http://localhost:3000';

    return $resource(
      prefixUrl + '/:resource/:id',
      {
        resource : "@resource",
        id : "@id"

      },
      {
        'get':    {method:'GET', isArray:true},
        'save':   {method:'POST'},
        'update': {method:'PUT'},
        'delete': {method:'DELETE'},
        'login':  {method:'POST'}
      });
  }]);
