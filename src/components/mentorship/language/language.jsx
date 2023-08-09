import { useState } from "react";
import Heading from "../templates/heading";
import Question from "../templates/question";
import Card from "../templates/card";
import circle from '../../../assets/circle.svg'
import bc from '../../../assets/BRITISHLOGO.png'

function Carousel({cards}){
  return (
    <div className="d-flex flex-row" style={{overflowX:'scroll',width:(window.innerWidth<700?0.8:0.5)*window.innerWidth,borderBottomWidth:'2rem',borderBottomColor:"black",borderLeftWidth:'0.5rem',borderLeftColor:"black"}}>
      {cards.map((card)=>{
        return(
          <div className="specialquestion-card text-center m-2" style={{minWidth:window.innerWidth>700?'19rem':"14rem"}}>
            <div style={{paddingBottom:'1rem'}}>{card.img}{card.heading}</div>
            <div style={{fontSize:'0.8rem'}}>{card.body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default function Language() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="outer-container-mentorship">
      {window.innerWidth > 700 ? (
        <>
        <div className="left-mentorship">
          <Heading
            active={active}
            setActive={setActive}
            heading="Language Mentorship"
          />
          {active ? (
          <div className="question-block">
            <Question question="What is language mentorship ?" answer="Language Mentorship is an initiative of BSW that aims to create a holistic ecosystem where students can learn and practice language.
 The objective is to help students who are not comfortable with English or Hindi understand and comprehend the language"/>
            <Question question="Why choose his programme ?" answer="Because of the transition from school to college there are many students who face a lot of difficulty in understanding the class lectures and even sometimes they miss their classes due to medical reasons. So by this they can clear their doubts of any course. And also since the second year students have gone through the same phase they are much more able to help the first year students."/>
            <Question question="THE WORKBOOK" answer="The WorkBook is a complete A To Z module which is going to help any Beginner to be College Ready and it is developed in such a way that people with no prior knowledge about English can work on their own without anyone’s guidance."/>
            <Carousel cards={[{img:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 123 87" fill="none">
  <path d="M25.0385 0.181152H3.60958C1.64526 0.181152 0.0380859 1.79822 0.0380859 3.77463V82.8311C0.0380859 84.8075 1.64526 86.4246 3.60958 86.4246H25.0385C27.0029 86.4246 28.61 84.8075 28.61 82.8311V3.77463C28.61 1.79822 27.0029 0.181152 25.0385 0.181152ZM21.467 21.742H7.18107V14.5551H21.467V21.742ZM60.7535 0.181152H39.3245C37.3602 0.181152 35.753 1.79822 35.753 3.77463V82.8311C35.753 84.8075 37.3602 86.4246 39.3245 86.4246H60.7535C62.7178 86.4246 64.325 84.8075 64.325 82.8311V3.77463C64.325 1.79822 62.7178 0.181152 60.7535 0.181152ZM57.182 21.742H42.896V14.5551H57.182V21.742Z" fill="#F7F7F7"/>
  <path d="M85.4269 5.73671L66.2908 15.4391C65.448 15.8702 64.8085 16.6188 64.5116 17.522C64.2146 18.4251 64.2841 19.4097 64.7051 20.2615L96.8485 84.441C97.277 85.289 98.021 85.9324 98.9187 86.2312C99.8163 86.53 100.795 86.4601 101.641 86.0365L120.778 76.3341C121.62 75.903 122.26 75.1544 122.557 74.2513C122.854 73.3481 122.784 72.3635 122.363 71.5117L90.2199 7.33221C89.7914 6.4842 89.0474 5.84079 88.1497 5.54198C87.2521 5.24317 86.2735 5.31316 85.4269 5.73671Z" fill="#F7F7F7"/>
</svg>,heading:"Skills aren’t everything",body:"Every person is unique and we all possess valuable skill sets . Naturally, our skills are the ones that earn us a status of some kind. We sometimes tend to neglect our presentation skills. Skill is only an ingredient for success,which displays its true potential only when supported by the way you communicate and showcase your ideas."},{img:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 123 87" fill="none">
  <path d="M25.0385 0.181152H3.60958C1.64526 0.181152 0.0380859 1.79822 0.0380859 3.77463V82.8311C0.0380859 84.8075 1.64526 86.4246 3.60958 86.4246H25.0385C27.0029 86.4246 28.61 84.8075 28.61 82.8311V3.77463C28.61 1.79822 27.0029 0.181152 25.0385 0.181152ZM21.467 21.742H7.18107V14.5551H21.467V21.742ZM60.7535 0.181152H39.3245C37.3602 0.181152 35.753 1.79822 35.753 3.77463V82.8311C35.753 84.8075 37.3602 86.4246 39.3245 86.4246H60.7535C62.7178 86.4246 64.325 84.8075 64.325 82.8311V3.77463C64.325 1.79822 62.7178 0.181152 60.7535 0.181152ZM57.182 21.742H42.896V14.5551H57.182V21.742Z" fill="#F7F7F7"/>
  <path d="M85.4269 5.73671L66.2908 15.4391C65.448 15.8702 64.8085 16.6188 64.5116 17.522C64.2146 18.4251 64.2841 19.4097 64.7051 20.2615L96.8485 84.441C97.277 85.289 98.021 85.9324 98.9187 86.2312C99.8163 86.53 100.795 86.4601 101.641 86.0365L120.778 76.3341C121.62 75.903 122.26 75.1544 122.557 74.2513C122.854 73.3481 122.784 72.3635 122.363 71.5117L90.2199 7.33221C89.7914 6.4842 89.0474 5.84079 88.1497 5.54198C87.2521 5.24317 86.2735 5.31316 85.4269 5.73671Z" fill="#F7F7F7"/>
</svg>,heading:"Skills aren’t everything",body:"Every person is unique and we all possess valuable skill sets . Naturally, our skills are the ones that earn us a status of some kind. We sometimes tend to neglect our presentation skills. Skill is only an ingredient for success,which displays its true potential only when supported by the way you communicate and showcase your ideas."},{img:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 123 87" fill="none">
  <path d="M25.0385 0.181152H3.60958C1.64526 0.181152 0.0380859 1.79822 0.0380859 3.77463V82.8311C0.0380859 84.8075 1.64526 86.4246 3.60958 86.4246H25.0385C27.0029 86.4246 28.61 84.8075 28.61 82.8311V3.77463C28.61 1.79822 27.0029 0.181152 25.0385 0.181152ZM21.467 21.742H7.18107V14.5551H21.467V21.742ZM60.7535 0.181152H39.3245C37.3602 0.181152 35.753 1.79822 35.753 3.77463V82.8311C35.753 84.8075 37.3602 86.4246 39.3245 86.4246H60.7535C62.7178 86.4246 64.325 84.8075 64.325 82.8311V3.77463C64.325 1.79822 62.7178 0.181152 60.7535 0.181152ZM57.182 21.742H42.896V14.5551H57.182V21.742Z" fill="#F7F7F7"/>
  <path d="M85.4269 5.73671L66.2908 15.4391C65.448 15.8702 64.8085 16.6188 64.5116 17.522C64.2146 18.4251 64.2841 19.4097 64.7051 20.2615L96.8485 84.441C97.277 85.289 98.021 85.9324 98.9187 86.2312C99.8163 86.53 100.795 86.4601 101.641 86.0365L120.778 76.3341C121.62 75.903 122.26 75.1544 122.557 74.2513C122.854 73.3481 122.784 72.3635 122.363 71.5117L90.2199 7.33221C89.7914 6.4842 89.0474 5.84079 88.1497 5.54198C87.2521 5.24317 86.2735 5.31316 85.4269 5.73671Z" fill="#F7F7F7"/>
</svg>,heading:"Skills aren’t everything",body:"Every person is unique and we all possess valuable skill sets . Naturally, our skills are the ones that earn us a status of some kind. We sometimes tend to neglect our presentation skills. Skill is only an ingredient for success,which displays its true potential only when supported by the way you communicate and showcase your ideas."},]}/>

          </div>):null}
        </div>
        <div className="right-mentorship mb-4 justify-content-start" style={{paddingTop:'8rem'}}>
        {active ? (<>
          <Card className="d-flex flex-column mb-3">
            <div className="text-white mb-3" style={{fontSize:'1.3rem',fontWeight:'bold'}}>
              <img src={bc} style={{maxWidth:'10rem',borderRadius:'0rem'}}/>
            </div> 
          <div className="text-start pe-2 text-white" style={{fontSize:'0.9rem'}}>
          To ensure the smooth functioning of the programme, attendance of each mentor is marked in a 2 way process, via register and google drive submissions. In each hostel we have provided white boards and markers in visitors/common rooms to enhance the teaching by the mentors.
          </div>
        </Card>
          <Card className="d-flex flex-column bg-dark">
            <div className="text-start text-white">
            For more interesting things about how, why and what in the English language matters, check out our YOUTUBE PLAYLIST.
            </div>
          </Card></>
        ) : null}
      </div></>):(
        <div className="d-flex flex-column">
          <Heading
            active={active}
            setActive={setActive}
            heading="Language Mentorship"
          />
          <Question question="What is language mentorship ?" answer="Language Mentorship is an initiative of BSW that aims to create a holistic ecosystem where students can learn and practice language.
 The objective is to help students who are not comfortable with English or Hindi understand and comprehend the language"/>
          <Card className="d-flex flex-row mb-3">
            <div className="text-white mb-3" style={{fontSize:'1.3rem',fontWeight:'bold',writingMode: 'vertical-rl',
transform: 'scale(-1,-1)'}}>
              <img src={circle} style={{width:'1.3rem',height:'max-content'}}/><img src={circle} style={{width:'1.3rem',height:'max-content'}}/>BRITISH<br/>
              <img src={circle} style={{width:'1.3rem',height:'max-content'}}/><img src={circle} style={{width:'1.3rem',height:'max-content'}}/>COUNCIL<br/>
            </div> 
          <div className="text-start pe-2 text-white" style={{fontSize:'0.9rem'}}>
          To ensure the smooth functioning of the programme, attendance of each mentor is marked in a 2 way process, via register and google drive submissions. In each hostel we have provided white boards and markers in visitors/common rooms to enhance the teaching by the mentors.
          </div>
        </Card>
        <Question question="Why choose his programme ?" answer="Because of the transition from school to college there are many students who face a lot of difficulty in understanding the class lectures and even sometimes they miss their classes due to medical reasons. So by this they can clear their doubts of any course. And also since the second year students have gone through the same phase they are much more able to help the first year students."/>
            <Question question="THE WORKBOOK" answer="The WorkBook is a complete A To Z module which is going to help any Beginner to be College Ready and it is developed in such a way that people with no prior knowledge about English can work on their own without anyone’s guidance."/>
            <Carousel cards={[{img:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 123 87" fill="none">
  <path d="M25.0385 0.181152H3.60958C1.64526 0.181152 0.0380859 1.79822 0.0380859 3.77463V82.8311C0.0380859 84.8075 1.64526 86.4246 3.60958 86.4246H25.0385C27.0029 86.4246 28.61 84.8075 28.61 82.8311V3.77463C28.61 1.79822 27.0029 0.181152 25.0385 0.181152ZM21.467 21.742H7.18107V14.5551H21.467V21.742ZM60.7535 0.181152H39.3245C37.3602 0.181152 35.753 1.79822 35.753 3.77463V82.8311C35.753 84.8075 37.3602 86.4246 39.3245 86.4246H60.7535C62.7178 86.4246 64.325 84.8075 64.325 82.8311V3.77463C64.325 1.79822 62.7178 0.181152 60.7535 0.181152ZM57.182 21.742H42.896V14.5551H57.182V21.742Z" fill="#F7F7F7"/>
  <path d="M85.4269 5.73671L66.2908 15.4391C65.448 15.8702 64.8085 16.6188 64.5116 17.522C64.2146 18.4251 64.2841 19.4097 64.7051 20.2615L96.8485 84.441C97.277 85.289 98.021 85.9324 98.9187 86.2312C99.8163 86.53 100.795 86.4601 101.641 86.0365L120.778 76.3341C121.62 75.903 122.26 75.1544 122.557 74.2513C122.854 73.3481 122.784 72.3635 122.363 71.5117L90.2199 7.33221C89.7914 6.4842 89.0474 5.84079 88.1497 5.54198C87.2521 5.24317 86.2735 5.31316 85.4269 5.73671Z" fill="#F7F7F7"/>
</svg>,heading:"Skills aren’t everything",body:"Every person is unique and we all possess valuable skill sets . Naturally, our skills are the ones that earn us a status of some kind. We sometimes tend to neglect our presentation skills. Skill is only an ingredient for success,which displays its true potential only when supported by the way you communicate and showcase your ideas."},{img:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 123 87" fill="none">
  <path d="M25.0385 0.181152H3.60958C1.64526 0.181152 0.0380859 1.79822 0.0380859 3.77463V82.8311C0.0380859 84.8075 1.64526 86.4246 3.60958 86.4246H25.0385C27.0029 86.4246 28.61 84.8075 28.61 82.8311V3.77463C28.61 1.79822 27.0029 0.181152 25.0385 0.181152ZM21.467 21.742H7.18107V14.5551H21.467V21.742ZM60.7535 0.181152H39.3245C37.3602 0.181152 35.753 1.79822 35.753 3.77463V82.8311C35.753 84.8075 37.3602 86.4246 39.3245 86.4246H60.7535C62.7178 86.4246 64.325 84.8075 64.325 82.8311V3.77463C64.325 1.79822 62.7178 0.181152 60.7535 0.181152ZM57.182 21.742H42.896V14.5551H57.182V21.742Z" fill="#F7F7F7"/>
  <path d="M85.4269 5.73671L66.2908 15.4391C65.448 15.8702 64.8085 16.6188 64.5116 17.522C64.2146 18.4251 64.2841 19.4097 64.7051 20.2615L96.8485 84.441C97.277 85.289 98.021 85.9324 98.9187 86.2312C99.8163 86.53 100.795 86.4601 101.641 86.0365L120.778 76.3341C121.62 75.903 122.26 75.1544 122.557 74.2513C122.854 73.3481 122.784 72.3635 122.363 71.5117L90.2199 7.33221C89.7914 6.4842 89.0474 5.84079 88.1497 5.54198C87.2521 5.24317 86.2735 5.31316 85.4269 5.73671Z" fill="#F7F7F7"/>
</svg>,heading:"Skills aren’t everything",body:"Every person is unique and we all possess valuable skill sets . Naturally, our skills are the ones that earn us a status of some kind. We sometimes tend to neglect our presentation skills. Skill is only an ingredient for success,which displays its true potential only when supported by the way you communicate and showcase your ideas."},{img:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 123 87" fill="none">
  <path d="M25.0385 0.181152H3.60958C1.64526 0.181152 0.0380859 1.79822 0.0380859 3.77463V82.8311C0.0380859 84.8075 1.64526 86.4246 3.60958 86.4246H25.0385C27.0029 86.4246 28.61 84.8075 28.61 82.8311V3.77463C28.61 1.79822 27.0029 0.181152 25.0385 0.181152ZM21.467 21.742H7.18107V14.5551H21.467V21.742ZM60.7535 0.181152H39.3245C37.3602 0.181152 35.753 1.79822 35.753 3.77463V82.8311C35.753 84.8075 37.3602 86.4246 39.3245 86.4246H60.7535C62.7178 86.4246 64.325 84.8075 64.325 82.8311V3.77463C64.325 1.79822 62.7178 0.181152 60.7535 0.181152ZM57.182 21.742H42.896V14.5551H57.182V21.742Z" fill="#F7F7F7"/>
  <path d="M85.4269 5.73671L66.2908 15.4391C65.448 15.8702 64.8085 16.6188 64.5116 17.522C64.2146 18.4251 64.2841 19.4097 64.7051 20.2615L96.8485 84.441C97.277 85.289 98.021 85.9324 98.9187 86.2312C99.8163 86.53 100.795 86.4601 101.641 86.0365L120.778 76.3341C121.62 75.903 122.26 75.1544 122.557 74.2513C122.854 73.3481 122.784 72.3635 122.363 71.5117L90.2199 7.33221C89.7914 6.4842 89.0474 5.84079 88.1497 5.54198C87.2521 5.24317 86.2735 5.31316 85.4269 5.73671Z" fill="#F7F7F7"/>
</svg>,heading:"Skills aren’t everything",body:"Every person is unique and we all possess valuable skill sets . Naturally, our skills are the ones that earn us a status of some kind. We sometimes tend to neglect our presentation skills. Skill is only an ingredient for success,which displays its true potential only when supported by the way you communicate and showcase your ideas."},]}/>
<Card className="d-flex flex-column bg-dark ml-auto">
            <div className="text-start text-white">
            For more interesting things about how, why and what in the English language matters, check out our YOUTUBE PLAYLIST.
            </div>
          </Card>
        </div>)}
      </div>
    </>
  );
}
