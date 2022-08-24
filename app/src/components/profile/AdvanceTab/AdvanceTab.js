angular.module('app').directive('advanceTab', function() {
    return {
        restrict: 'E',
        scope: {
            employeeNo: '='
        },
        controller: function($scope, getAdvanceById, postAdvance) {
            $scope.isOpenAdvanceModel = false
            $scope.submitHandler = function() {
                
            }
            $scope.deleteHandler = function(id) {

            }
            getAdvanceById.get($scope.employeeNo).then(response => {
                $scope.advances = response.data
            })
        },
        templateUrl: '/src/components/profile/AdvanceTab/AdvanceTab.html',        
    }
})