angular.module("myApp").service('mainService', function($http) {

    this.getContest = function() {
        return $http({
            method: "GET",
            url: "/api/contests"
        }).then(function(response) {
            return response.data;
        })
    };
    this.addContest = function(contest) {
      console.log(contest);
        return $http({
            method: "POST",
            url: "/api/contests",
            data: contest
        }).then(function(response) {
            return response.data;
        })
    };

    this.getUser = function(){
      return $http({
        method: "GET",
        url: "/api/users"
      }).then(function(response){
        return response.data;
      })
    };
    this.addFavorite = function(){
      return $http({
        method: "PUT",
        url: "/api/user/addtofavorites/" + userId,
        data: {
          id: favorite._id,
        }
      }).then(function(response){
        return response.data
      })
    };
    this.removeFavorite = function(favorite, userId){
        return $http({
            method: "PUT",
            url: "/api/user/removefromfavorites/" + userId,
            data: {
                id: favorite._id
            }
        }).then(function(response){
            return response.data
        })
    }
    })
