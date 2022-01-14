// Particle System Simulation
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/syR0klfncCk
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-system-simulation.html
// https://editor.p5js.org/codingtrain/sketches/QRzgzQLnQ

let emitters = []
let figureList = ['Heart', 'Cat'];


function setup() {
  createCanvas(800, 600)
  emitterStar = new Emitter(width / 2, height - 20, 'STARFIELD')
}

function draw() {
  clear()
  background(0)
  blendMode(ADD)
  push()
  translate(width / 2, height / 2)
  emitterStar.emit(5)
  emitterStar.update()
  emitterStar.show()
  pop()
  for (let emitter of emitters) {
    emitter.emit(5)
    !emitter.attractAllFinished() ? emitter.attractAll() : null
    emitter.update()
    emitter.show()
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY, 'PARTICLE'))
}
