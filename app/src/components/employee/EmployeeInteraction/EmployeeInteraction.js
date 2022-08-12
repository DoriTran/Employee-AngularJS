angular.module('app').component('employeeInteraction', {
    templateUrl: '/src/components/employee/EmployeeInteraction/EmployeeInteraction.html',
    controller: function NavbarController() {
        this.isOpeningAddModal = false;
        this.setOpeningAddModal = function (status) {
            this.isOpeningAddModal = status
        }

        // opening del modal status
        this.isOpeningDelModal = false;
        this.setOpeningDelModal = function (status) {
            this.isOpeningDelModal = status
        }
    },
    controllerAs: 'NavbarCtrl',
    bindings: {
        checkedID: '=',
        checkAll: '=',
    }
})