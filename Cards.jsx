import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = (props) => {
  return (
    <>
      <div className="card m-3 me-auto" >
        <img src={props.imgsrc} className="card-img-top" alt="pic" style={{height:'auto', width:'auto'}}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <Link to={props.link} className="btn btn-primary">Start</Link>
        </div>
      </div>
    </>
  )
}
