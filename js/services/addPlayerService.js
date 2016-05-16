angular.module('myApp').service('addPlayerService', function($http){
  this.addPlayer = function(Contest){
    return $http({
      method: "POST",
      url: "/players",

    })
  }
})
