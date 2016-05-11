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
                // controller: 'welcomeCtrl',
                templateUrl: 'templates/resultsTmpl.html'
            })
            .state('login', {
                url: '/login',
                // controller: 'loginCtrl',
                templateUrl: 'templates/loginTmpl.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                // controller: 'dashCtrl',
                templateUrl: 'templates/dashTmpl.html'
            })
            .state('admin', {
                url: '/admin',
                // controller: 'adminCtrl',
                templateUrl: 'templates/adminTmpl.html'
            })
            .state('addContest', {
                url: '/addContest',
                // controller: 'addContestCtrl',
                templateUrl: 'templates/addContestTmpl.html'
            });
        $urlRouterProvider
            .otherwise('/');
    })
