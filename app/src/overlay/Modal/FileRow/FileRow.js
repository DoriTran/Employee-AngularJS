angular.module('app').component('fileRow', {
    templateUrl: 'src/overlay/Modal/FileRow/FileRow.html',
    controller: function FileRowController() {
        this.handleInput = () => {
            // if (this.name === "notObject") {
            //     this.input = event.target.files[0]
            // }
            // else {
            //     this.input = { ...this.input, [this.name]: event.target.files[0] }
            // }
        }
    },
    controllerAs: 'fileRowCtrl',
    bindings: {
        input: '=',
        name: '<',
        required: '<',
        disabled: '<',
        multiple: '<',
        onChangeEvent: '<'
    }
})