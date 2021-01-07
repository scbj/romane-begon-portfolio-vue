export default class Sparkle {
  constructor (element, options) {
    this.options = Object.assign(options || {}, {
      width: element.offsetWidth,
      height: element.offsetHeight,
      color: '#FFD700',
      count: 20,
      overlap: 12,
      speed: 0.5
    })
    this.initialize(element)
  }

  initialize (element) {
    const canvas = document.createElement('canvas')
    Object.assign(canvas.style, {
      position: 'absolute',
      top: `-${this.options.overlap}px`,
      left: `-${this.options.overlap}px`,
      pointerEvents: 'none'
    })
    element.appendChild(canvas)

    this.canvas = canvas
    this.context = this.canvas.getContext('2d')

    this.sprite = new Image()
    this.sprites = [0, 6, 13, 20]
    this.sprite.src = this.datauri

    this.canvas.width = this.options.width + (this.options.overlap * 2)
    this.canvas.height = this.options.height + (this.options.overlap * 2)

    this.particles = this.createSparkles(this.canvas.width, this.canvas.height)

    this.animation = null
    this.fade = false
  }

  createSparkles (width, height) {
    return Array.from(new Array(this.options.count)).map(() => ({
      position: {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
      },
      style: this.sprites[Math.floor(Math.random() * 4)],
      delta: {
        x: Math.floor(Math.random() * 1000) - 500,
        y: Math.floor(Math.random() * 1000) - 500
      },
      size: parseFloat((Math.random() * 2).toFixed(2)),
      color: this.options.color
    }))
  }

  draw (time, fade) {
    const context = this.context
    context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach(particle => {
      const modulus = Math.floor(Math.random() * 7)

      if (Math.floor(time) % modulus === 0) {
        particle.style = this.sprites[Math.floor(Math.random() * 4)]
      }

      context.save()
      context.globalAlpha = particle.opacity
      context.drawImage(this.sprite, particle.style, 0, 7, 7, particle.position.x, particle.position.y, 7, 7)

      if (this.options.color) {
        context.globalCompositeOperation = 'source-atop'
        context.globalAlpha = 0.4
        context.fillStyle = particle.color
        context.fillRect(particle.position.x, particle.position.y, 7, 7)
      }

      context.restore()
    })
  }

  update () {
    this.animation = window.requestAnimationFrame(time => {
      this.particles.forEach(particle => {
        const randX = (Math.random() > Math.random() * 2)
        const randY = (Math.random() > Math.random() * 3)

        if (randX) {
          particle.position.x += ((particle.delta.x * this.options.speed) / 1500)
        }

        if (!randY) {
          particle.position.y -= ((particle.delta.y * this.options.speed) / 800)
        }

        if (particle.position.x > this.canvas.width) {
          particle.position.x = -7
        } else if (particle.position.x < -7) {
          particle.position.x = this.canvas.width
        }

        if (particle.position.y > this.canvas.height) {
          particle.position.y = -7
          particle.position.x = Math.floor(Math.random() * this.canvas.width)
        } else if (particle.position.y < -7) {
          particle.position.y = this.canvas.height
          particle.position.x = Math.floor(Math.random() * this.canvas.width)
        }

        particle.opacity -= this.fade ? 0.02 : 0.005

        if (particle.opacity <= 0) {
          particle.opacity = this.fade ? 0 : 1
        }
      })

      this.draw(time)

      if (this.fade) {
        this.fadeCount -= 1
        if (this.fadeCount < 0) {
          window.cancelAnimationFrame(this.animation)
        } else {
          this.update()
        }
      } else {
        this.update()
      }
    })
  }

  cancel () {
    this.fadeCount = 100
  }

  sparkleh () {
    window.cancelAnimationFrame(this.animation)

    this.particles.forEach(particle => {
      particle.opacity = Math.random()
    })

    this.fade = false
    this.update()
  }

  extinguish () {
    this.fade = true
    this.cancel()
  }

  datauri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=='
}
