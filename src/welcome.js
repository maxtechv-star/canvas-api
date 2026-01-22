const Canvas = require('canvas')
const fs = require("fs")

//Canvas.registerFont(`../font/edo.ttf`, { family: "edo" });

module.exports = class welcome {

constructor() {
        this.bg = "https://telegra.ph/file/9c4f90673ba1fe158fc3f.jpg";
        this.profile = "https://i.ibb.co/G5mJZxs/rin.jpg";
        this.name = "Yogi Prasetya";
        this.grupame = "LOG";
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
    setGcname(value) {
        this.grupame = value;
        return this;
    }
    setMember(value) {
        this.member = value;
        return this;
    }
    async startWelcome() {
const canvas = Canvas.createCanvas(1920, 1080)
const ctx = canvas.getContext('2d')
let background = await Canvas.loadImage(this.bg);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
const image = await Canvas.loadImage(`${__dirname}/aset/bg.png`)
ctx.drawImage(image, 0, 0, canvas.width, canvas.height )
// Draw cat with lime helme

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#ffff";
        ctx.arc(245, 465, 200, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(this.profile);
        ctx.rotate(-13 * Math.PI / 180);
        ctx.drawImage(avatar, -90, 274, 450, 450);
        ctx.restore();

/*const image = await Canvas.loadImage('bg.png')
ctx.drawImage(image, 0, 0, canvas.width, canvas.height )*/

       let usrname = this.name;
        let name = usrname.length > 15 ? usrname.substring(0, 15) + "..." : usrname;
        ctx.globalAlpha = 1;
        ctx.font = "70px 'edo'";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(name, 700, 925);
      
ctx.save();
        let usrname2 = this.grupame;
        let name2 = usrname2.length > 10 ? usrname2.substring(0, 10) + "..." : usrname2;
        ctx.font = "700 150px Courier New";
        ctx.globalAlpha = 1;
        ctx.textAlign = 'center';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(name2, 1210, 700);

        ctx.font = "700 40px Courier New";
        ctx.textAlign = 'left';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${this.member}th member`, 700, 1035);
ctx.restore();

return canvas
}
}