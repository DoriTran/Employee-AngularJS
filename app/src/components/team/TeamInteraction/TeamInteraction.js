angular.module('app').directive('teamInteraction', function() {
    return {
        restrict: 'E',
        scope: {
            teams: '=',
            refetchTeam: '&'
        },
        controller: function($scope, postEmployee) {
            $scope.isOpenTeamModal = false
        },
        templateUrl: '/src/components/team/TeamInteraction/TeamInteraction.html',        
    }
})