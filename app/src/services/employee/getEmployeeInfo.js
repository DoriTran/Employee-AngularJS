angular.module('app').service('getEmployeeInfo', function($http) {
    this.get = function(id) {
        return $http.get(API_URL + '/employees/profile/id=' + id)
    }
})