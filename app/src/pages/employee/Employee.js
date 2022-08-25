angular.module('app').directive('employee', function () {
    return {
        restrict: 'E',
        controller: function ($scope, getAllEmployee, getAllTeam) {
            // Employee state
            $scope.page = 1
            $scope.maxPage = 1
            $scope.total = 1

            // Employee control
            $scope.searchkey = ''
            $scope.checked = []
            $scope.checkall = false

            // Fetching data from server
            $scope.refetchEmployee = function () {
                console.log('refetching employee')
                getAllEmployee.get().then(response => {
                    $scope.employee_data = response.data
                    $scope.page = response.data.length !== 0 ? 1 : 0
                    $scope.total = response.data.length
                    $scope.maxPage = Math.ceil(this.total / 10)
                })
            }
            $scope.refetchEmployee()

            $scope.refetchteam = function () {
                getAllTeam.get().then(response => {
                    $scope.teams = response.data
                })
            }
            $scope.refetchteam()
        },
        templateUrl: '/src/pages/employee/Employee.html',
    }
})