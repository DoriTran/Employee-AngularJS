angular.module('app').service('deleteEmployee', function($http) {
    this.delete = function(id) {
        return $http({
            method: 'DELETE',
            url: API_URL + '/employees/delete/id=' + id
        });
    }
})