class Snowman extends Creature {

    /**
     * 
     * @param {number} xCoord 
     * @param {number} yCoord 
     * @param {*} color 
     */
    constructor(xCoord, yCoord, color) {
        super(xCoord, yCoord, color);
        this.increment = 0.2;
        this.xMove = xCoord;
        this.size = 25;
        this.originalS = 25;
    }

    display() {
        fill(this.color);
        ellipse(this.xMove, this.yCoord, this.size);
        ellipse(this.xMove, this.yCoord - 22.5, this.size - 5);
        ellipse(this.xMove, this.yCoord - 39.5, this.size - 10);
    }

    update() {
        this.xMove += this.increment;

        if (this.xMove > this.xCoord + 7) {
            this.increment = -0.2;
        } else if (this.xMove < this.xCoord - 7) {
            this.increment = 0.2;
        }
    }

    onClick() { 
        document.addEventListener('click', event => {
            if (this.isMouseWithin(event.clientX, event.clientY)) {
                //change color 
                if (this.color == this.original) {
                    this.color = "teal";
                } else {
                    this.color = this.original;
                }
                this.display();
                //
                //console.log('The mouse is within the creature boundary');
            } else {
                //console.log('The mouse is not within the creature boundary');
            }
        })
    }

    grow() { 
        document.addEventListener('click', event => {
            if (this.isMouseWithin(event.clientX, event.clientY)) {
                //grow
                if (this.size == this.originalS) {
                    this.size = 40;
                } else {
                    this.size = this.originalS;
                }
                this.display();
                //
                //console.log('The mouse is within the creature boundary');
            } else {
                //console.log('The mouse is not within the creature boundary');
            }
        })
    }
}
