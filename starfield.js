class Starfield extends Particle {
  constructor(x, y) {
    super(x, y)
    this.x = random(-width, width)
    this.y = random(-height, height)
    this.r = 8;
    this.depth = random(width)
    this.angle = random(TWO_PI)
  }

  show() {
    let sx = map(this.x / this.depth, 0, 1, 0, width)
    let sy = map(this.y / this.depth, 0, 1, 0, height)
    let newR = map(this.depth, 0, width, this.r * 2, 0);
    noStroke()
    fill(255, this.lifetime)
    ellipse(sx, sy, newR);
  }

  update() {
    this.depth -= 5
    if (this.depth < 1) {
      this.depth = width
      this.x = random(-width, width)
      this.y = random(-height, height)
    }
    this.lifetime -= 1
  }
}
