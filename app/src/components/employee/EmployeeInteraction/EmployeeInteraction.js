angular.module('app').component('employeeInteraction', {
    templateUrl: '/src/components/employee/EmployeeInteraction/EmployeeInteraction.html',
    controller: function EmployeeInteractionController($scope) {
        this.isOpeningAddModal = false;
        this.setOpeningAddModal = function (status) {
            this.isOpeningAddModal = status
        }
        this.isOpeningDelModal = false;
        this.setOpeningDelModal = function (status) {
            this.isOpeningDelModal = status
        }

        $scope.$watch(()=> [this.isOpeningAddModal, this.isOpeningDelModal], 
        function (newValue) {
            console.log(newValue)
        }, true)
    },
    controllerAs: 'employeeInteractionCtrl',
    bindings: {
        teams: '<',
        checked: '=',
        checkall: '=',
    }
})