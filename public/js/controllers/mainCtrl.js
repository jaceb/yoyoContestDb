angular.module("myApp").controller("mainCtrl", function($scope, mainService) {
    $scope.getContest = function() {
        mainService.getContest().then(function(response) {
            $scope.contests = response;
        })
    }
    $scope.getContest();
});
