angular.module('app').service('postAdvance', function($http) {
    this.post = function(data) {
        return $http.post(API_URL + '/advance/new', data)
    }
})