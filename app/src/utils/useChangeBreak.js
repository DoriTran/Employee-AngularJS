function useChangeBreakCallBack(onBreakFunction, breakVariables) {
    for (const variable of breakVariables) {
        // Variable equal to undefined when it not change
        if (variable !== undefined && variable.currentValue === undefined) { 
            onBreakFunction()
            return true
        }
    }
    return false
}

function useChangeBreak(breakVariables) {
    for (const variable of breakVariables) {
        if (variable !== undefined && variable.currentValue === undefined) { 
            return true
        }
    }
    return false
}