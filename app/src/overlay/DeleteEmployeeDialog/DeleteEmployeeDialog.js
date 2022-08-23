angular.module('app').directive('deleteEmployeeDialog', function() {
    return {
        restrict: 'E',
        scope: {
            isShow: "=",
            checked: "=",
            refetchEmployee: '&'
        },
        controller: function($scope) {
            $scope.deleteHandler = function ($event) {
                $event.preventDefault();
                $scope.checked = []
                $scope.refetchEmployee({})
                $scope.isShow = false                
            }
            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/DeleteEmployeeDialog/DeleteEmployeeDialog.html',
    }
})