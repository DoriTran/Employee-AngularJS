angular.module('app').component('selectRow', {
    templateUrl: 'src/overlay/Modal/SelectRow/SelectRow.html',
    controller: function SelectRowController() {

        this.handleInput = () => {
            // if (this.name === "notObject") {
            //     this.input = event.target.files[0]
            // }
            // else {
            //     this.input = { ...this.input, [this.name]: event.target.files[0] }
            // }
        }
    },
    controllerAs: 'selectRowCtrl',
    bindings: {
        input: '=',
        options: '<',
        pairs: '<',

        label: '<',
        warning: '<',

        name: '<',
        value: '<',

        required: '<',
        disabled: '<',
        
        onChangeEvent: '<'
    }
})