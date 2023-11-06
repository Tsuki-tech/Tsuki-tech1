import React from 'react'
import paper from "src/assets/Property 34.png"

const Experience = () => {
  return (
    <>
    <div className="experience">
      <div className="section-heading">
        <h3>Company Experience</h3>
      </div>
      <div className="row">
        <div className="card">
            <div className="card-body">
                <img src={paper} alt="sdfsdf" />
                <p>Lorem ipsum dolor sit amet.</p>
                <span>100+</span>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Experience
