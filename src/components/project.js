import React, {Component} from "react"
import Modal from "react-responsive-modal"

class Project extends Component {

  state = {
    open: false
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }

  render(){
    return (
      <div className ="row">
        <div className = "col-12">
          <div
            style = {this.props.i % 2 === 0 ? {float:"right"} : {float:"left"}}
            className={`card text-white bg-dark oi`}
            data-aos={`fade-${this.props.i % 2 === 0 ? "left" : "right"}`}
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-offset="200"
          >
            <div className="card-header">{this.props.project.header}</div>
            <div className="card-body">
              <h4 className="card-title">{this.props.project.title}</h4>
              <hr className="my-4"/>
              <p className="card-text">{this.props.project.text}</p>
            </div>
            <button type="button" className="btn btn-secondary" onClick={this.toggleModal}>
              Learn More
            </button>
            <Modal open={this.state.open} onClose={this.toggleModal} center>
              <h4 className = "black text-center">Details</h4>
              <div className = "row">
                <div className = "col-12">
                  <img src = {`${this.props.project.image}`}alt = "" style={{width:"50%"}}/>
                </div>
              </div>
              <div className = "row">
                <div className = "col-12">
                  <p className = "black">
                    {this.props.project.description}
                  </p>
                </div>
              </div>
              <div className = "row">
                <div className = "col-12">
                  <a className = "btn btn-info black"href = {`${this.props.project.href}`}>Check it out</a>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
