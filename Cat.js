class Cat extends Creature {
    /**
     * 
     * @param {number} xCoord 
     * @param {number} yCoord 
     * @param {*} color 
     */
    constructor(xCoord, yCoord, color) {
        super(xCoord, yCoord, color);
        this.yMoveR = yCoord;
        this.yMoveL = yCoord;
        this.incrementR = 0.2;
        this.incrementL = -0.2;
    }

    display() {
        fill(this.color);
        triangle(this.xCoord, this.yCoord, this.xCoord + 15,
            this.yCoord - 40, this.xCoord + 30, this.yCoord);
        triangle(this.xCoord, this.yCoord, this.xCoord - 15,
            this.yCoord - 40, this.xCoord - 30, this.yCoord);
        ellipse(this.xCoord, this.yCoord, 70, 40);

        rect(this.xCoord + 5, this.yMoveR, 40, 5);
        rect(this.xCoord - 45, this.yMoveL, 40, 5);
    }

    update() {
        this.yMoveR += this.incrementR;
        this.yMoveL += this.incrementL;

        if (this.yMoveR > this.yCoord + 7) {
            this.incrementR = -0.2;
        } else if (this.yMoveR < this.yCoord - 7) {
            this.incrementR = 0.2;
        }

        if (this.yMoveL > this.yCoord + 7) {
            this.incrementL = -0.2;
        } else if (this.yMoveL < this.yCoord - 7) {
            this.incrementL = 0.2;
        }
    }
}
