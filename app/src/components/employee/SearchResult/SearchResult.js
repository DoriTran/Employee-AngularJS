angular.module('app').directive('searchResult', function() {
    return {
        restrict: 'E',
        scope: {
            page: '=',
            maxPage: '=',
            searchKey: '=',
            data: '=',
            teams: '=',
            checked: '=',
            checkall: '=',
            refetchEmployee: '&'
        },
        controller: function($scope, deleteEmployee) {
            $scope.isCheckAll = () => {
                let currentPageEmployeeNos = $scope.filter_results.map(employee => employee.no)
                for (let each of currentPageEmployeeNos) {
                    if (!$scope.checked.includes(each)) {
                        $scope.checkall = false
                        return false
                    }
                }
                if ($scope.checked.length === 0) {
                    $scope.checkall = false
                    return false
                }
                $scope.checkall = true
                return true
            }
            $scope.handleCheckAll = () => {
                $scope.checkall = !$scope.checkall;
                let currentPageEmployeeNos = $scope.filter_results.map(employee => employee.no)
    
                if ($scope.checkall) {
                    let newCheckedNos = currentPageEmployeeNos.filter(no => !$scope.checked.includes(no))
                    $scope.checked = [...$scope.checked, ...newCheckedNos]
                } else {
                    $scope.checked = $scope.checked.filter(no => !currentPageEmployeeNos.includes(no))
                }
            }
    
            $scope.isChecked = (no) => {
                if ($scope.checked.includes(no))
                return $scope.checked.includes(no)
            }
            $scope.handleCheck = (newCheckedID) => {       
                if ($scope.checked.includes(newCheckedID)) {
                    $scope.checked = $scope.checked.filter(each_check => each_check !== newCheckedID)
                }         
                else {
                    $scope.checked = [...$scope.checked, newCheckedID]
                }
            }
    
            $scope.getTeamName = (teamNo) => {
                if ($scope.teams === undefined) return ""
                return $scope.teams.filter(team => team.teamNo === teamNo)[0].teamName
            }

            $scope.deleteHandler = (id) => {
                deleteEmployee.delete(id).then(function(response) {
                    $scope.refetchEmployee({})
                })
            }
    
            // Component variables
            $scope.filter_results = []
    
            // Lifecycle hooks
            $scope.$watch(()=>[$scope.page, $scope.data, $scope.searchKey], function() {
                // Check undefined
                if ($scope.data === undefined) return

                // Result
                let search_result = $scope.data.filter(
                    employee => toLowerCaseNonAccentVietnamese(employee.fullName)
                    .includes(toLowerCaseNonAccentVietnamese($scope.searchKey)))

                // Page
                $scope.maxPage = Math.ceil(search_result.length / 10)              
                if ($scope.page > $scope.maxPage) {                 
                    $scope.page = $scope.maxPage
                } else if ($scope.page === 0 && $scope.maxPage > 0) {
                    $scope.page = 1
                }
                
                // Set filter
                $scope.filter_results = search_result.slice(($scope.page - 1) * 10, ($scope.page - 1) * 10 + 10)                
            }, true)
        },
        templateUrl: 'src/components/employee/SearchResult/SearchResult.html',        
    }
})