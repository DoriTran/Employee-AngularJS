angular.module('app').directive('addTeamModal', function() {
    return {
        restrict: 'E',
        scope: {
            isShow: "=",
            refetchTeam: '&'
        },
        controller: function($scope, postTeam) {
            // Form update
            $scope.$watch(() => [$scope.isShow], function() {
                $scope.formdata = {
                    teamName: ""
                }         
            }, true)

            // Form values
            $scope.formdata = {
                newTeam: ""
            }
            
            // Form validation
            $scope.submitHandler = function($event) {
                $event.preventDefault()

                postTeam.post($scope.formdata).then(function(response) {
                    $scope.refetchTeam({})
                    $scope.isShow = false
                })
            }

            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/addTeamModal/addTeamModal.html',         
    }
})