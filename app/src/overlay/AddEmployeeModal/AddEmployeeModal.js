angular.module('app').directive('addEmployeeModal', function() {
    return {
        restrict: 'E',
        scope: {
            teams: "=",
            isShow: "=",
            refetchEmployee: '&'
        },
        controller: function($scope, postEmployee) {
            // Form update
            $scope.$watch(() => [$scope.isShow], function() {
                $scope.formdata = {
                    fullName: "",
                    address : "",
                    age : 0,
                    moneyHour : 0,
                    sex : "Female",
                    startDate : new Date(),
                    phone : "",
                    teamNo : 0 ,
                }         
            }, true)

            $scope.$watch(()=>[$scope.teams], function() {
                if ($scope.teams === undefined) {
                    $scope.teamOptions = []
                    return
                }

                $scope.teamOptions = $scope.teams.map(team => {
                    return { option: team.teamName, value: parseInt(team.teamNo) }
                })
            }, true)

            $scope.$watch(()=>[$scope.formdata.fullName], function(){
                console.log($scope.formdata)
            }, true)

            // Form support values
            $scope.teamOptions = []

            // Form values
            $scope.formdata = {
                fullName: "",
                address : "",
                age : 0,
                moneyHour : 0,
                sex : "Female",
                startDate : new Date(),
                phone : "",
                teamNo : 0 ,
            }

            // Form validation
            $scope.ageWarning = ""

            $scope.submitHandler = function($event) {
                $event.preventDefault()

                if ($scope.formdata.age < 18 || $scope.formdata.age > 60) {
                    $scope.ageWarning = "Age must be between 18 and 60"
                    $scope.formdata.age = 18
                    return
                }

                postEmployee.post($scope.formdata).then(function(response) {
                    console.log("res", $scope.refetchEmployee)
                    $scope.refetchEmployee({})
                    $scope.isShow = false
                })
            }

            $scope.cancelHandler = function() {
                $scope.isShow = false
            }
        },
        templateUrl: 'src/overlay/AddEmployeeModal/AddEmployeeModal.html',         
    }
})