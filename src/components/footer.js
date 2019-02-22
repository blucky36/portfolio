import React, {Component} from "react"
import AnimeBox from "./animeBox.js"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

class Footer extends Component {

  render(){
    return (
      <>
        <footer className="row foot">
          <article className="col-sm-2"></article>
          <article className="col-4"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h3>Contact Info:</h3>
          </article>
          <article className="col-4">
          <table className="table table-dark"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <thead>
              <tr>
                <th scope="col">Phone #</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">720-244-6449</th>
                <td><a href="mailto:blucky36@gmail.com">blucky36@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
          </article>
          <article className="col-2"></article>
          <main className = "row">
            {[1,2,3,4,5,6].map((e,i)=><AnimeBox key = {i} i = {e+4} size={2}/>)}
          </main>
        </footer>
      </>
    )
  }
}

export default Footer
