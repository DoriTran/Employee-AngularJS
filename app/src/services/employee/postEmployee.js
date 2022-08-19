angular.module('app').service('postEmployee', function($http) {
    this.post = function(data) {
        return $http.post(API_URL + '/employees/new', data)
    }
})