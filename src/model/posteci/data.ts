import Dimension from '@/model/dimension';
import Domain from '@/model/domain';
import VariableSet from '@/model/variableSet';

export interface Data {
    dimensions: Dimension[]
    domains: Domain[]
    variableSets: VariableSet[]
}
