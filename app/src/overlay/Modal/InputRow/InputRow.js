angular.module('app').component('inputRow', {
    templateUrl: 'src/overlay/Modal/InputRow/InputRow.html',
    controller: function InputRowController() {
        this.handleInput = () => {
            // if (this.name === "notObject") {
            //     this.input = event.target.files[0]
            // }
            // else {
            //     this.input = { ...this.input, [this.name]: event.target.files[0] }
            // }
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

        maxlength: '@',

        regex: '@',

        required: '<',
        disabled: '<',
        
        onChangeEvent: '<'
    }
})