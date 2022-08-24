angular.module('app').directive('infomationTab', function() {
    return {
        restrict: 'E',
        scope: {
            profile: '=',
            teams: '=',
            isEditting: '=',
        },
        controller: function($scope, updateEmployeeById) {
            $scope.formdata = $scope.profile
            $scope.teamOptions = $scope.teams.map(team => {
                return { option: team.teamName, value: parseInt(team.teamNo) }
            })
        },
        templateUrl: 'src/components/profile/InfomationTab/InfomationTab.html',        
    }
})