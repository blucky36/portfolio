import React, {Component} from "react"
import Modal from "react-responsive-modal"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

class Jumbotron extends Component {
  state = {
    open: false
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }

  render(){
    return (
      <header className="jumbotron jumbotron-fluid noBorder backBlack"
        data-aos="zoom-in-up">
        <h1 className="display-3">{this.props.data.header}</h1>
        <button type="button" className="btn btn-secondary" onClick={this.toggleModal}>
          What does this guy look like?
        </button>
        <Modal open={this.state.open} onClose={this.toggleModal} center>
          <h2 className = "black text-center">Pics of Me</h2>
          <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/40092252_10214456805826749_7385714109678878720_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=48442fb1aee110b29ec3c96177f23895&oe=5CF334B2" alt = ""style = {{width:200, height:275}}/>
          <img src="/images/blake.png" alt = "" style = {{width:200, height:275}}/>
        </Modal>
        <p className="lead">{this.props.data.upper}</p>
        <hr className="my-4"/>
        <p>{this.props.data.lower}</p>
      </header>
    )
  }
}

export default Jumbotron
