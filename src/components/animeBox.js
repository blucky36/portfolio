import React, {Component} from "react"
import anime from "animejs/lib/anime.es.js"

class AnimeBox extends Component{

  anime(num){
    let easingVisualizerEl = document.querySelector(`.animebox${num}`)
    let barsWrapperEl = easingVisualizerEl.querySelector(`.bars-wrapper${num}`)
    let dotsWrapperEl = easingVisualizerEl.querySelector(`.dots-wrapper${num}`)
    let barsFragment = document.createDocumentFragment()
    let dotsFragment = document.createDocumentFragment()
    let numberOfBars = 50
    let duration = 250

    for (let i = 0; i < numberOfBars; i++) {
      let barEl = document.createElement("div")
      let dotEl = document.createElement("div")
      barEl.classList.add("bar")
      dotEl.classList.add("dot")
      barsFragment.appendChild(barEl)
      dotsFragment.appendChild(dotEl)
    }

    barsWrapperEl.appendChild(barsFragment)
    dotsWrapperEl.appendChild(dotsFragment)

    const play = () => {
      let oddOrEven = num % 2 === 0 ? ["-40px","40px"] : ["40px","-40px"]
      let easings = []
      for (let ease in anime.penner) easings.push(ease)
      easings.push("steps("+anime.random(5, 100)+")")
      easings.push("steps("+anime.random(5, 100)+")")
      easings.push("cubicBezier(0.545, 0.475, 0.145, 1)")
      let ease = easings[anime.random(0, easings.length - 1)]

      anime.timeline({
        duration: duration,
        easing: ease,
        complete: play
      })
      .add({
        targets: `.animebox${num} .bar`,
        scaleY: anime.stagger([1, 10], {easing: ease, from: "center", direction: "reverse"}),
        delay: anime.stagger(7, {from: "center"})
      })
      .add({
        targets: `.animebox${num} .dot`,
        translateY: anime.stagger(oddOrEven, {easing: ease, from: "last"}),
        delay: anime.stagger(7, {from: "center"})
      }, 0)
    }
    play()
  }

  determineQuantity(){

  }

  componentDidMount(){
    this.anime(this.props.i)
  }

  render(){
    return (
      <div className = {`col-${this.props.size}`}>
        <div className="animation-wrapper">
          <div className="feature-animation">
            <div className={`animebox${this.props.i}`}>
              <div className={`wrapper bars-wrapper${this.props.i}`}></div>
              <div className={`wrapper dots-wrapper${this.props.i}`}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnimeBox
