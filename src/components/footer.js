import React, {Component} from "react"
import AnimeBox from "./animeBox.js"

class Footer extends Component {

  render(){
    return (
      <>
        <footer className="row foot">
          <article className="col-sm-2"></article>
          <article className="col-4">
            <h3>Contact Info:</h3>
          </article>
          <article className="col-4">
          <table className="table table-dark">
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
