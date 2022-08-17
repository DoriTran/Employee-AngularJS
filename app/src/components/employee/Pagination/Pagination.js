angular.module('app').component('pagination', {
    templateUrl: 'src/components/employee/Pagination/Pagination.html',
    controller: function PaginationController() {
        this.handlePage = (newOffset) => {
            this.page = this.page + newOffset
        }
    },
    controllerAs: 'paginationCtrl',
    bindings: {
        page: '=',
        maxpage: '='
    }
})