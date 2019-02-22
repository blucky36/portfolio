import React, {Component} from "react"
import {Link} from "react-router-dom"
import AnimeBox from "./animeBox.js"

class Navbar extends Component {
  handleChange(e){
    window.location.href = e.target.value
  }

  render(){
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark bnav">
          <Link to = "/" className="navbar-brand" >Blake Bollman</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span>More Info</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to = "/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/blucky36">Github</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/blake-bollman">LinkedIn</a>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" >About</Link>
              </li>
            </ul>
            <select className="dropMenu btn btn-secondary" onChange = {(e)=>{this.handleChange(e)}}>
              <option className = "opt" value = "oi">
                Go to a project
              </option>
              <option className="opt" value = "https://spotify-rewind.surge.sh">
                Spotify Rewind
              </option>
              <option className="opt" value = "https://bustoshow.herokuapp.com">
                Bus To Show
              </option>
              <option className="opt" value = "https://emilybollman.surge.sh">
                Emily Bollman's Online Resume
              </option>
            </select>
          </div>
        </nav>
        <main className = "row">
          {["yeet","yeet","yeet","yeet"].map((e,i)=><AnimeBox key = {i} i = {i+1} size = {3}/>)}
        </main>
      </>
    )
  }
}

export default Navbar
