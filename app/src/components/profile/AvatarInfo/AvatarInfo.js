angular.module('app').directive('avatarInfo', function() {
    return {
        restrict: 'E',
        scope: {
            employeeNo: '=',
            profile: '=',
            refetchProfile: '&',
        },
        controller: function($scope) {
            $scope.isOpenAvatarModal = false
            $scope.getAvatarSource = function() {
                if ($scope.profile !== undefined && $scope.profile.avatar !== null) {
                    return API_URL + "/profile/avatar/files/" + $scope.profile.avatar
                }
                return $scope.profile.sex === "Female" ? "/src/components/profile/DefaultWomanAvatar.png" : "/src/components/profile/DefaultManAvatar.png"
            }
        },
        templateUrl: 'src/components/profile/AvatarInfo/AvatarInfo.html',        
    }
})