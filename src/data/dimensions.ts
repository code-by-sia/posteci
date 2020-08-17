import Dimension from '@/model/dimension';

export default <Dimension[]>[
    {name: 'application', values: ['security', 'content', 'messaging']},
    {name: 'region', values: ['eu', 'latam', 'mena']},
    {name: 'environment', values: ['local', 'qa', 'prod']}
]
