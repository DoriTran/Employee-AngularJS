angular.module('app').service('deleteWorking', function($http) {
    this.delete = function(no, id) {
        return $http.delete(API_URL + "/working/delete/profile=" + no + "/workingNo=" + id)
    }
})