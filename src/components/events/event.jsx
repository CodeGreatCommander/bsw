import React from 'react'
import Navbar from '../navbar/navbar'
import PageHeading from '../headingWithBGpic/pageHeading'
import './events.css'
import Contents from './templates/contents'
import { BsPlayFill } from 'react-icons/bs'
import Footer from '../footer/footer'
import Slides from './templates/slides'
import { useState } from 'react'
const EventPage = () => {
  const [active,setState]=useState(false);
  const [active1,setState1]=useState(false);
  const [active2,setState2]=useState(false);
  const [active3,setState3]=useState(false);
  const [active4,setState4]=useState(false);
  const [active5,setState5]=useState(false);
  const [active6,setState6]=useState(false);
  const [active7,setState7]=useState(false);
  

 
  return (
    <>
      <Navbar />
      <PageHeading heading="EVENTS" />
      <div className="headerSpace"></div>
      <div className="description">
        <p>
          The Mentorship Committee of BSW executes & monitors all mentorship initiatives & activities for IIT Delhi students. These include freshers' orientation, mentorship of freshmen students, student-alumni mentorship, academic mentorship, language mentorship, counselling services, etc. On the commencement of one's IITD life, every individual is provided a mentor who is a trained & experienced senior student. The mentor is responsible for making the student capable of taking informed decisions in academic, extra-curricular & personal fronts by sharing unbiased knowledge & experiences. Mentors are also expected to contribute their efforts in other mentorship initiatives.
        </p>
        <Contents className="con" />
      </div>

      <div className="event-title">
        <h3>FEMALE JEE COUNSELLING</h3>
        <div className="play" onClick={()=>{active?setState(false):setState(true)}}><BsPlayFill className={active}/></div>

      </div>

      {active?(<div>
      <div className="event">
        <p>BSW organizes a female counselling session in collaboration with IGES (Initiative for Gender Equity and Sensitization) every year to increase awareness about the engineering opportunities among female IIT aspirants who have cleared JEE Advanced. Also, to help students wisely ﬁll their preferences and solve any doubts the students or their parents might have. </p>
       
       <p>
We have a diverse team consisting of faculty and senior students representing each branch offered at IIT Delhi. The responsibility of the team is towards the girls who register annually for the counselling sessions. The team perseveres to make the process of filling branch preferences less strenuous for students. They do so by making interactive presentations about each engineering department and shedding some light on the career opportunities one can pursue. <br /><br/>
One of the unique features of the counselling session, 2019, was the event being conducted in two slots dispersing a personalized guidance to over ~130 aspirants. Professors namely, Narayan Kurur, Shalini Gupta, Ravinder Kaur, Sumeet Agarwal, Sangeeta Kohli among others, were instrumental in making this possible</p>
      </div>
      <div className="albums">
      <Slides className="album"/>
      <div className="shadow"> </div>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
      </div>):null}
      
      
      <div className="gap-line"></div>
      <div className="event-title">
        <h3>FRESHER ORIENTATION SESSION</h3>
        <div className="play" onClick={()=>{active1?setState1(false):setState1(true)}}><BsPlayFill className={active1}/></div>

      </div>

      {active1?(<div>
      <div className="event">
        <h6>Director's address</h6>
        <p>The Director of IIT-D welcomes all the parents and students and talks about the culture and legacy of our college. He is followed by the other Deans who addresses the key elements and working of our institute. </p>
        <h6>Department Orientation</h6>
        <p>Every Department organizes a session for the freshers in their department wherein the HoD along with some other professors talk about various aspects of their department including the course content, research facilities, future opportunities. This gives the students a glimpse of their forthcoming academic journey. </p>
        <h6>Session with Mentors</h6>
        
        <p>This is an informative session with the student mentors where they inform about all the academic details like calculating CGPA, Courses of Study, DepC etc. The mentors also guide them through the institute's rules and regulations along with some major policies. </p>
      <h6>Evening Games</h6>
      <p>As the name suggests, this event is organized every year to acquaint the freshers with the fun side of their college, who have only went through all the rigorous paperwork and formal sessions till this event. The freshers engage in some fun activities and exciting games in groups in the evening. They also get acquainted with some of their new batchmates through this event. </p>
      <h6>Registration</h6>
      <p> The members of BSW along with the UG Section ensure that the registration process for every student goes smoothly. They help the students who face any problems with the paperwork and guide them through every stage of the process. After the registration, every student officialy becomes a part of the IIT Delhi fraternity. </p>
      <h6>Tour of Stalls</h6>
      <p>This is a preliminary Orientation from every club and student board inside IIT. The freshers get a glimpse of everything that goes on in the various clubs by visiting the stall of every club, where they are attended by the representatives from these clubs. The Tour of Stalls every year is followed by a play specially made for the freshers by the Dramatics Society of IITD - Ankahi. </p>
      </div>
      <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
      </div>):null}

      <div className="gap-line"></div>
      <div className="event-title">
        <h3>DELHI DARSHAN</h3>
        <div className="play" onClick={()=>{active2?setState2(false):setState2(true)}}><BsPlayFill className={active2}/></div>

      </div>
      {active2?(<div>
      <div className="event">
        <p>Delhi Darshan 2019 was organized on the 3rd & 4th of August. It's a tour across Delhi, relishing the beauty of the city with indelible bus-rides. We had exciting ice-breakers to know our batchmates, and memories to cherish. We visited nearby monuments and tourist spots, and had a day filled with games and fun activities</p>
        
      </div>
      <div className="loc-info event-part">
          <h4>DELHI DARSHAN ITENARY</h4>
          <div className="locs">
            <p>Qutub Minar</p>
            <BsPlayFill color='black'/>
            <p>Lotus Temple</p>
            <BsPlayFill color='black'/>
            <p>Gurudwara Bangla Sahib</p>
            <BsPlayFill color='black'/>
            <p>Raj Ghat</p>
            <BsPlayFill color='black' />
            <p>Lodhi Garden</p>

          </div>
        </div>
        <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
      </div>):null}
      
        <div className="gap-line"></div>
        <div className="event-title">
        <h3>SPERANZA</h3>
        <div className="play" onClick={()=>{active3?setState3(false):setState3(true)}}><BsPlayFill className={active3}/></div>
      </div>

      {active3?(<div>
      <div className="event">
          <p>
Convergenz is the annual youth fest organized by the BSW. It involves various competitions and events where the student community of IIT Delhi participates and get to explore the recreational aspect of the college. Various events which are generally popular among the youth were organized for the students to enjoy and have fun by getting along with each other. This is also the first exposure to any big event inside the college for the freshers and several fresher-oriented games and competitions are also organized.
</p>
        </div>
        <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
      </div>):null}

      
        <div className="gap-line"></div>
        <div className="event-title">
        <h3>STIC DINNER</h3>
        <div className="play" onClick={()=>{active4?setState4(false):setState4(true)}}><BsPlayFill className={active4}/></div>
      </div>

      {active4?(<div>
      <div className="event">
        <p>STIC dinner was conceptualized with the belief that for an efficient learning experience, both parties, students and teachers must freely express their feedback of one another. In lecture halls, due to a large number of students in one class never really allows free interaction to take place. However, this is made possible at the STIC dinner! 
</p><p>The STIC dinner is a two-day event. The first day is graced by students belonging to groups 1-20 and their respective professors. The second day is for students belonging to groups 21-40 and their professors. To ensure the event activities are conducted smoothly, we have put in place a per-student pass system. </p>
<p>The event begins by a performance by the music club, where all get to see an amazing collaboration between vocalists and instrumentalists. Followed by this, all see students and teachers showing off their skills such as singing, dancing, etc. The BSW host presents a set of fun questions to teachers encouraging them to share their fun college memories. Several other activities throughout the event make it an entertaining and memorable night! 
</p>
 
    BSW sees the purpose of STIC dinner being solved when teachers openly share their life experiences with students, while also taking an active interest in the student’s life and vice-versa. Along with enhancing the student-teacher relationship, the larger purpose of effective learning from one another is encouraged through these interactions! <p/>
 <p>
BSW also provide dinner for both professors and students. Informal conversations over food make students more comfortable while talking to the professor in the lecture hall. </p>
      </div>
      <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
      </div>):null}


      <div className="gap-line"></div>
        <div className="event-title">
        <h3>INFORMATIVE SESSIONS</h3>
        <div className="play" onClick={()=>{active5?setState5(false):setState5(true)}}><BsPlayFill className={active5}/></div>
      </div>
      {
        active5?(
          <div>
            <div className="event">
        <p>IIT Delhi provides its students a large number of diverse opportunities to learn and grow. Students are often confused how to go about making the most of these opportunities. In the various information sessions, we have seniors from all branches share their experiences navigating through the vast pool of opportunities. These sessions are an attempt to bridge the senior-junior gap, while encouraging the practice of learning from one another.
</p><p>
We have seniors covering important topics such as foreign exchange, foreign internships & minor degree planning among others. </p>
      </div>
      <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
          </div>
        ):null
      }
      <div className="gap-line"></div>
        <div className="event-title">
        <h3>REX KARAMVEER CHAKRA</h3>
        <div className="play" onClick={()=>{active6?setState6(false):setState6(true)}}><BsPlayFill className={active6}/></div>
      </div>
      {active6?(
        <div>
          <div className="event">
        <p>"The Campus Connect-REX Karmaveer Global Young Leaders Fellowship & Karmaveer Chakra Awards 2019" are instituted by iCONGO in Partnership with the United Nations.It is an opportunity for IIT Delhi Students to get recognized for their work that impacts the society. </p>
      </div>
      <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
        </div>
      ):null}
      <div className="gap-line"></div>
        <div className="event-title camp">
        <h3>CAMPS</h3>
        <div className="play" onClick={()=>{active7?setState7(false):setState7(true)}}><BsPlayFill className={active7}/></div>
      </div>
      {active7?(
        <div>
          <div className="event">
        <p>Multiple camps are organized year round to give access to affordable essentials for the students inside the campus. After the summer vacations, a mattress and cycle camp is organised for all the students boarding the campus and the newly arrived freshers. Camps for books, blankets etc. are also organised according to need.</p>
      </div>
      <div className="albums">
      <Slides className="album"/>
      <div className="album-title">
        <h5>GALLERY</h5>
      </div>
      </div>
        </div>
      ):null}
      <Footer/>
      
    </>

  )
}

export default EventPage