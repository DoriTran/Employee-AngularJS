angular.module('app').directive('selectRow', function() {
    return {
        restrict: 'E',
        scope: {
            input: '=',

            options: '=?',
            pairs: '=?',

            label: '@?',
            warning: '@?',
            name: '@?',
            value: '@?',
            required: '@?',
            disabled: '@?',
          
            onChangeEvent: '&?'            
        },
        controller: function($scope) {

        },
        templateUrl: 'src/overlay/Modal/SelectRow/SelectRow.html',        
    }
})