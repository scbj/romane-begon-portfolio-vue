import charming from 'charming'
import { Quad, Quint, TimelineMax } from 'gsap'

export default class TextCharming {
  constructor (el) {
    this._el = el
    this._isAnimationRunning = false
    charming(el)
  }

  charm () {
    if (this._isAnimationRunning) {
      return false
    }
    this._isAnimationRunning = true

    const letters = [...this._el.querySelectorAll('span')]
    const animatedLetters = letters.filter(_ => Math.random() < 0.5)
    // const remainingLettes = letters.filter(el => !animatedLetters.includes(el))

    new TimelineMax({ onComplete: () => { this._isAnimationRunning = false } })
      .staggerTo(animatedLetters, 0.2, {
        ease: Quad.easeIn,
        x: '50%',
        opacity: 0
      }, 0.04, 0)
      .staggerTo(animatedLetters, 0.6, {
        ease: Quint.easeOut,
        startAt: { x: '-35%' },
        x: '0%',
        opacity: 1
      }, 0.04, 0.2)
  }
}
