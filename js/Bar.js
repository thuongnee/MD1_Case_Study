class Bar {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 30;
        this.img=''
        this.paper = document.getElementById("canvas1")
        this.pen = this.paper.getContext("2d")

    }

    draw() {
        this.pen.beginPath();
        this.img=document.getElementById("img")
        this.pen.fillstyle = this.color
        this.pen.drawImage(this.img,this.x, this.y, this.width, this.height);
        this.pen.strokestyle = "black"
    }

    moveLeft() {
        if (this.x >= this.speed){
            this.x -= this.speed;
        }  else {
            this.x +=0;
        }    }

    moveRight() {
        if (this.x <= this.paper.width - this.width-this.speed){
            this.x += this.speed;
        } else {
            this.x +=0;
        }
    }

}
