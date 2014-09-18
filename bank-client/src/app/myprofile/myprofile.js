var myProfileModule = angular.module('bankClient.myProfile', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
]);

myProfileModule.config(function config($stateProvider) {
    $stateProvider.state('myProfile', {
        url: '/myProfile',
        views: {
            "main": {
                controller: 'MyProfileCtrl',
                templateUrl: 'myprofile/myprofile.tpl.html'
            }
        },
        data: { pageTitle: 'My profile' }
    });
});

myProfileModule.controller('MyProfileCtrl', function AboutCtrl($scope) {
    // This is simple a demo for UI Boostrap.
    $scope.checked = false;
})

;
