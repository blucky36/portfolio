import React from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const Card = (props) => (
  <div className={`card text-${props.cardData.textColor} bg-${props.cardData.color} mb-3 oi`} data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    <div className="card-header">{props.cardData.header}</div>
    <div className="card-body">
      <h4 className="card-title">{props.cardData.title}</h4>
      <hr className="my-4"/>
      <p className="card-text">{props.cardData.text}</p>
    </div>
  </div>
)

export default Card
