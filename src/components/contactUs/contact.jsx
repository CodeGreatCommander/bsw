import React from 'react'
import PageHeading from '../headingWithBGpic/pageHeading'
import Navbar from '../navbar/navbar'
import "./contact.css"
import MemberCard from './templates/member'
import Footer from "../footer/footer"

const Contact = () => {
  return (
    <>
   
        <Navbar/>
        <PageHeading heading="Contact Us"/>
        <div className="headerSpace"></div>
        <div className="contactUs">
       
        
          <div className="supervision student-team">
          <h3>SUPERVISION</h3>
            <div className="supervisors team">
              <MemberCard/>
              <MemberCard/>
            </div>
            
          </div>
          <div className="gapline"></div>
          
          <div className="student-team">
          <h3>STUDENT TEAM</h3>
             <MemberCard/>
            <div className="team">
              <MemberCard/>
              <MemberCard/>
            </div>
            
          </div>
          <article className="secretaries">
            <div className="sec-column">
            <MemberCard/>
              <MemberCard/>
            </div>
            <div className="sec-column">
            <MemberCard/>
              <MemberCard/>
            </div>
            <div className="sec-title">
              <h3>SECRETARIES</h3>
            </div>
            </article>

          <div className="gapline"></div>

            
        </div>

       <Footer/>

    </>
    
  )
}

export default Contact