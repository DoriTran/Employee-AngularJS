angular.module('app').directive('deleteProfileDialog', function() {
    return {
        restrict: 'E',
        scope: {
            isShow: "=",
            employeeId: "=",
        },
        controller: function($scope, $state, deleteEmployee) {
            $scope.deleteHandler = function ($event) {
                $event.preventDefault();
                $scope.isShow = false
                deleteEmployee.delete($scope.employeeId).then(response => {
                    $state.go("employee")                              
                })

            }
            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/DeleteEmployeeDialog/DeleteEmployeeDialog.html',
    }
})