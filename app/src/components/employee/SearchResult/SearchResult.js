angular.module('app').component('searchResult', {
    templateUrl: 'src/components/employee/SearchResult/SearchResult.html',
    controller: function searchResultController() {
        ('from searchResultController')
        // Function
        this.isCheckAll = () => {

        }
        this.handleCheckAll = () => {
            this.checkall = !this.checkall;
            let currentPageEmployeeNos = this.results.map(employee => employee.no)

            if (!props.checkAll) {
                let newCheckedNos = currentPageEmployeeNos.filter(no => !this.checked.includes(no))
                this.checked = [...prev, ...newCheckedNos]
            } else {
               this.checked = this.checked.filter(no => !currentPageEmployeeNos.includes(no))
            }
        }

        this.isChecked = (no) => {
            if (this.checked.includes(no))
            return this.checked.includes(no)
        }
        this.handleCheck = (newCheckedID) => {
            if (this.checked.includes(newCheckedID)) {
                this.checked = this.checked.filter(each_check => each_check !== newCheckedID)
            }         
            else {
                this.checked = [...this.checked, newCheckedID]
            }
        }

        this.getTeamName = (teamNo) => {
            if (this.teams === undefined) return ""
            return this.teams.filter(team => team.teamNo === teamNo)[0].teamName
        }

        // Component variables
        this.filter_results = []

        // Lifecycle hooks
        this.$onChanges = (changes) => {
            // Still loading
            if (useChangeBreakCallBack(() => {
                this.filter_results = []
            }, [changes.data])) return

            if (useChangeBreak([changes.teams])) return

            // Update page content
            useChange(() => {
                this.filter_results = this.data.slice((this.page - 1) * 10, (this.page - 1) * 10 + 10)
            }, [changes.page, changes.data])
        }
    },
    controllerAs: 'searchResultCtrl',
    bindings: {
        page: '<',
        data: '<',
        teams: '<',
        checked: '=',
        checkall: '='
    }
})