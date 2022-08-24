angular.module('app').service('getWorkingById', function($http) {
    this.get = function(id) {
        return $http.get(API_URL + '/working/profile=' + id +'/all')
    }
})