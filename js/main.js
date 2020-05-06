// Size of shapes
export const sizeShape = 40;

// Class Parent (Player, Coronavirus)
class Item {
   constructor(shape, x, y) {
      this.shape = shape;
      this.x = x;
      this.y = y;

      // Change of position
      this.shape.style.left = `${ x }px`;
      this.shape.style.top  = `${ y }px`;
   }

   // Method of bringing a random number from 0 to a specific number
   static getRandom(num) {
      const value = Math.round(Math.random() * num);
      return value - (value % sizeShape);
   } 
}

// Class Player
class Player extends Item {
   constructor(shape, x, y) {
      super(shape, x, y);
   }

   // Methods move keyboard arrows
   moveUp() {
      this.y -= sizeShape;
      this.shape.style.top = `${ y }px`;
   }
   moveDown() {
      this.y += sizeShape;
      this.shape.style.top = `${ y }px`;
   }
   moveLeft() {
      this.x -= sizeShape;
      this.shape.style.left = `${ x }px`;
   }
   moveRight() {
      this.x += sizeShape;
      this.shape.style.left = `${ x }px`;
   }
}

// Object instance
const doctor = new Player(
   document.querySelector('#player'), 
   Item.getRandom(document.querySelector('.playing').offsetWidth - sizeShape),
   Item.getRandom(document.querySelector('.playing').offsetHeight - sizeShape)
);

// Class Coronavirus
class Coronavirus extends Item {
   constructor(shape, x, y) {
      super(shape, x, y);
   }
}

// Object instance
const covid_19 = new Coronavirus(
   document.querySelector('#coronavirus'), 
   Item.getRandom(document.querySelector('.playing').offsetWidth - sizeShape),
   Item.getRandom(document.querySelector('.playing').offsetHeight - sizeShape)
);