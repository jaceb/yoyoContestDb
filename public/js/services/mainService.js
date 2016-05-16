angular.module("myApp").service('mainService', function($http){

  this.getContest = function(){
    return $http({
      mthod: "GET",
      url: "/api/contests"
    }).then(function(response){
      return response.data
    })
  };
})
