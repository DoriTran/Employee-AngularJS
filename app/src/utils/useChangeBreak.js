const useChangeBreak = function (onBreakFunction, breakVariables) {
    breakVariables.forEach(variables => {
        if (variables === undefined) { 
            onBreakFunction()
            return true
        }
    })
    return false
}