angular.module('app').service('getAllEmployee', function($http) {
    this.get = function() {
        return $http.get(API_URL + '/employees/all')
    }
})