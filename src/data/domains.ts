import Domain from '@/model/domain';

export default <Domain[]>[
    {
        name: 'User',
        requests: [
            {
                name: 'Me',
                method: 'GET',
                protocol: 'HTTP',
                path: 'env.host + "/api/1/me"',
                headers: [
                    {name: 'Content-Type', value: 'contentType.json'}
                ]
            }, {
                name: 'Login',
                method: 'POST',
                protocol: 'HTTP',
                path: 'env.host + "/api/1/form"',
                body: `json({
    username: env.username,
    password: env.password
})`,
                headers: [
                    {name: 'Content-Type', value: 'contentType.json'},
                    {name: 'Accept', value: 'responseType.json'}
                ]
            }, {
                name: 'Refresh token',
                method: 'PUT',
                path: 'env.host + "/api/1/access-token"',
                protocol: 'env.protocol',
                headers: [
                    {name: 'Authorization', value: 'env.token'}
                ],
                body: `"{}"`
            }
        ]
    }, {
        name: 'Posts',
        requests: [
            {
                name: 'Create post',
                method: 'POST',
                path: 'env.host + "/api/1/posts"',
                protocol: 'env.protocol',
                headers: [
                    {name: 'Authorization', value: 'env.token'}
                ],
                body: `json({
    id: fake.id,
    user: fake.id,
    title: fake.name,
    expire: fake.date
})`
            }
        ]

    }, {
        name: 'Chat',
        requests: []
    }
]
