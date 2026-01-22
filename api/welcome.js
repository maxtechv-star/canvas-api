const { welcome } = require('../index.js');

module.exports = async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        if (req.method === 'OPTIONS') return res.status(200).end();
        if (req.method !== 'GET' && req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }
        
        const params = req.method === 'GET' ? req.query : req.body;
        
        const welcomeCard = new welcome()
            .setName(params.name || 'User')
            .setProfile(params.profile || 'https://i.ibb.co/G5mJZxs/rin.jpg')
            .setBg(params.bg || 'https://telegra.ph/file/9c4f90673ba1fe158fc3f.jpg')
            .setGcname(params.grupame || 'GROUP')
            .setMember(params.member || '1');
        
        const canvas = await welcomeCard.startWelcome();
        const buffer = canvas.toBuffer();
        
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.status(200).send(buffer);
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate image', message: error.message });
    }
};