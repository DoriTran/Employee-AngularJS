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

            $scope.$watch(()=> [$scope.isOpeningAddModal, $scope.isOpeningDelModal], 
            function (newValue) { 
                console.log(newValue)
            }, true)            
        },
        templateUrl: '/src/components/employee/EmployeeInteraction/EmployeeInteraction.html',
    }
})