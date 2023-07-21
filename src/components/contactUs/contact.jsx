import React, { useState } from 'react'
import PageHeading from '../headingWithBGpic/pageHeading'
import Navbar from '../navbar/navbar'
import "./contact.css"
import member from "../../assets/member.jpg"
import MemberCard from './templates/member'
import Footer from "../footer/footer"
import RepCard from './templates/repcard'

const Contact = () => {
  const data=[
    1,2,3,4,5,6,7,8,9,10,11,12,13
]


  return (
    <>
   
        <Navbar/>
        <PageHeading heading="CONTACT US"/>

        <div className="headerSpace"></div>
        <div className="contactus">
        <div className="team-name">
        <h3>SUPERVISION</h3>
        </div>
          <div className="supervision student-team">
          
            <div className="supervisors team">
            <MemberCard  name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="PRESIDENT"/><MemberCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="PRESIDENT"/>
            </div>
            
          </div>
          <div className="gapline"></div>
          <div className="team-name">
        <h3>STUDENT TEAM</h3>
        </div>
          
          <div className="student-team">
          
        
          <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="GENERAL SECRETARY" house="Aravali"/>
            <div className="team">
              
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="DEP.GENERAL SECRETARY" house="Aravali"/>
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="DEP.GENERAL SECRETARY"house="Aravali"/>
            </div>
            
          </div>
          <article className="secretaries">
            <div className="sec-column">
            <RepCard  name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            </div>
            <div className="sec-column">
            <RepCard  name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            </div>
            <div className="sec-title">
              <h3>SECRETARIES</h3>
            </div>
            
           
            </article>
          <article className="secretaries">
            <div className="sec-column">
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            </div>
            <div className="sec-column">
            <RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/><RepCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="SECRETARY"house="Aravali"/>
            </div>
            <div className="sec-title">
              <h3>SECRETARIES</h3>
            </div>
          
            </article>
            
            <div className="gapline"></div>
            <div className="team-name"><h3>HOSTEL REPRESENTATIVES</h3></div>
            
           <div className="reps">
           {
              data.map(({id})=>{

                return (
                  <article className="rep" key={id}>
                
                  <div className="rep-row">
                  <MemberCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="REPRESENTATIVE" /><MemberCard name="PROf. REETIKA KHERA"image={member} phone="+913232323232" email ="something@gmail.com" type="REPRESENTATIVE"/>
                  </div>
                  <div className="rep-title">
                    <h3>ARAVALI</h3>
                  </div>
                  </article>
                )
              })
            }
           </div>
                
   
          </div>

       <Footer/>

    </>
    
  )
}

export default Contact