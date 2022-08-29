angular.module('app').service('deleteAdvance', function($http) {
    this.delete = function(no, id) {
        return $http.delete(API_URL + "/advance/delete/profile=" + no + "/advanceNo=" + id)
    }
})