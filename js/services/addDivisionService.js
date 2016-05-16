angular.module('myApp').service('addContestService', function($http){
  this.addDivision = function(Contest){
    return $http({
      method: "POST",
      url: "/divisions",

    })
  }
})
