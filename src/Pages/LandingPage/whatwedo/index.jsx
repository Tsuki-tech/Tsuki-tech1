import React from 'react'
import Frame from "src/assets/Frame.png"
// import Frame1 from "src/assets/Frame1.png"

const OurWork = () => {
  return (
    <>
      <div className="container">
        <div className="section-heading">
            <h2>What We Do</h2>
        </div>
        <div className="row">
            <div className="col-lg-4 col-sm-6">
                <div className="card text-center">
                    <img src={Frame} alt="" />
                    <span>Web Development</span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="card text-center">
                    <img src={Frame} alt="" />
                    <span>Web Development</span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="card text-center">
                    <img src={Frame} alt="" />
                    <span>Web Development</span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="card text-center">
                    <img src={Frame} alt="" />
                    <span>Web Development</span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="card text-center">
                    <img src={Frame} alt="" />
                    <span>Web Development</span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="card text-center">
                    <img src={Frame} alt="" />
                    <span>Web Development</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default OurWork
