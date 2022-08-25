angular.module('app').directive('detailButtonGroup', function() {
    return {
        restrict: 'E',
        scope: {
            tab: '='
        },
        controller: function($scope) {
            $scope.changeTab = function(newTab) {
                $scope.tab = newTab;
            }
        },
        templateUrl: '/src/components/profile/DetailButtonGroup/DetailButtonGroup.html',        
    }
})