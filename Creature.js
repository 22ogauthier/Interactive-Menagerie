/**
 * Olivia Gauthier
 * Creature Base Class
 */

class Creature {

    /**
     * 
     * @param {number} xCoord 
     * @param {number} yCoord 
     * @param {*} color 
     */
    constructor(xCoord, yCoord, color) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.color = color;
        this.original = color;
        this.increment = 0.2; 
        this.xMove = xCoord;

        this.colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    }

    display() {
        fill(this.color);
        ellipse(this.xCoord, this.yCoord, 50);
        triangle(this.xCoord + 25, this.yCoord, this.xCoord + 50,
            this.yCoord + 25, this.xMove + 50, this.yCoord - 25);
    }
 
    isMouseWithin() { //how to check on different creatures
        return dist(this.xCoord, this.yCoord, mouseX, mouseY) <= 40;
        /** 
        if (mouseX >= this.xCoord - 25 && mouseX <= this.xCoord + 50 &&
            mouseY >= this.yCoord - 25 && mouseY <= this.yCoord + 25) {
            return true;
        }
        return false;
        */
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

    update() {
        this.xMove += this.increment;

        if (this.xMove > this.xCoord + 7) {
            this.increment = -0.2;
        } else if (this.xMove < this.xCoord - 7) {
            this.increment = 0.2;
        }
    }
}
