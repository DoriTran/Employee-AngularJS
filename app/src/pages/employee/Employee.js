angular.module('app').component('employee', {
    templateUrl: '/src/pages/employee/Employee.html',
    controller: function EmployeeController(getAllEmployee, getAllTeam) {
        // Employee Fetch
        this.page = 1
        this.maxpage = 1
        this.total = 1
        this.results = []

        // Team Fetch
        this.teams = []

        // Controller
        this.searchKey = ""        
        this.checkedID = []
        this.checkAll = false

        getAllEmployee.get().then(response => { 
            this.employee_data = response.data
            this.page = response.data.length !== 0 ? 1 : 0
            this.total = response.data.length
            this.maxpage = Math.ceil(this.total / 10)
        })  
        getAllTeam.get().then(response => {
            this.teams = response.data
        })        
    },
    controllerAs: 'employeeCtrl'
})