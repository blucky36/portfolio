import React, {Component} from "react"

class Jumbotron extends Component {
  render(){
    return (
      <header className="jumbotron jumbotron-fluid noBorder backBlack">
        <h1 className="display-3">{this.props.data.header}</h1>
        <p className="lead">{this.props.data.upper}</p>
        <hr className="my-4"/>
        <p>{this.props.data.lower}</p>
      </header>
    )
  }
}

export default Jumbotron
