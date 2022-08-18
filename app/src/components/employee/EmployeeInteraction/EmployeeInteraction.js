angular.module('app').component('employeeInteraction', {
    templateUrl: '/src/components/employee/EmployeeInteraction/EmployeeInteraction.html',
    controller: function EmployeeInteractionController() {
        this.isOpeningAddModal = false;
        this.setOpeningAddModal = function (status) {
            this.isOpeningAddModal = status
        }
        this.isOpeningDelModal = false;
        this.setOpeningDelModal = function (status) {
            this.isOpeningDelModal = status
        }
    },
    controllerAs: 'employeeInteractionCtrl',
    bindings: {
        teams: '<',
        checkedID: '=',
        checkAll: '=',
    }
})