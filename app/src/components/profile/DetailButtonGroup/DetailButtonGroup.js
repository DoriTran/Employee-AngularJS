angular.module('app').directive('detailButtonGroup', function() {
    return {
        restrict: 'E',
        scope: {
            tab: '='
        },
        templateUrl: '/src/components/profile/DetailButtonGroup/DetailButtonGroup.html',        
    }
})