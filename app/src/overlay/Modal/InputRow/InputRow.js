angular.module('app').component('inputRow', {
    templateUrl: 'src/overlay/Modal/InputRow/InputRow.html',
    controller: function InputRowController() {
        this.handleInput = () => {

        }
    },
    controllerAs: 'inputRowCtrl',
    bindings: {
        input: '=',

        label: '<',
        warning: '<',

        type: '@',
        name: '<',
        placeholder: '@',
        max: '@',
        min: '@',

        maxLength: '@',

        regex: '@',

        required: '<',
        disabled: '<',
        
        onChangeEvent: '<'
    }
})