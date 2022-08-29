angular.module('app').directive('addAdvanceModal', function() {
    return {
        restrict: 'E',
        scope: {
            employeeId: '=',
            isShow: "=",
            refetchAdvance: '&'
        },
        controller: function($scope, postAdvance) {
            // Form update
            $scope.$watch(() => [$scope.isShow], function() {
                $scope.formdata = {
                    employeeNo: $scope.employeeId,
                    date: new Date(),
                    money: 0
                }         
            }, true)

            // Form values
            $scope.formdata = {
                date: new Date(),
                money: 0
            }
            
            // Form validation
            $scope.submitHandler = function($event) {
                $event.preventDefault()

                postAdvance.post($scope.formdata).then(function(response) {
                    $scope.refetchAdvance({})
                    $scope.isShow = false
                })
            }

            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/AddAdvanceModal/AddAdvanceModal.html',         
    }
})