module.exports = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        message: 'Welcome/Goodbye Canvas API',
        endpoints: {
            welcome: {
                url: '/api/welcome',
                method: 'GET/POST',
                params: ['name', 'profile', 'bg', 'grupame', 'member']
            },
            goodbye: {
                url: '/api/goodbye',
                method: 'GET/POST',
                params: ['name', 'profile', 'bg', 'member']
            }
        },
        example: {
            welcome: '/api/welcome?name=John&profile=https://example.com/avatar.jpg&grupame=MyGroup&member=42',
            goodbye: '/api/goodbye?name=Jane&profile=https://example.com/avatar2.jpg&member=42'
        }
    });
};