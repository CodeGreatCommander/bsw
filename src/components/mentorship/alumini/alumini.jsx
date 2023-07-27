import { useState } from "react";
import Heading from "../templates/heading";
import Question from "../templates/question";
import Card from "../templates/card";

function Benefits(){
  return(
    <div className="">
      <div className="mentor-question">How are the alumni and students benefitted from this programme ?</div>
      <div className={"d-flex flex-row justify-content-"+(window.innerWidth>500?"center":"start")} style={{overflowX:'scroll',width:window.innerWidth<800?window.innerWidth*0.8:'100%'}}>
      <div className="specialquestion-card text-center m-2" style={{minWidth:'17rem',maxWidth:'20rem'}}>
        <div style={{fontSize:'1.1rem',padding:'0.5rem'}}>For Alumni</div>
        <div className="" style={{fontSize:'0.9rem'}}>One of the key pillars of IITD is it’s versatile alumni network who are always keen to contribute to their alma mater. Being an alumni mentor, you will be guiding and motivating the students who are in the same shoes as you were some years before. You will form personal and meaningful relations with these students and prepare them for the world beyond IIT.</div> 
      </div>
      <div className="specialquestion-card text-center m-2" style={{minWidth:'17rem',maxWidth:'20rem'}}>
        <div className="" style={{fontSize:'1.1rem',padding:'0.5rem'}}>For Students</div>
        <div className="" style={{fontSize:'0.9rem'}}>This is a unique opportunity wherein you will have access to the vast alumni network of IITD, who will share their personal life experiences and learnings with you. They will help you gain a better and mature perspective and enrich your college experience. You will not only grow professionally but also personally by forming meaningful relations with these alumni.</div> 
      </div>
      </div>
    </div>
  )
}

function BlackCard({children,index,style}){
  return(
    <div className={"bg-dark text-white text-center p-2 align-self-center"} style={{...style,width:'19rem',height:'6rem',position:window.innerWidth>500?'absolute':'relative',borderRadius:'0.5rem'}}>
      {children}
      <div style={{top:-18,left:-18,position:'absolute'}}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 73 73" fill="none">
        <circle cx="36.1164" cy="36.1789" r="35.9846" fill="#21AA9E"/>
      </svg></div>
      <div style={{top:-12,left:-5,position:'absolute',color:'white'}}>
        {index}
      </div>
    </div>
  )
}
function JoinBlackCard(){
  return(
    <div className="d-flex flex-column align-self-center"style={{width:"100%",height:window.innerWidth>500?'15rem':'max-content',position:'relative'}}>
      <BlackCard index={1} style={{position:window.innerWidth>500?'absolute':'relative',bottom:0,left:0}}>Present IITD students and IITD alumni need to fill our Exhaustive Registration Form</BlackCard>
      {window.innerWidth>500?<svg xmlns="http://www.w3.org/2000/svg" width="105" height="102" style={{position:'absolute',top:'19%',left:'25%',zIndex:-1}} viewBox="0 0 215 204" fill="none">
  <path d="M3.03125 201.514C50.3177 201.514 59.8569 188.751 105.26 113.189C171.602 2.7803 178.152 2.78027 211.578 2.78027" stroke="#214452" stroke-width="4.90699" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="16.36 16.36"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 6 12" fill="none" className="align-self-center">
  <path d="M3 12L5.88675 7H0.113249L3 12ZM3.5 7.5L3.5 0H2.5L2.5 7.5H3.5Z" fill="#21AA9E"/>
</svg>}
      <BlackCard index={2} style={{position:window.innerWidth>500?'absolute':'relative',top:0,left:window.innerWidth>500?"40%":"0"}}>Algorithm driven mapping connects the students and mentors based on their interests and goals.</BlackCard>
      {window.innerWidth>500?<svg style={{position:'absolute',top:'25%',right:'-20%',zIndex:-1}} xmlns="http://www.w3.org/2000/svg" width="160" height="85" viewBox="0 0 322 174" fill="none">
  <path d="M0.311523 2.50488C77.734 10.5289 59.3251 41.1732 120.085 85.9544C153.833 110.828 292.135 75.5234 319.266 172.614" stroke="black" stroke-width="4.90699" stroke-dasharray="16.36 16.36"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 6 12" fill="none" className="align-self-center">
  <path d="M3 12L5.88675 7H0.113249L3 12ZM3.5 7.5L3.5 0H2.5L2.5 7.5H3.5Z" fill="#21AA9E"/>
</svg>}
      <BlackCard index={3} style={{position:window.innerWidth>500?'absolute':'relative',bottom:0,right:window.innerWidth>500?-200:'0%'}}>A repository of IITD Alumni’s testimonials are made available to the students who could not be matched.</BlackCard>
    </div>
  )
}

export default function Alumini(){
    const [active, setActive] = useState(window.innerWidth>700?false:500);
  return (
    <>
      <div className="outer-container-mentorship">
        <div className={window.innerWidth>800?"left-mentorship":"d-flex flex-column"}>
          <Heading
            active={active}
            setActive={setActive}
            heading="Alumini Mentorship"
          />
          {active ? (
          <div className="question-block">
            <Question question="How does this Programme work ?" answer="The ‘Student Alumni Mentorship Program’ aims at establishing one on one connecting platform between students and alumni of IIT Delhi. This is done through a rigorous three step process :"/>
            <JoinBlackCard/>
            <Benefits/>
            <Question question="Why do we need this programme ?" answer="Students after coming to IIT are overwhelmed by the countless opportunities present here and often end up confused or going with the herd. Through this program, we aspire to give the students access to our diverse global alumni network to gain new perspectives and responsibly plan their career trajectories."/>
          </div>):null}
        </div>
        <div className="right-mentorship mb-4">
        {active && window.innerWidth>900? (
          <Card className="d-flex flex-column bg-dark">
            <div className="text text-start">
              In learning you will teach, and in teaching you will learn.
            </div>
            <div className="align-self-end text-author" style={{'color':'rgba(33, 170, 158, 1)'}}>- Phil Collins</div>
          </Card>
        ) : null}
      </div>
      </div>
    </>);
}