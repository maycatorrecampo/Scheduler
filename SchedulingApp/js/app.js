/*!!!! Note: transition some methods from 0.9x to 1.x.x !!!! */

//angular module
angular.module('scheduleApp', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/user')
    
    $stateProvider
    
    .state('user', {
        url: '/user',
        templateUrl: 'templates/userpage.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
    })
    
    .state('admin', {
        url: '/admin',
        templateUrl: 'templates/adminpage.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
    })
});