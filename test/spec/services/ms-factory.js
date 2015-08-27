'use strict';

describe('Service: msFactory', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var msFactory;
  beforeEach(inject(function (_msFactory_) {
    msFactory = _msFactory_;
  }));

  it('should do something', function () {
    expect(!!msFactory).toBe(true);
  });

});
