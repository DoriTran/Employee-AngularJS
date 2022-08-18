angular.module('app').component('addEmployeeModal', {
    templateUrl: 'src/overlay/AddEmployeeModal/AddEmployeeModal.html', 
    controller: function AddEmployeeModalController() {
        // Form update
        this.$onChanges = (changes) => { 
            console.log(changes)
            useChange(()=> {
                console.log("show", this.show)
                this.fullName = ""
                this.address = ""
                this.age = 0
                this.moneyHour = 0
                this.sex = "Female"
                this.startDate = new Date()
                this.phone = ""
                this.teamNo = 0
            }, [changes.show])

            // Still loading
            if (useChangeBreakCallBack(() => {
                this.teamOptions = []
            }, [changes.teams])) return

            // Update page content
            useChange(() => {
                this.teamOptions = this.teams.map(team => {
                    return { option: team.teamName, value: parseInt(team.teamNo) }
                })
            }, [changes.teams])
        }

        // Form support values
        this.teamOptions = []

        // Form values
        this.fullName = ""
        this.address = ""
        this.age = 0
        this.moneyHour = 0
        this.sex = "Female"
        this.startDate = new Date()
        this.phone = ""
        this.teamNo = 0

        // Form validation
    },
    controllerAs: 'addEmployeeModalCtrl',
    bindings: {
        teams: "<",
        show: "<",
        setshow: "&",
    }
})