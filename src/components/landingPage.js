import React, {Component} from "react"

class Landing extends Component {

  handleClick(){
    let divArray = document.getElementsByTagName("div")
    for(let i = 0; i < divArray.length; i++){
      divArray[i].style.animation = "spin 50s linear infinite"
    }
    setInterval(()=>{
      window.location.href = "/About"
    },2000)
    window.open("https://github.com/blucky36") && window.open("https://linkedin.com/in/blake-bollman")
  }

  render(){
    return (
      <div className = "row">
        <article className = "col-2"></article>
        <article className = "col-8 text-center black">
          <main className = "row">
            <div className = "col-12">
              <h1>
                Welcome
              </h1>
            </div>
          </main>
          <main className = "row">
            <div className = "col-12">
              <h1 className = "btn btn-dark" onClick={()=>{this.handleClick()}}>
                Click Me
              </h1>
            </div>
          </main>
        </article>
        <article className = "col-2"></article>
      </div>
    )
  }
}

export default Landing
