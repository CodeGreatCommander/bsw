import React from "react"
import line from "../../../assets/dotted-line.jpg"
import {PiPhoneCallFill} from 'react-icons/pi'
import {MdEmail} from 'react-icons/md'
import {FaHome} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import './member.css'


const data=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
]


const  RepCard=(props)=>{
    if(props.type==="PRESIDENT" || props.type==="GENERAL SECRETARY" ){
        return(<article className="member ">
        <h5>{props.type}</h5>
        <div className="dotted-line">
        {
          data.map(({id}) =>{
            return(
                <img src={line} alt="" className="dotr" />
            );
          })}

        </div>
        <div className="desc">
                <img src={props.image} alt="" />
                <div className="member-info">
                <h6 className="name">{props.name}</h6>
                <div className="call">
                    <PiPhoneCallFill/>
                    <p>{props.phone}</p>
                </div>
                <div className="email">
                    <MdEmail/>
                    <p>{props.email}</p>
                </div>
                <div className="email1">
                    <FaHome/>
                    <p>{props.house}</p>
                </div>
            </div>
        </div>
    </article>)

    }else{
        return(<article className="member member_p">
        <h5>{props.type}</h5>
        <div className="dotted-line dotted-line_p">
        {
          data.map(({id}) =>{
            return(
                <img src={line} alt="" className="dot_p" />
            );
          })}

        </div>
        <div className="desc desc_p">
                
                <div className="mobile">
                <img src={props.image} alt="" />
                    <div className="icon">
                    <BsFillPersonFill />
                </div></div>
                <div className="member-info member-info_p">
                <h6 className="name">{props.name}</h6>
                <div className="call call_p">
                    <PiPhoneCallFill/>
                    <p>{props.phone}</p>
                </div>
                <div className="email_r">
                    <MdEmail/>
                    <p>{props.email}</p>
                </div>
                <div className="email1_r">
                    <FaHome/>
                    <p>{props.house}</p>
                </div>
            </div>
        </div>
    </article>)
    }
    
}

export default RepCard;