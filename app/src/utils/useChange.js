function useChange(effectFunction, checkVariables) {
    for (const variable of checkVariables) {
        if (variable) {
            if (variable.currentValue !== variable.previousValue) {
                effectFunction()
                return
            }
        }
    }
}