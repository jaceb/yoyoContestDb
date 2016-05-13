angular.module('myApp').service('addContestService', function($http){
  this.addContest = function(Contest){
    return $http({
      method: "POST",
      url: "/contests",
      
    })
  }
})
