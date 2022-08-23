angular.module('app').directive('inputRow', function() {
    return {
        restrict: 'E',
        scope: {
            input: '=',

            label: '@?',
            warning: '=?',   
            type: '@',
            name: '@?',
            placeholder: '@?',
            max: '@?',
            min: '@?',
            maxLength: '@?',
            regex: '@?',
            required: '@?',
            disabled: '@?',
    
            onChangeEvent: '&?'
        },
        controller: function($scope) {

        },
        templateUrl: 'src/overlay/Modal/InputRow/InputRow.html',       
    }
})