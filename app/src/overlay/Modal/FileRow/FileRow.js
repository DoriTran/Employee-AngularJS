angular.module('app').directive('fileRow', function() {
    return {
        restrict: 'E',
        scope: {
            input: '=',

            name: '@?',
            required: '@?',
            disabled: '@?',
            multiple: '@?',

            onChangeEvent: '&?'
        },
        templateUrl: 'src/overlay/Modal/FileRow/FileRow.html',
    }
})