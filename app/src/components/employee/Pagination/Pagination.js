angular.module('app').directive('pagination', function() {
    return {
        restrict: 'E',
        scope: {
            page: '=',
            maxPage: '=',
        },
        controller: function($scope) {
            $scope.handlePage = (newOffset) => {
                $scope.page = $scope.page + newOffset
            }
        },
        templateUrl: 'src/components/employee/Pagination/Pagination.html',
    }
})