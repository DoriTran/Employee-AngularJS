angular.module('app').service('getAllTeam', function($http) {
    this.get = function() {
        return $http.get(API_URL + '/teams/all')
    }
})