/**
 * Created by emil on 14-9-19.
 */
describe('ClientEditController', function() {

    var httpBackend, scope, authRequestHandler, controller;

    beforeEach(module('clientEdit'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;

        controller = $controller;

        scope = $rootScope.$new();

        authRequestHandler = httpBackend.whenPOST('/depositService');
        authRequestHandler.respond({clientAmount: '200'});
    }));

    it('should send request to "/depositService"', function() {

        controller('ClientEditController', {'$scope': scope});

        scope.doDeposit('emil', 100);

        httpBackend.flush();

        expect(scope.clientAmount).toEqual({clientAmount: '200'});
    });

});