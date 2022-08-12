angular.module('app').component('searchBar', {
    templateUrl: 'src/components/employee/SearchBar/SearchBar.html',
    controller: function SearchBarController() {

    },
    controllerAs: 'searchBarCtrl',
    bindings: {
        searchKey: "=",
        total: '<'
    }
})