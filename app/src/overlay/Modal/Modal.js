angular.module('app').component('modal', {
    transclude: true,
    templateUrl: 'src/overlay/Modal/Modal.html',
    controller: function ModalController() {
        this.open = () => { this.setshow(true) }  
        this.close = () => { this.setshow(false)}
    },
    controllerAs: 'modalCtrl',
    bindings: {
        show: '<',
        setshow: '&'
    }
})