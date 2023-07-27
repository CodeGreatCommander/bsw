import img1 from '../../../assets/down_mentorship.svg'
import img2 from '../../../assets/right_mentorship.svg'


export default function Heading({heading,active,setActive}){
    return(
        <div className="heading-container-mentorship mt-5 mb-2" onClick={()=>{setActive(true)}}>
            <div className="heading">{heading}</div>
            {window.innerWidth > 700 ?
            <img src={active?img1:img2} className='images'/>:null}
        </div>
    );
}