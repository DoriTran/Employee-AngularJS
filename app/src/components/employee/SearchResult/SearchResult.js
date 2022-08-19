angular.module('app').component('searchResult', {
    templateUrl: 'src/components/employee/SearchResult/SearchResult.html',
    controller: function searchResultController() {
        // Function
        this.isCheckAll = () => {
            let currentPageEmployeeNos = this.filter_results.map(employee => employee.no)
            for (let each of currentPageEmployeeNos) {
                if (!this.checked.includes(each)) {
                    this.checkall = false
                    return false
                }
            }
            if (this.checked.length === 0) {
                this.checkall = false
                return false
            }
            this.checkall = true
            return true
        }
        this.handleCheckAll = () => {
            this.checkall = !this.checkall;
            let currentPageEmployeeNos = this.filter_results.map(employee => employee.no)

            if (this.checkall) {
                let newCheckedNos = currentPageEmployeeNos.filter(no => !this.checked.includes(no))
                this.checked = [...this.checked, ...newCheckedNos]
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
                // Result
                let search_result = this.data.filter(
                    employee => toLowerCaseNonAccentVietnamese(employee.fullName)
                    .includes(toLowerCaseNonAccentVietnamese(this.searchkey)))
                // Page
                console.log("maxpage", this.maxPage)
                this.maxPage = Math.ceil(search_result.length / 10)              
                if (this.page > this.maxPage) {                 
                    this.setPage({"newpage": this.maxPage})
                } else if (this.page === 0 && this.maxPage > 0) {
                    this.setPage({"newpage": 1})
                }
                
                console.log(this.page, this.maxPage)
                // Set filter
                this.filter_results = search_result.slice((this.page - 1) * 10, (this.page - 1) * 10 + 10)
            }, [changes.page, changes.data, changes.searchkey])
        }
    },
    controllerAs: 'searchResultCtrl',
    bindings: {
        page: '<',
        maxPage: '=',
        setPage: '&?',
        searchkey: '<',
        data: '<',
        teams: '<',
        checked: '=',
        checkall: '='
    }
})