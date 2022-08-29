angular.module('app').service('postTeam', function($http) {
    this.post = function(data) {
        return $http.post(API_URL + '/teams/new', data)
    }
})