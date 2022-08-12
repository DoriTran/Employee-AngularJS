angular.module('app').component('employee', {
    templateUrl: '/src/pages/employee/Employee.html',
    controller: function EmployeeController(getAllEmployee) {
        getAllEmployee.get().then(function(response) { 
            console.log(response)
            this.page = response.length !== 0 ? 1 : 0
            this.searchResults = response
        })

        this.searchKey = ""
        
        this.checkedID = []
        this.checkAll = false    
    },
    controllerAs: 'employeeCtrl'
})