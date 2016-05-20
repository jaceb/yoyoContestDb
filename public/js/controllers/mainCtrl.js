angular.module("myApp").controller("mainCtrl", function($scope, mainService) {
    console.log("poop");
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

    $scope.addFavorite = function(favorite) {
        mainService.addFavorite(favorite).then(function(response) {
            $scope.newFavorite = {};
            $scope.getFavorites();
        })

    }
    $scope.newContest = {};
});
