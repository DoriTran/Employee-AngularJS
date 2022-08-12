angular.module('app').service('getAllEmployee', function($http) {
    this.get = function() {
        return $http.get('http://localhost:8080/' + 'employees/all')
    }
})