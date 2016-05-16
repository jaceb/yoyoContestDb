angular.module('myApp').service('addContestService', function($http){
  this.addContest = function(Contest){
    return $http({
      method: "POST",
      url: "/contests",

    })
  }
this.getContest = function(){
      return $http({
          method: "GET",
          url: "/contests"
      }).then(function(response){
          return response.data
      })
  };
})
