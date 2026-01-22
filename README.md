
```markdown
# Welcome/Goodbye Canvas Generator

A Node.js canvas-based API for generating welcome and goodbye cards for Discord, WhatsApp, and other platforms.

## Features

- 🎨 Generate beautiful welcome cards
- 👋 Generate goodbye cards
- 🌐 Web interface for easy testing
- 🔧 Simple API endpoints
- 🚀 Deploy on Vercel with one click
- 📱 Responsive design

## Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/bruno918/canvas_welcome.git
cd canvas_welcome
```

1. Deploy to Vercel

· Push to GitHub
· Import to Vercel
· Deploy!

API Endpoints

Welcome Card

```
GET /api/welcome?name=User&profile=URL&bg=URL&grupame=GROUP&member=1
```

Goodbye Card

```
GET /api/goodbye?name=User&profile=URL&bg=URL&member=1
```

Both endpoints also accept POST requests with JSON body.

Parameters

Parameter Description Default
name User name "User"
profile Profile image URL Default avatar
bg Background image URL Default background
grupame Group name (welcome only) "GROUP"
member Member count "1"

Examples

Welcome Card

```
https://your-app.vercel.app/api/welcome?name=John&grupame=MyGroup&member=42
```

Goodbye Card

```
https://your-app.vercel.app/api/goodbye?name=Jane&member=99
```

Local Development

```bash
npm install
npm start
```

File Structure

```
├── api/
│   ├── welcome.js      # Welcome endpoint
│   ├── goodbye.js      # Goodbye endpoint
│   └── index.js        # API info endpoint
├── src/
│   ├── welcome.js      # Welcome card logic
│   └── goodbye.js      # Goodbye card logic
├── aset/
│   ├── bg.png          # Welcome overlay
│   └── goodbye.png     # Goodbye overlay
├── index.js            # Main export
├── index.html          # Web interface
├── vercel.json         # Vercel config
└── package.json        # Dependencies
```

Technologies Used

· Node.js - Runtime environment
· Canvas - Image generation
· Vercel - Serverless deployment
· HTML/CSS/JS - Web interface

License

ISC License

Credits

Created by yogi and brunoww

```

This provides a complete, ready-to-deploy solution with:
1. Working API endpoints
2. Beautiful web interface
3. Easy deployment to Vercel
4. Full documentation
5. Responsive design
6. Copy-paste functionality

Just deploy to Vercel and you're ready to go