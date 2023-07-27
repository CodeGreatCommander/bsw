import React from 'react'
import line from "../../../assets/dotted-line.jpg"
import "./contents.css"
const Contents = () => {

    const data=[
        1,2,3,4,5,6,7,8,9,10,13,14,15
    ]
    
  return (
    <div className='contents'>
      <h4>CONTENTS</h4>
        <div className="dotted-line">
        {
          data.map(({id}) =>{
            return(
                <img src={line} alt="" className="dot" />
            );
          })}

        </div>

        <div className="con-row">
          <div className="cir"></div>
          <p>FEMALE JEE COUNSELLING</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>FRESHER ORIENTATION</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>DELHI DARSHAN</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>SPERANZA</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>STIC DINNER</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>INFORMATIVE SESSIONS</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>REX KARAMVEER CHAKRA</p>
        </div>
        <div className="con-row">
          <div className="cir"></div>
          <p>CAMPS</p>
        </div>
    </div>
  )
}

export default Contents