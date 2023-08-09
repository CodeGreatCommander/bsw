import img from "../../assets/AboutUs.png";
import "./styles.css";
export default function PageHeading(props){
    return (

    
    <div className="head"><img src={img} alt="hi" className="title_" />
    <div className="centeredText_">
        <h1>{props.heading}</h1>
        
    </div>
    </div>
    
        
    )
}

