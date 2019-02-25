import React, {Component} from "react"
import Project from "./project.js"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

class Landing extends Component {

  state={
    projectArray:[
      {
        header: "Spotify Rewind",
        title: "Version control for Spotify",
        text: "Back up your playlists now!",
        href:"https://spotify-rewind.surge.sh",
        image:"https://spotify-rewind.surge.sh/images/spotify_rewind_transparent.svg",
        description:"hi"
      },
      {
        header: "Bus To Show",
        title: "Bus to show Colorado website",
        text: "Reserve your bus ride today",
        href:"https://bustoshow.herokuapp.com",
        image:"http://bustoshow.surge.sh/static/media/bts-logo-orange.fdb3ecc6.png",
        description:"name"
      },
      {
        header: "Actress Resume",
        title: "Resume For Emily Bollman",
        text: "to keep up on her current events",
        href:"https://emilybollman.surge.sh",
        image:"https://emilybollman.surge.sh/Photos/photo12.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ]
  }

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
                <h1 data-aos="zoom-in" data-aos-duration="500">
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
              <h1
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                If you could do anything what would you do?
              </h1>
            </div>
          </div>
          <div className = "row">
            <div className = "col-12 text-center">
              <h2
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                My name is Blake Bollman
              </h2>
            </div>
          </div>
          <div className = "row">
            <div className = "col-12 text-center">
              <h3
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                I'm a full stack developer Living in Boulder Colorado
              </h3>
            </div>
          </div>
          <div className = "row">
            <div className = "col-12 text-center">
              <h4
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="2500"
              >
                And I absolutely love what I do
              </h4>
            </div>
          </div>
        </div>
        <div className = "body text-center" style={{height:"7vw"}}>
          <h1 data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            Take a <span className = "black">look at some of</span> my work
          </h1>
        </div>
        <div id = "paralax2">
          {this.state.projectArray.map((e,i)=><Project key = {i} i={i} project = {e}/>)}
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
