angular.module('app').directive('teamTable', function() {
    return {
        restrict: 'E',
        scope: {
            teams: '=',
            selectedTeam: '=',
            sortedTeam: '=',
        },
        controller: function($scope, postEmployee) {
            $scope.isOpenTeamModal = false
            
            $scope.changeTeam = function(team) {
                $scope.selectedTeam = team
            }
        },
        templateUrl: '/src/components/team/TeamTable/TeamTable.html',        
    }
})