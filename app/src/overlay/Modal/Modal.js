angular.module('app').directive('modal', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            isShow: '='
        },
        controller: function($scope) {
            $scope.open = () => {$scope.isShow = true}
            $scope.close = () => {$scope.isShow = false}
        },
        templateUrl: 'src/overlay/Modal/Modal.html',
    }
})