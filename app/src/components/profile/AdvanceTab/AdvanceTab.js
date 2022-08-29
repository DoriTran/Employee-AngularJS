angular.module('app').directive('advanceTab', function() {
    return {
        restrict: 'E',
        scope: {
            employeeNo: '='
        },
        controller: function($scope, getAdvanceById, deleteAdvance) {
            $scope.isOpenAdvanceModel = false
            $scope.deleteHandler = function(id) {
                deleteAdvance.delete($scope.employeeNo, id).then(response => {
                    $scope.refetchAdvance()
                })
            }
            $scope.refetchAdvance = function() {
                getAdvanceById.get($scope.employeeNo).then(response => {
                    $scope.advances = response.data
                })                
            }
            $scope.refetchAdvance()
        },
        templateUrl: '/src/components/profile/AdvanceTab/AdvanceTab.html',        
    }
})