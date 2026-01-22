module.exports = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
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
            welcome: '/api/welcome?name=John&grupame=MyGroup&member=42',
            goodbye: '/api/goodbye?name=Jane&member=99'
        },
        github: 'https://github.com/bruno918/canvas_welcome'
    });
};