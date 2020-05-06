import { sizeShape } from './main.js';

// Class Parent - To handle the user interface
class UI {
   constructor() {
      this.grid = document.querySelector('#grid');
   }

   // Method create rows and create a grid
   static rows() {
      const height = (grid.offsetHeight - grid.offsetHeight % sizeShape) / sizeShape;
      const width = (grid.offsetWidth - grid.offsetWidth % sizeShape) / sizeShape;
      const hor = document.querySelector('#grid .horizontal');
      const ver = document.querySelector('#grid .vertical');

      for (let i = 1; i <= height; i++) {
         hor.innerHTML += `<div class='row'></div>`;
      }
      for (let i = 1; i <= width; i++) {
         ver.innerHTML += `<div class='row'></div>`;
      }
   }
}

UI.rows();