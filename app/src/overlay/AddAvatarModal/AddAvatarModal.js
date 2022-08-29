angular.module('app').directive('addAvatarModal', function() {
    return {
        restrict: 'E',
        scope: {
            employeeId: '=',
            isShow: "=",
            refetchProfile: '&'
        },
        controller: function($scope, addNewAvatar) {
            // Form data
            $scope.formdata = {avatar: undefined};

            // Form update
            $scope.$watch(() => [$scope.isShow], function() {
                $scope.formdata = {avatar: undefined};        
            }, true)

            // Form validation
            $scope.submitHandler = function($event) {
                $event.preventDefault()

                addNewAvatar.post($scope.employeeId, $scope.formdata.avatar).then(function(response) {
                    $scope.refetchProfile({})
                    $scope.isShow = false
                })
            }

            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/AddAvatarModal/AddAvatarModal.html',         
    }
})