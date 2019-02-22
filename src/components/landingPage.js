import React, {Component} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

class Landing extends Component {

  componentDidMount(){
    if(this.props.firstLoad) window.location.href = "/"
  }

  handleClick(){
    let divArray = document.getElementsByTagName("div")
    for(let i = 0; i < divArray.length; i++){
      divArray[i].style.animation = "spin 20s linear infinite"
    }
    let inter = setInterval(()=>{
      window.location.href = "/About"
      clearInterval(inter)
    },5000)
  }

  render(){
    return (
      <>
        <div className = "row">
          <article className = "col-2"></article>
          <article className = "col-8 text-center black">
            <main className = "row">
              <div className = "col-12">
                <h1 data-aos="zoom-in">
                  Welcome
                </h1>
              </div>
            </main>
          </article>
          <article className = "col-2"></article>
        </div>
        <div id = "paralax">
          <div className = "row">
            <div className = "col-12 text-center">
              <h1 style={{height:100}}
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                If you could do anything what would you do?
              </h1>
            </div>
          </div>
          <div className = "row">
            <div className = "col-12 text-center">
              <h2 style={{height:100}}
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                My name is Blake Bollman
              </h2>
            </div>
          </div>
          <div className = "row">
            <div className = "col-12 text-center">
              <h3 style={{height:100}}
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                I'm a full stack developer Living in Boulder Colorado
              </h3>
            </div>
          </div>
          <div className = "row">
            <div className = "col-12 text-center">
              <h4 style={{height:100}}
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                And I absolutely love what I do
              </h4>
            </div>
          </div>
        </div>
        <div className = "body text-center" style={{height:100}}>
          <h1 data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            Take a <span className = "black">look at some of</span> my work
          </h1>
        </div>
        <div id = "paralax2">

        </div>
        <main className = "row">
          <div className = "col-12 text-center">
            <h1 className = "btn btn-dark" onClick={()=>{this.handleClick()}}
              data-aos="zoom-out-down"
              data-aos-easing="linear"
              data-aos-duration="15">
              Click Me For Insanity
            </h1>
          </div>
        </main>
      </>
    )
  }
}

export default Landing
