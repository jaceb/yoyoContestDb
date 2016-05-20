angular.module("myApp").controller("mainCtrl", function($scope, mainService) {
    $scope.getContest = function() {
        mainService.getContest().then(function(response) {
            $scope.contests = response;
        })
    }
    $scope.getContest();

    $scope.getUser = function(){
      mainService.getUser().then(function(response){
        $scope.user = response[0];
      })
    }
    $scope.getUser();
});
