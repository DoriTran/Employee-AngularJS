angular.module('app').service('postWorking', function($http) {
    this.post = function(data) {
        return $http.post(API_URL + '/working/new', data)
    }
})