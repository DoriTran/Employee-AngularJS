angular.module('app').component('searchBar', {
    templateUrl: 'src/components/employee/SearchBar/SearchBar.html',
    controller: function searchBarController() {

    },
    controllerAs: 'searchBarCtrl',
    bindings: {
        searchkey: "=",
        total: '<'
    }
})