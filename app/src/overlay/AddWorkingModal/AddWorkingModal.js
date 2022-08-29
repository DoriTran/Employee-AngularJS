angular.module('app').directive('addWorkingModal', function() {
    return {
        restrict: 'E',
        scope: {
            employeeId: '=',
            isShow: "=",
            refetchWorking: '&'
        },
        controller: function($scope, postWorking) {
            // Form update
            $scope.$watch(() => [$scope.isShow], function() {
                $scope.formdata = {
                    employeeNo: $scope.employeeId,
                    date: new Date(),
                    hour: 0
                }         
            }, true)

            // Form values
            $scope.formdata = {
                date: new Date(),
                hour: 0
            }

            // Form validation
            $scope.submitHandler = function($event) {
                $event.preventDefault()

                postWorking.post($scope.formdata).then(function(response) {
                    $scope.refetchWorking({})
                    $scope.isShow = false
                })
            }

            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/AddWorkingModal/AddWorkingModal.html',         
    }
})