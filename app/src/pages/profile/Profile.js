angular.module('app').directive('profile', function() {
    return {
        restrict: 'E',
        controller: function($scope, $stateParams, getEmployeeInfo, getAllTeam) {
            $scope.EmployeeID = $stateParams.EmployeeID
            $scope.tab = "information"
            $scope.isEditting = false

            $scope.refetchProfile = function() {
                getEmployeeInfo.get($scope.EmployeeID).then(function(response) {
                    $scope.profile = response.data.data
                    $scope.profile.startDate = $scope.profile.startDate.slice(0, 10)
                })
            }
            $scope.refetchProfile()

            $scope.refetchteam = function () {
                getAllTeam.get().then(response => {
                    $scope.teams = response.data
                })
            }
            $scope.refetchteam()

            $scope.getTeamName = function () {
                if ($scope.teams === undefined || $scope.profile === undefined) return ""
                return $scope.teams.filter(team => team.teamNo === $scope.profile.teamNo)[0].teamName
            }
        },
        templateUrl: '/src/pages/profile/Profile.html',        
    }
})