class Butterfly extends Creature {
    /**
     * 
     * @param {number} xCoord 
     * @param {number} yCoord 
     * @param {*} color 
     */
    constructor(xCoord, yCoord, color) {
        super(xCoord, yCoord, color);
        this.height = 20;
        this.width = 40;
        this.incrementH = 0.2; 
        this.incrementW = 0.1; 
        this.heightMove = 20;
    }

    display() {
        fill(this.color);
        triangle(this.xCoord + 10, this.yCoord, this.xCoord + 40, 
            this.yCoord + 20, this.xCoord + 40, this.yCoord - 20);
        triangle(this.xCoord - 10, this.yCoord, this.xCoord - 40, 
            this.yCoord + 20, this.xCoord - 40, this.yCoord - 20); 
        ellipse(this.xCoord, this.yCoord, this.heightMove, this.width);   
    }

    update() {
        this.heightMove += this.incrementH;
        this.weight += this.incrementW;

        if (this.heightMove > this.height + 7) {
            this.incrementH = -0.2;
            this.incrementW = -0.1;
        } else if (this.heightMove < this.height - 2) {
            this.incrementH = 0.2;
            this.incrementW = 0.1;
        }
    }
}
