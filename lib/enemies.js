var canvas = Document.querySelector('canvas');
var c = canvas.getContext('2d');

function Frog(height, width, color, x, y) {
  this.x = canvas.width / 2;
  this.y = canvas.height 700;
  this.height = 30;
  this.width = 30;
  this.color = 'green';
}