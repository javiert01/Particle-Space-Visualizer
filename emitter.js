class Emitter {
  constructor(x, y, type) {
    this.position = createVector(x, y)
    this.particles = []
    this.type = type
    this.figure = random(figureList)
    // this.attractor = new Attractor(x, y, 5)
    this.lifetime = 750;
    this.attractAllLifetime = 800;
    this.gravityLifetime = 450;
  }

  emit(num) {
    for (let i = 0; i < num; i++) {
      switch (this.type) {
        case 'STARFIELD':
          this.particles.push(new Starfield(this.position.x, this.position.y))
        case 'PARTICLE':
          this.particles.push(new Particle(this.position.x, this.position.y, this.attractAllFinished(), this.figure, this.finished(), this.gravityLifetime))
        default:
          null
      }
    }
  }

  finished() {
    return this.lifetime < 0
  }

  gravityFinished() {
    return this.gravityLifetime < -200
  }

  attractAllFinished() {
    return this.attractAllLifetime < 0
  }

  applyForce(force) {
    for (let particle of this.particles) {
      particle.applyForce(force)
    }
  }

  attract() {
    for (let particle of this.particles) {
      this.attractor.attract(particle)
    }
  }

  attractAll() {
    this.particles.map((particle, index) => {
      this.particles.map((particleAux, indexAux) => {
        if (index !== indexAux && indexAux < 280) {
          particle.attract(particleAux)
        }
      })
    })
  }

  update() {
    for (let particle of this.particles) {
      particle.update()
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1)
      }
    }

    this.attractAllLifetime -= 5;
    this.attractAllFinished() ? this.lifetime -=5 : null;
    this.finished() ? this.gravityLifetime -= 5 : null;
  }

  show() {
    for (let particle of this.particles) {
      particle.show()
    }
  }
}
