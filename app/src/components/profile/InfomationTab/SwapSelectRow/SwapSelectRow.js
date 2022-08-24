angular.module('app').directive('swapSelectRow', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            label: '@',
            model: '=',
            options: '=',
            pairs: '=',
            disabled: '=',
        },
        controller: function($scope) {
        },
        templateUrl: 'src/components/profile/InfomationTab/SwapSelectRow/SwapSelectRow.html',        
    }
})