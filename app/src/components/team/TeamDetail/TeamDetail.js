angular.module('app').directive('teamDetail', function() {
    return {
        restrict: 'E',
        scope: {
            selectedTeam: '=',
            selectedTeamName: '='
        },
        controller: function($scope, getAllEmployeeByTeam) {
            $scope.refetchEmployee = function() {
                if ($scope.selectedTeam <= 0 || $scope.selectedTeam === undefined) $scope.members = []
                else {
                    getAllEmployeeByTeam.get($scope.selectedTeam).then(function(response) {
                        $scope.members = response.data.data
                    })
                }
                
            }
            $scope.refetchEmployee()

            $scope.$watch(() => [$scope.selectedTeam], function() {
                $scope.refetchEmployee()
            }, true)
        },
        templateUrl: '/src/components/team/TeamDetail/TeamDetail.html',        
    }
})