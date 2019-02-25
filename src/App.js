import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AboutPage from "./components/aboutPage.js"
import Navbar from "./components/navbar.js"
import Landing from "./components/landingPage.js"
import Footer from "./components/footer.js"
import './App.css'

class App extends Component {
  state={
    firstLoad : true,
    expanded: false,
    insanity: false,
  }

  toggleInsanity(){
    this.setState({...this.state,insanity:!this.state.insanity})
  }

  changeFirstLoad(){
    this.setState({...this.state,firstLoad:false})
  }

  toggleExpanded(){
    this.setState({...this.state,expanded:!this.state.expanded})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar expanded={this.state.expanded} toggleExpanded = {this.toggleExpanded.bind(this)}/>
          <Switch>
            <Route exact path = "/" render={()=>{
              this.changeFirstLoad()
              return <Redirect to = "/home"/>
            }}/>
            <Route exact path = "/home" render={()=>(
              <Landing
                firstLoad={this.state.firstLoad}
                changeFirstLoad={this.changeFirstLoad.bind(this)}
                toggleInsanity={this.toggleInsanity.bind(this)}
              />
            )}/>
            <Route exact path = "/about" render={()=><AboutPage firstLoad={this.state.firstLoad} changeFirstLoad={this.changeFirstLoad.bind(this)} />}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
