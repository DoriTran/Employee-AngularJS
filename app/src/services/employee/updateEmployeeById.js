angular.module('app').service('updateEmployeeById', function($http) {
    this.put = function(data) {
        return $http.put(API_URL + '/employees/update/id=' + data.no, data)
    }
})