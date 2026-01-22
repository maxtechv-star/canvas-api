const { goodbye } = require('../index.js');

module.exports = async (req, res) => {
    try {
        // Handle CORS
        if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            return res.status(200).end();
        }
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        
        // Get parameters
        const params = req.method === 'POST' ? req.body : req.query;
        
        const goodbyeCard = new goodbye()
            .setName(params.name || 'User')
            .setProfile(params.profile || 'https://i.ibb.co/G5mJZxs/rin.jpg')
            .setBg(params.bg || 'https://telegra.ph/file/9c4f90673ba1fe158fc3f.jpg')
            .setMember(params.member || '1');
        
        const canvas = await goodbyeCard.startGoodbye();
        const buffer = canvas.toBuffer('image/png');
        
        res.setHeader('Content-Type', 'image/png');
        res.status(200).send(buffer);
        
    } catch (error) {
        console.error('Error:', error);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ 
            error: 'Failed to generate image', 
            message: error.message 
        });
    }
};