angular.module('app').service('getAllEmployeeByTeam', function($http) {
    this.get = function(id) {
        return $http.get(API_URL + '/employees/team=' + id)
    }
})