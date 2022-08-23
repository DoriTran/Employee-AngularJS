angular.module('app').directive('navbar', function() {
    return {
        restrict: 'E',
        scope: {
            selected: '@'
        },
        templateUrl: 'src/components/Navbar/Navbar.html',
    }
})