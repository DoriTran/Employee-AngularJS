angular.module('app').directive('fileRow', function() {
    return {
        restrict: 'E',
        scope: {
            input: '=',

            required: '@?',
            disabled: '@?',

            onChangeEvent: '&?'
        },
        controller: function($scope) {
            $scope.SelectFile = function (e) {
                $scope.input = e.target.files[0];
            };
        },
        templateUrl: 'src/overlay/Modal/FileRow/FileRow.html',
    }
})