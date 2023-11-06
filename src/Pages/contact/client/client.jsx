import React from 'react'
import './client.scss'
import Burger from "src/assets/black logo 25 burger.png"

const Client = () => {
  return (
    <>
    <div className="container">
    <div className="section-heading">
        <h3>Clients</h3>
    </div>
    <div className="row">
      <div className="col-lg">
      <div className="clients justify-center">
        <img src={Burger} alt="Logo burger" />
        <img src={Burger} alt="Logo burger" />
        <img src={Burger} alt="Logo burger" />
        <img src={Burger} alt="Logo burger" />
        <img src={Burger} alt="Logo burger" />
        <img src={Burger} alt="Logo burger" />
        <img src={Burger} alt="Logo burger" />
      </div>
      </div>
      </div>
    </div>
     
    </>
  )
}

export default Client
