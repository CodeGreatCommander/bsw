import React from "react"
import member from "../../../assets/member.jpg"
import line from "../../../assets/dotted-line.jpg"
import {PiPhoneCallFill} from 'react-icons/pi'
import {MdEmail} from 'react-icons/md'
import './member.css'

const data=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
]

const  MemberCard=()=>{
    return(<article className="member">
        <h5>PRESIDENT</h5>
        <div className="dotted-line">
        {
          data.map(({id}) =>{
            return(
                <img src={line} alt="" className="dot" />
            );
          })}

        </div>
        <div className="desc">
                <img src={member} alt="" />
                <div className="member-info">
                <h6 className="name">PROf. REETIKA KHERA </h6>
                <div className="call">
                    <PiPhoneCallFill/>
                    <p>+913232323232</p>
                </div>
                <div className="email">
                    <MdEmail/>
                    <p>something@gmail.com</p>
                </div>
            </div>
        </div>
    </article>)
}

export default MemberCard;