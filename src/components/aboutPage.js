import React, {Component} from "react"
import Card from "./card.js"
import Jumbotron from "./jumbotron.js"

class AboutPage extends Component {
  state = {
    cards: [
      {
        header: "Dreams",
        title: "I have dreams of working in the Tech Industry",
        text: "Agile Growth Mindset",
        color: "primary",
        textColor: "white"
      },
      {
        header: "Aspirations",
        title: "I aspire to perpetually learn",
        text: "I am and always will be the best I can be",
        color: "secondary",
        textColor: "white"
      },
      {
        header: "Goals",
        title: "My main goal is to aquire a career",
        text: "I wish to impact a company with my work",
        color: "success",
        textColor: "white"
      },
      {
        header: "Passion",
        title: "Programming has become my main passion",
        text: "I believe I can pick up any language I put my mind to",
        color: "danger",
        textColor: "white"
      }
    ],
    cards2:[
      {
        header: "Happiness",
        title: "I strive for happiness",
        text: "I wish to seek happiness in all facettes my life and to make others happy as well",
        color: "warning",
        textColor: "white"
      },
      {
        header: "End Goal",
        title: "I strive to one day build my own golf course",
        text: "Golf has been a hobby of mine my entire life",
        color: "info",
        textColor: "white"
      },
      {
        header: "Full Stack",
        title: "I am a full stack developer",
        text: "I can program comfortably from database to front end and back",
        color: "light",
        textColor: "black black"
      },
      {
        header: "Technologies",
        title: "Technologies I use",
        text: "React-Native, CSS3, React, HTML5, Java, SQL, Knex.js, Git, Github, JavaScript, AJAX, Application Testing, Materialize, Bootstrap, Express, Node.js, PostgreSQL",
        color: "dark",
        textColor: "white"
      }
    ],
    jumboObj:{
      header:"About Me",
      upper:"Learn a bit about me and my hobbies",
      lower:"I am a Galvanize grad who has strong passions for coding, and golf. Demonstrated a history of working with teams in an agile environment. I am skilled at working in Javascript, HTML5, CSS, and with Communication, Time Management, and Teamwork."
    }
  }

  render(){
    return (
      <>
        <Jumbotron data={this.state.jumboObj}/>
        <main className="row one">
          {this.state.cards.map((card,i)=><Card key = {i} cardData = {card} size = {3}/>)}
        </main>
        <main className="row two">
          {this.state.cards2.map((card,i)=><Card key = {i} cardData = {card} size = {8}/>)}
        </main>
      </>
    )
  }
}

export default AboutPage
