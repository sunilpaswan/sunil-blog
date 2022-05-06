const config = {
    development: {
        name: 'Sunil Paswan',
        description: 'Thoughts, stories and ideas.',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'Sunil Paswan',
        description: 'Thoughts, stories and ideas.',
        twitterHandle: '@3dFired',
        baseUrl: 'https://blog.squido.org',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        plugins: [
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
