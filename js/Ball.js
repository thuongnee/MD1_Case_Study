class Ball {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speedX =2;
        this.speedY = 1;
        this.paper = document.getElementById("canvas1")
        this.pen = this.paper.getContext("2d")
    }


    draw() {
        this.pen.beginPath();
        this.pen.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        this.pen.fillStyle = this.color;
        this.pen.fill();

    }

    update_xy() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    check_va_cham_bar(bar) {
        if (this.y + this.r >= bar.y && bar.x <= this.x && this.x <= bar.x + bar.width) {
            this.speedY = -this.speedY;
        }
    }


    check_va_cham(bar) {
        //neu cham vien duoi cung gameover
        if (this.y + this.r >= this.paper.height) {
            gameOver=false;
            audio_nen.pause();
            au_thua.play();
            document.getElementById("over").style.display="block";
        } else {
            //vien phai
            if (this.x + this.r >= this.paper.width) {
                this.speedX = -this.speedX;
                //vien trai
            } else if (this.x - this.r <= 0) {
                this.speedX = -this.speedX;
            }//vien tren
            else if (this.y - this.r <= 0) {
                this.speedY = -this.speedY;
            }
        }
        this.check_va_cham_bar(bar);
    }



}




