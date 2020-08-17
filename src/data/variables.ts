import VariableSet from '@/model/variableSet';

export default <VariableSet[]>[
    {
        key: {
            application: '*',
            region: '*',
            environment: '*'
        },
        variables: {
            protocol: 'HTTP',
            host: 'localhost',
            token: 'bearer("MY TOKEN")'
        }
    },
    {
        key: {
            application: '*',
            region: '*',
            environment: 'local'
        },
        variables: {
            host: 'localhost(TOMCAT)',
            username: 'secret("test")',
            password: '"test"'
        }
    }
]
