const useChange = function(effectFunction, checkVariables) {
    checkVariables.forEach(variable => {
        if (variable) {
            if (variable.currentValue !== variable.previousValue) {
                effectFunction()
                return
            }
        }
    })
    return false
}