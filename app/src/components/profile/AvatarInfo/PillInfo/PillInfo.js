angular.module('app').directive('pillInfo', function() {
    return {
        restrict: 'E',
        scope: {
            backgroundColor: '@',
            color: '@',
            keyInfo: '@',
            value: '@'
        },
        templateUrl: 'src/components/profile/AvatarInfo/PillInfo/PillInfo.html',        
    }
})