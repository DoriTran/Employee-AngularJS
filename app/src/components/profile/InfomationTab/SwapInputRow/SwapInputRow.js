angular.module('app').directive('swapInputRow', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            label: '@',
            model: '=',
            disabled: '=',
            holder: '@',
        },
        controller: function($scope) {
        },
        templateUrl: 'src/components/profile/InfomationTab/SwapInputRow/SwapInputRow.html',        
    }
})