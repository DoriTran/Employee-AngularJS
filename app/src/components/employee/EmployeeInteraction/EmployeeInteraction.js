angular.module('app').directive('employeeInteraction', function() {
    return {
        restrict: 'E',
        scope: {
            teams: '=',
            checked: '=',
            checkall: '=',
            refetchEmployee: '&'
        },
        controller: function($scope) {
            $scope.isOpeningAddModal = false;
            $scope.isOpeningDelModal = false;      
        },
        templateUrl: '/src/components/employee/EmployeeInteraction/EmployeeInteraction.html',
    }
})