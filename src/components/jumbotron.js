import React, {Component} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

class Jumbotron extends Component {
  state={
    faceVisible:false
  }

  handleClick(e){
    e.preventDefault()
    this.setState({...this.state,faceVisible:!this.state.faceVisible})
  }

  render(){
    return (
      <header className="jumbotron jumbotron-fluid noBorder backBlack"
        data-aos="zoom-in-up">
        <h1 className="display-3">{this.props.data.header}</h1>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        <p className="lead">{this.props.data.upper}</p>
        <hr className="my-4"/>
        <p>{this.props.data.lower}</p>
      </header>
    )
  }
}

export default Jumbotron
