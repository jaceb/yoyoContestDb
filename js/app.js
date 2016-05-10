angular.module('myApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('welcome', {
                url: '/',
                controller: 'welcomeCtrl',
                templateUrl: '../public/templates/welcomeTmpl.html'
            })
            .state('results', {
                url: '/results',
                controller: 'welcomeCtrl',
                templateUrl: '../public/templates/resultsTmpl.html'
            })
            .state('login', {
                url: '/login',
                controller: 'loginCtrl',
                templateUrl: '../public/templates/loginTmpl.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                controller: 'dashCtrl',
                templateUrl: '../public/templates/dashTmpl.html'
            })
            .state('admin', {
                url: '/admin',
                controller: 'adminCtrl',
                templateUrl: '../public/templates/adminTmpl.html'
            })
            .state('addContest', {
                url: '/addContest',
                controller: 'addContestCtrl',
                templateUrl: '../public/templates/addContestTmpl.html'
            });
        $urlRouterProvider
            .otherwise('/');
    })
