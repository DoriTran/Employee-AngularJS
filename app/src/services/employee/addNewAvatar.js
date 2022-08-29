angular.module('app').service('addNewAvatar', function($http) {
    this.post = function(no, avatar) {
        return $http({
            method: 'POST',
            url: API_URL + '/profile/avatar/employeeNo=' + no,
            data: {file: avatar},
            headers: {
                'Content-type': "multipart/form-data"
            }
        });
    }
})