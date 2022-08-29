angular.module('app').service('addNewAvatar', function($http) {
    this.post = function(no, avatar) {
        console.log(avatar)
        let formdata = new FormData();
        formdata.append('file', avatar);


        return    $http({
                method: 'POST',
                url: API_URL + '/profile/avatar/employeeNo=' + no, formdata,
                headers: {'Content-Type': 'multipart/form-data'},
                data: formdata,
                transformRequest: function(data, headersGetterFunction) {
                    return data; // do nothing! FormData is very good!
                }
            })
    }
})