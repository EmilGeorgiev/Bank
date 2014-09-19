///**
// * Created by emil on 14-9-12.
// */
angular.module('clients', ['ui.router', 'clientEdit'])


.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('clients', {
            url: '/clients',
            views: {
                "main": {
                    controller: 'ClientsCtrl',
                    templateUrl: 'clients/clients.tpl.html'
                }
            },
            data: {pageTitle: "Clients"}
        });

    }])


.controller('ClientsCtrl', ['$scope', 'clientsService', function($scope, clientsService) {

        clientsService.fetchClients().success(function (data) {

            $scope.clients = data;

        }).error(function(reason) {

            $scope.status = reason;

        });

    }])

    .factory('clientsService', ['$http', function($http) {

        return {
            fetchClients: function() {

                return $http.get("/fetchClients");

            }
        };

    }]);