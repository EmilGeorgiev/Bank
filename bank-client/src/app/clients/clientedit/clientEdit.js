/**
 * Created by emil on 14-9-19.
 */
angular.module('clientEdit', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

        $stateProvider.state('clients.edit', {
            url: "/edit",
            views: {
                "editClient": {
                    controller: 'ClientEditController',
                    templateUrl: 'clients/clientedit/clientEdit.tpl.html'
                }
            },
            data: {pageTitle: 'Edit'}
        });
    }])

.controller('ClientEditController', ['$scope', 'clientEditService', function($scope, clientEditService) {

        $scope.doDeposit = function(clientName, amount) {

            clientEditService.doDeposit(clientName, amount)

                .success(function(data) {
                    $scope.clientAmount = data;
                });
        };

//        $scope.doWithdraw = function(clientName, amount) {
//
//            clientEditService.doWithdraw(clientName, amount)
//
//                .success(function(data) {
//                    $scope.suma = data;
//                });
//        };



    }])

.factory('clientEditService', ['$http', function($http) {
        return {

            doDeposit: function(clientName, amount) {

                return $http.post('/depositService');


            }

//            doWithdraw: function(clientName, amount) {
//                return $http.post('withdrawService');
//            }

        };


    }]);


