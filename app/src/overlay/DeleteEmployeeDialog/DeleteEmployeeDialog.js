angular.module('app').component('deleteEmployeeDialog', {
    templateUrl: 'src/overlay/DeleteEmployeeDialog/DeleteEmployeeDialog.html', 
    controller: function DeleteEmployeeDialoglController($scope, deleteListEmployee) {

        this.deleteHandler = function ($event) {
            $event.preventDefault();

            deleteListEmployee.delete(this.checked)
        }
    },
    controllerAs: 'deleteEmployeeDialog',
    bindings: {
        show: "<",
        setshow: "&",
        checked: '='
    }
})