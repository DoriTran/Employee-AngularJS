angular.module('app').directive('infomationTab', function() {
    return {
        restrict: 'E',
        scope: {
            profile: '=',
            teams: '=',
            isEditting: '=',
        },
        controller: function($scope, updateEmployeeById) {
            $scope.profile.startDate = new Date($scope.profile.startDate)

            $scope.formdata = { ...$scope.profile}
            $scope.formdata.startDate = new Date($scope.formdata.startDate)

            $scope.teamOptions = $scope.teams.map(team => {
                return { option: team.teamName, value: parseInt(team.teamNo) }
            })
            $scope.$watch(()=>[$scope.isEditting], function() {
                if ($scope.isEditting) return
                if (JSON.stringify($scope.formdata) === JSON.stringify($scope.profile)) return

                updateEmployeeById.put($scope.formdata)
            }, true)
        },
        templateUrl: 'src/components/profile/InfomationTab/InfomationTab.html',        
    }
})