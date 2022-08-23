angular.module('app').directive('searchBar', function() {
    return {
        restrict: 'E',
        scope: {
            searchKey: '=',
            total: '=',
        },
        templateUrl: 'src/components/employee/SearchBar/SearchBar.html',    
    }
})