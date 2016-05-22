angular.module("myApp").controller("mainCtrl", function($scope, mainService) {
    $scope.getContest = function() {
        mainService.getContest().then(function(response) {
            $scope.contests = response;

        })
    };
    $scope.getContest();

    $scope.addContest = function(newContest) {
        console.log(newContest);
        newContest.player=[];
        for (var i = 0; i < Object.keys($scope.playersArr).length; i++) {
          console.log($scope.playersArr[i]);
        newContest.player.push($scope.playersArr[i]);
        }
        mainService.addContest(newContest).then(function(response) {
            $scope.newContest = {};
            $scope.playersArr = [];

            return newContest.player;

        })
    };

    $scope.getUser = function() {
        mainService.getUser().then(function(response) {
            $scope.user = response[0];
        })
    };
    $scope.getUser();

    $scope.addFavorite = function(favorite, userId) {
    // console.log(userId);
        mainService.addFavorite(favorite, userId).then(function(response) {
          console.log(response);
            $scope.newFavorite = response;

        })

    }
    $scope.newContest = {};
});
