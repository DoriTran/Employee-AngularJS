angular.module('app').service('getAllEmployee', function($http) {
    this.get = function() {
        console.log('getAllEmployee: ' + API_URL + '/employees/all')
        return $http.get(API_URL + '/employees/all')
    }
})