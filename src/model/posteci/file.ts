import {Data} from '@/model/posteci/data';
import {Metadata} from '@/model/posteci/metadata';

export default interface File {
    metadata: Metadata
    data: Data
}
