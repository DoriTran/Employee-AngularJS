angular.module('app').directive('profileInteraction', function() {
    return {
        restrict: 'E',
        scope: {
            profile: '=',
            refetchProfile: '&',
            tab: '=',
            isEditting: '=',
        },
        controller: function($scope, postAdvance) {
            $scope.isOpeningDelModal = false
            
            $scope.changeState = function() {
                $scope.isEditting = !$scope.isEditting
                if ($scope.isEditting) $scope.tab = "information"
            }
        },
        templateUrl: '/src/components/profile/ProfileInteraction/ProfileInteraction.html',        
    }
})