angular.module('app').service('deleteListEmployee', function($http) {
    this.delete = function(data) {
        return $http({
            method: 'DELETE',
            url: API_URL + '/employees/delete/allByArrId',
            data: data,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        });
    }
})