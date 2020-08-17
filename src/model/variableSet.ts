import Variable from '@/model/variable';
import VariableSetKey from '@/model/variableSetKey';

export default interface VariableSet {
    key: VariableSetKey
    variables: Variable
}
