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
            console.log('isEditting', $scope.isEditting)
            $scope.$watch(()=>[$scope.isEditting], function() {
                console.log('isEditting', $scope.isEditting)
            }, true)
            $scope.changeState = function() {
                $scope.isEditting = !$scope.isEditting
            }
        },
        templateUrl: '/src/components/profile/ProfileInteraction/ProfileInteraction.html',        
    }
})