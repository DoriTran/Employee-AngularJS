angular.module('app').component('navbar', {
    templateUrl: 'src/components/Navbar/Navbar.html',
    controller: function NavbarController() {

    },
    controllerAs: 'navbarCtrl',
    bindings: {
        selected: '@'
    }
})