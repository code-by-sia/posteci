import VariableSet from '@/model/variableSet';
import VariableSetKey from '@/model/variableSetKey';
import Variable from '@/model/variable';

function isEqual(keyLeft: VariableSetKey, keyRight: VariableSetKey) {
    for (let key in {...keyLeft, ...keyRight}) {
        if (keyRight[key] != keyLeft[key]) {
            return false;
        }
    }
    return true
}

function canApply(set: VariableSet, filterKey: VariableSetKey) {
    for (let key in set.key) {
        if (set.key[key] === '*') {
            continue;
        }
        if (set.key[key] != filterKey[key]) {
            return false
        }
    }
    return true
}

export default class Environment {
    constructor(private variableSets: VariableSet[] = []) {
    }

    findOrCreate(filter: VariableSetKey): VariableSet {
        const item = this.find(filter)
        return item || this.create(filter);
    }

    find(filter: VariableSetKey): VariableSet {
        return this.variableSets.filter(set => isEqual(set.key, filter))[0]
    }

    create(filter: VariableSetKey) {
        const newVariableSet: VariableSet = {
            key: {...filter},
            variables: {}
        }

        this.variableSets.push(newVariableSet)
        return newVariableSet
    }

    buildFor(key: VariableSetKey): Variable {
        // debugger;
        let variables = {};
        for (let variableSet of this.variableSets) {
            if (canApply(variableSet, key)) {
                this.applySet(variableSet, variables)
            }
        }
        return variables
    }

    private applySet(variableSet: VariableSet, variables: any) {
        for (let variablesKey in variableSet.variables) {
            if (variableSet.variables[variablesKey]) {
                variables[variablesKey] = variableSet.variables[variablesKey]
            }
        }
    }

    update(variableSet: VariableSet | null) {
        if (variableSet === null) {
            return
        }
        this.find(variableSet.key).variables = variableSet.variables
    }
}
