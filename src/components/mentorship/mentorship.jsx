import Footer from "../footer/footer";
import Header from "../navbar/header";
import Navbar from "../navbar/navbar";
import Academic from "./academic/academic";
import Alumini from "./alumini/alumini";
import Language from "./language/language";
import './mentorship.css'

export default function Mentorship(){
    return(
    <>
        <Header/>
        <div className="mentorship pt-4 pb-5 mb-2">
            <Academic/>
            <hr style={{marginRight:window.innerWidth>1000?'8rem':'1rem',marginTop:window.innerWidth>1000?'3rem':'1rem',marginBottom:window.innerWidth>1000?'3rem':'0rem',borderTop:'solid 2px rgba(33, 170, 158, 1)'}}/>
            <Language/>
            <hr style={{marginRight:window.innerWidth>1000?'8rem':'1rem',marginTop:window.innerWidth>1000?'3rem':'1rem',marginBottom:window.innerWidth>1000?'3rem':'0rem',borderTop:'solid 2px rgba(33, 170, 158, 1)'}}/>
            <Alumini/>
        </div>
        <Footer/>
    </>)
}