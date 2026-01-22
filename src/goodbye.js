const Canvas = require('canvas')
const fs = require("fs")

module.exports = class goodbye {
  constructor() {
    this.bg = "https://telegra.ph/file/9c4f90673ba1fe158fc3f.jpg";
    this.profile = "https://i.ibb.co/G5mJZxs/rin.jpg";
    this.name = "undefined";
    this.member = "1";
  }
  
  setProfile(value) {
    this.profile = value;
    return this;
  }
  
  setName(value) {
    this.name = value;
    return this;
  }
  
  setBg(value) {
    this.bg = value;
    return this;
  }
  
  setMember(value) {
    this.member = value;
    return this;
  }
  
  async startGoodbye() {
    const canvas = Canvas.createCanvas(1920, 1080);
    const ctx = canvas.getContext('2d');
    
    // Load background
    let background = await Canvas.loadImage(this.bg);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    // Load overlay image
    const image = await Canvas.loadImage(`${__dirname}/../aset/goodbye.png`);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    
    // Draw profile circle
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#ffff";
    ctx.arc(245, 465, 200, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    
    // Draw and rotate avatar
    const avatar = await Canvas.loadImage(this.profile);
    ctx.rotate(-13 * Math.PI / 180);
    ctx.drawImage(avatar, -90, 274, 450, 450);
    ctx.restore();
    
    // **FIX: Draw text with proper font**
    let usrname = this.name;
    let name = usrname.length > 15 ? usrname.substring(0, 15) + "..." : usrname;
    
    // **FIXED FONT SYNTAX**
    ctx.font = "70px Arial, sans-serif"; // Use Arial as fallback for 'edo'
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(name, 700, 925);
    
    // Draw member count
    ctx.font = "700 40px 'Courier New', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`${this.member}th member`, 700, 1035);
    
    return canvas;
  }
}