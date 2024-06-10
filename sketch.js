/**
 * Olivia Gauthier
 * IGME-102: P1 Menagerie, 10/11/23
 * Description and interaction instructions
 */

"use strict"; //catch some common coding errors

/* Global variables */
let creature1;
let butterfly1;
let cat1;
let snowman1;
let radio;

let creatures = [];
let colors = ["orange", "yellow", "purple", "lightblue"];
let display;

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   for (let x = 50; x < 400; x += 90) {
      for (let y = 50; y < 400; y += 75) {
         creatures.push(randomGen(x, y));
      }
   }

   /* TEST ****
   creature1 = new Creature(60, 60, "pink");
   creature1.onClick();
   butterfly1 = new Butterfly(150, 150, "yellow");
   butterfly1.onClick();
   cat1 = new Cat(250, 250, "blue");
   cat1.onClick();
   snowman1 = new Snowman(100, 300, "white");
   snowman1.onClick();
   */
   display = new UIManager();
}

/**
 * draw :
 */
function draw() {
   background("pink");

   for (const c of creatures) {
      c.update();
      c.display();
   }

   /** TEST ****
   creature1.update();
   creature1.display();
   butterfly1.update();
   butterfly1.display();
   cat1.update();
   cat1.display();
   snowman1.update();
   snowman1.display();
   */
}

function randomGen(xCoord, yCoord) {
   let instance = null;
   let colors = ["orange", "yellow", "purple", "lightblue"];
   let randColor = random(colors);
   let randNum = random(0, 4);

   if (randNum <= 1) {
      instance = new Butterfly(xCoord, yCoord, randColor);
   } else if (randNum <= 2) {
      instance = new Cat(xCoord, yCoord, randColor);
   } else if (randNum <= 3) {
      instance = new Snowman(xCoord, yCoord, randColor);
   } else if (randNum <= 4) {
      instance = new Creature(xCoord, yCoord, randColor);
   }

   //instance.onClick();
   return instance;
}

function randomClicked() {
   console.log("Random Creatures Generated");
   creatures = [];

   for (let x = 50; x < 400; x += 90) {
      for (let y = 50; y < 400; y += 75) {
         creatures.push(randomGen(x, y));
      }
   }
   console.log(creatures);
}

function orderClicked() {
   console.log("Ordered Creatures Generated");
   let randColor;
   creatures = [];

   for (let x = 50; x < 400; x += 95) {
      for (let y = 50; y < 400; y += 75) {
         randColor = colors[Math.floor(Math.random() * colors.length)];
         if (x == 50) {
            creatures.push(new Creature(x, y, randColor));
         }
         if (x == 145) {
            creatures.push(new Butterfly(x, y, randColor));
         }
         if (x == 240) {
            creatures.push(new Snowman(x, y, randColor));
         }
         if (x == 335) {
            creatures.push(new Cat(x, y, randColor));
         }
      }
   }
   console.log(creatures);
}

function rowsClicked() {
   console.log("Rows Generated");
   let randColor;
   creatures = [];

   for (let y = 50; y < 400; y += 75) {
      randColor = colors[Math.floor(Math.random() * colors.length)];
      for (let x = 50; x < 400; x += 95) {
         if (y == 50) {
            creatures.push(new Creature(x, y, randColor));
         }
         if (y == 125) {
            creatures.push(new Butterfly(x, y, randColor));
         }
         if (y == 200) {
            creatures.push(new Snowman(x, y, randColor));
         }
         if (y == 275) {
            creatures.push(new Cat(x, y, randColor));
         }
      }
   }
   console.log(creatures);
}


function mouseClicked() {

   let currentValue = display.radio.value();
   let found = false;

   if (currentValue === 'New' && mouseY < 400) {
      console.log("New Creature Clicked");
      creatures.push(randomGen(mouseX, mouseY));
   } else {
      for (let i = 0; i < creatures.length && !found; i++) {
         console.log("test")
         if (creatures[i].isMouseWithin()) {
            found = true;
            switch (currentValue) {
               case 'Change Color':
                  console.log("Change Color Clicked");
                  creatures[i].onClick();
                  break;
               case 'Grow Snowman':
                  if (creatures[i] instanceof Snowman) {
                     console.log("Grow Snowman Clicked");
                     creatures[i].grow();
                  }
                  break;
               case 'Replace':
                  let oldX = creatures[i].xCoord;
                  let oldY = creatures[i].yCoord;
                  console.log("Replace Creature Clicked");
                  creatures[i] = randomGen(oldX, oldY);
                  break;
            }
         }
      }
   }

   /*
   let oldCoordX;
   let oldCoordY;

   let found = false;

   if (display.radio.value() == 'New Creature' && mouseY < 400) {
      console.log("New Creature Clicked");
      const newCreature = randomGen(mouseX, mouseY);
      creatures.push(newCreature);
   }
   else {
      for (const element of creatures) {
         if (element.isMouseWithin()) {
            if (display.radio.value() == 'Change Color') {
               console.log("Change Color Clicked");
               element.onClick();
            } else if (display.radio.value() == 'Grow Snowman' && element.instanceOf(Snowman)) {
               console.log("Grow Snowman Clicked");
               element.grow();
            } else if (display.radio.value() == 'Replace Creature') {
               console.log("Replace Creature");
               oldCoordX = element.xCoord;
               oldCoordY = element.yCoord;
               element = randomGen(oldCoordX, oldCoordY);
            }
         }
      }
   }
   */

   /** 
   switch (this.value()) {
      case "Change C>olor":
         console.log("Change Color clicked");
         break;
      case "Grow Snowman":
         console.log("Grow Snowman clicked");
         break;
      case "New Creature":
         if (0 < mouseX < 400 & 0 < mouseY < 400) {
            console.log("New Creature clicked");

         }
         break;
      case "Replace Creature":
         console.log("Replace Creature clicked");
         break;
   }
   */

}





