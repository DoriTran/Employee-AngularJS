angular.module('app').directive('workingTab', function() {
    return {
        restrict: 'E',
        scope: {
            employeeNo: '='
        },
        controller: function($scope, getWorkingById, deleteWorking) {
            $scope.isOpenWorkingModel = false
            $scope.deleteHandler = function(id) {
                deleteWorking.delete($scope.employeeNo, id).then(response => {
                    $scope.refetchWorking()
                })
            }
            $scope.refetchWorking = function() {
                getWorkingById.get($scope.employeeNo).then(response => {
                    $scope.workings = response.data
                })
            }
            $scope.refetchWorking()
        },
        templateUrl: '/src/components/profile/WorkingTab/WorkingTab.html',        
    }
})