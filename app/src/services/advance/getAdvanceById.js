angular.module('app').service('getAdvanceById', function($http) {
    this.get = function(id) {
        return $http.get(API_URL + '/advance/profile=' + id +'/all')
    }
})