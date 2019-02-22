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
  }

  changeFirstLoad(){
    this.setState({...this.state,firstLoad:false})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path = "/" render={()=><Redirect to = "/home"/>}/>
          <Route exact path = "/home" render={()=><Landing/>}/>
          <Route exact path = "/about" render={()=><AboutPage firstLoad={this.state.firstLoad} changeFirstLoad={this.changeFirstLoad.bind(this)} />}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
    )
  }
}

export default App;
