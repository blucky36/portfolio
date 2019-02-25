import React, {Component} from "react"
import AnimeBox from "./animeBox.js"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

class Footer extends Component {

  render(){
    return (
      <>
        <footer className="row text-center">
          <article className="col-4"></article>
          <article className="col-4">
            <table className="table table-dark"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-anchor-placement = "bottom-bottom">
              <thead>
                <tr>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="mailto:blucky36@gmail.com">blucky36@gmail.com</a></td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="col-4"></article>
        </footer>
        <main className = "row">
        {[0,1,2,3,4,5].map((e,i)=><AnimeBox key = {i} i = {i+5} size={2} tb={"bottom"}/>)}
        </main>
      </>
    )
  }
}

export default Footer
