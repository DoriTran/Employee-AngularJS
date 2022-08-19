angular.module('app').component('dialogt', {
    transclude: true,
    templateUrl: 'src/overlay/Dialog/Dialog.html',
    controller: function DialogController() {
        this.open = () => { this.setshow(true) }  
        this.close = () => { this.setshow(false)}
    },
    controllerAs: 'dialogCtrl',
    bindings: {
        show: '<',
        setshow: '&'
    }
})