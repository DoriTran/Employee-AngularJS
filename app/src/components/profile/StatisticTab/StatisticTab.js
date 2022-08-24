angular.module('app').directive('statisticTab', function() {
    return {
        restrict: 'E',
        scope: {
            employeeNo: '='
        },
        controller: function($scope) {
            $scope.isOpenWorkingModel = false
            $scope.deleteHandler = function(id) {

            }
        },
        templateUrl: '/src/components/profile/StatisticTab/StatisticTab.html',        
    }
})