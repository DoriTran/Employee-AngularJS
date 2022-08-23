angular.module('app').directive('dialogt', function() {
    return {
        restrict: 'E',
        transclude: true,   
        scope: {
            isShow: '='
        },
        controller: function ($scope) {
            $scope.open = () => { $scope.isShow = true }
            $scope.close = () => { $scope.isShow = false }
        },
        templateUrl: 'src/overlay/Dialog/Dialog.html',
    }
})