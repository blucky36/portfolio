import React from "react"
// {
//   header: "",
//   title: "",
//   text: "",
//   color: "",
//   textColor: ""
// },
const Card = (props) => (
  <div className={`card text-${props.cardData.textColor} bg-${props.cardData.color} mb-3 oi`}>
    <div className="card-header">{props.cardData.header}</div>
    <div className="card-body">
      <h4 className="card-title">{props.cardData.title}</h4>
      <hr className="my-4"/>
      <p className="card-text">{props.cardData.text}</p>
    </div>
  </div>
)

export default Card
