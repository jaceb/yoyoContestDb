angular.module("myApp").service('mainService', function($http) {

    this.getContest = function() {
        return $http({
            method: "GET",
            url: "/api/contests"
        }).then(function(response) {
            console.log(response);
            return response.data;
        })
    };

    this.getUser = function(){
      return $http({
        method: "GET",
        url: "/api/users"
      }).then(function(response){
        console.log(response);
        return response.data;
      })
    };
    this.addFavorite = function(){
      return $http({
        method: "POST",
        url: "/api/user/favorites/" + userId,
        data: {
          id: contest._id,
        }
      }).then(function(response){
        return response.data
      })
    };
    })
