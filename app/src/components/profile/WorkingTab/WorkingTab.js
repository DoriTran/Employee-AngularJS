angular.module('app').directive('workingTab', function() {
    return {
        restrict: 'E',
        scope: {
            employeeNo: '='
        },
        controller: function($scope, getWorkingById, postWorking) {
            $scope.isOpenWorkingModel = false
            $scope.submitHandler = function() {
            }
            $scope.deleteHandler = function(id) {

            }
            getWorkingById.get($scope.employeeNo).then(response => {
                $scope.workings = response.data
            })
        },
        templateUrl: '/src/components/profile/WorkingTab/WorkingTab.html',        
    }
})