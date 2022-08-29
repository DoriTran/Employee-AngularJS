angular.module('app').directive('team', function() {
    return {
        restrict: 'E',
        controller: function($scope, getAllTeam) {
            let compare = (a,b) => {
                if (a.teamNo > b.teamNo) return 1;
                else if (a.teamNo < b.teamNo) return -1;
                else return 0;
            }

            $scope.refetchTeam = function() {
                getAllTeam.get().then(function(response) {
                    console.log("Refect Team")
                    $scope.teams = response.data
                    $scope.sortedTeam = $scope.teams.sort(compare)
                    $scope.selectedTeam = ($scope.sortedTeam.length > 0) ? $scope.sortedTeam[0].teamNo : 0 
                    $scope.selectedTeamName = ($scope.selectedTeam > 0) ? $scope.sortedTeam.filter(team => team.teamNo === $scope.selectedTeam)[0].teamName : "None"
                })
            }
            $scope.refetchTeam()

            $scope.$watch(() => [$scope.selectedTeam], function() { 
                $scope.selectedTeamName = ($scope.selectedTeam > 0) ? $scope.sortedTeam.filter(team => team.teamNo === $scope.selectedTeam)[0].teamName : "None"
            }, true)       
        },
        templateUrl: '/src/pages/team/Team.html',        
    }
})