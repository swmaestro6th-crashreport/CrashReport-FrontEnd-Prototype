'use strict';

describe('Service: msRestfulApi', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var msRestfulApi;
  beforeEach(inject(function (_msRestfulApi_) {
    msRestfulApi = _msRestfulApi_;
  }));

  it('should do something', function () {
    expect(!!msRestfulApi).toBe(true);
  });

});
