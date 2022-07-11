class Brick {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.paper = document.getElementById("canvas1")
        this.pen = this.paper.getContext("2d");
        this.status = true;
        this.img='';
    }

    draw() {
        this.pen.beginPath();
        this.pen.fillStyle = "chocolate"
        this.img=document.getElementById("gach");
        this.pen.drawImage(this.img,this.x, this.y, this.width, this.height);
    }
}