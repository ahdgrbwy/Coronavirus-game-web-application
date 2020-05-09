// Size of shapes
const sizeShape = 64;

// Bring playing height and width
const playingX = document.querySelector('.playing').offsetWidth - sizeShape;
const playingY = document.querySelector('.playing').offsetHeight - sizeShape;

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
      this.score = 0;
   }

   // Method - To increase scored
   scoreUp() {
      this.score += 1;
      document.querySelector('.score').innerHTML = this.score;
   }

   // Methods move keyboard arrows
   moveUp() {
      this.y -= sizeShape;
      this.shape.style.top = `${ this.y }px`;
      this.shape.style.transform = 'rotate(0)';
   }
   moveDown() {
      this.y += sizeShape;
      this.shape.style.top = `${ this.y }px`;
      this.shape.style.transform = 'rotate(180deg)';
   }
   moveLeft() {
      this.x -= sizeShape;
      this.shape.style.left = `${ this.x }px`;
      this.shape.style.transform = 'rotate(-90deg)';
   }
   moveRight() {
      this.x += sizeShape;
      this.shape.style.left = `${ this.x }px`;
      this.shape.style.transform = 'rotate(90deg)';
   }
}

// Class Coronavirus
class Coronavirus extends Item {
   constructor(shape, x, y) {
      super(shape, x, y);
   }

   // Method - Recreate the Coronavirus in another random location
   recreate() {
      this.x = Item.getRandom(playingX),
      this.y = Item.getRandom(playingY)
      this.shape.style.left = `${ this.x }px`;
      this.shape.style.top  = `${ this.y }px`;
   }
}

// Object instance - Class Player
const doctor = new Player(
   document.querySelector('#player'), 
   Item.getRandom(playingX),
   Item.getRandom(playingY)
);

// Event - When you press the keyboard
window.addEventListener('keydown', e => {
   // Press a key on  keyboard
   switch (e.keyCode) {
      case 38: {
         if (doctor.y > 0) doctor.moveUp();
         break;
      }
      case 37: {
         if (doctor.x > 0) doctor.moveLeft();
         break;
      }
      case 40: {
         if (doctor.y < playingY) doctor.moveDown();
         break;
      }
      case 39: {
         if (doctor.x < playingX - 64) doctor.moveRight();
         break;
      }
   }

   // If a doctor object reaches a coronavirus
   if (doctor.x === covid_19.x && doctor.y === covid_19.y) {
      doctor.scoreUp();
      covid_19.recreate();
   }
});

// Object instance - Class Coronavirus
const covid_19 = new Coronavirus(
   document.querySelector('#coronavirus'), 
   Item.getRandom(playingX),
   Item.getRandom(playingY)
);