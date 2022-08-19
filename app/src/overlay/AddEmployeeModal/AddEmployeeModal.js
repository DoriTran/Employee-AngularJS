angular.module('app').component('addEmployeeModal', {
    templateUrl: 'src/overlay/AddEmployeeModal/AddEmployeeModal.html', 
    controller: function AddEmployeeModalController($scope, postEmployee) {
        // Form update
        this.$onChanges = (changes) => { 
            useChange(()=> {
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
        this.ageWarning = ""

        this.submitHandler = function($event) {
            $event.preventDefault()

            if (this.age < 18 || this.age > 60) {
                this.ageWarning = "Age must be between 18 and 60"
                this.age = 18
                return
            }

            let employeeData = {fullName: this.fullName, address: this.address, age: this.age,
                moneyHour: this.moneyHour, sex: this.sex, 
                startDate: this.startDate, phone: this.phone, teamNo: this.teamNo}

            postEmployee.post(employeeData)
        }
    },
    controllerAs: 'addEmployeeModalCtrl',
    bindings: {
        teams: "<",
        show: "<",
        setshow: "&",
    }
})