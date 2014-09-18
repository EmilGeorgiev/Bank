describe('ClientsCtrl', function() {

    var httpBackend, scope, controller, authRequestHandler;

    beforeEach(module('clients'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {

        httpBackend = $httpBackend;

        scope = $rootScope.$new();

        controller = $controller;

        controller('ClientsCtrl', {'$scope': scope});

        authRequestHandler = httpBackend.whenGET("/fetchClients");

        authRequestHandler.respond({ clientName : 'Emil' });

    }));

    it('should send request to "/fetchClients"', function() {

        httpBackend.flush();

    });

    it('should get clients names from database', function() {

        httpBackend.flush();

        expect(scope.clients).toEqual({ clientName : 'Emil' });
    });

    it('should fail request', function() {

        authRequestHandler.respond(404, 'Not found');

        httpBackend.flush();

        expect(scope.status).toBe('Not found');
    });

});