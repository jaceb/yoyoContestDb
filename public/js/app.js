angular.module('myApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('welcome', {
                url: '/',
                // controller: 'welcomeCtrl',
                templateUrl: 'templates/welcomeTmpl.html'
            })
            .state('results', {
                url: '/results',
                controller: 'mainCtrl',
                templateUrl: 'templates/resultsTmpl.html'
            })
            .state('login', {
                url: '/login',
                // controller: 'loginCtrl',
                templateUrl: 'templates/loginTmpl.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                controller: 'mainCtrl',
                templateUrl: 'templates/dashTmpl.html'
            })
            
            .state('addContest', {
                url: '/addContest',
                controller: 'mainCtrl',
                templateUrl: 'templates/addContestTmpl.html'
            });
        $urlRouterProvider
            .otherwise('/');
    })
