import img from "../../assets/AboutUs.png";
import "./styles.css";
export default function PageHeadingText(props){
    return (

    
        <div className="head">
        <div className="image-container">
          <img src={img} alt="hi" className="title" />
          <div className="centeredText">
            <h1 className="hh text-center text-md-left">{props.heading}</h1>
            {props.description && <p className="text-center text-md-left d-none d-md-block">{props.description}</p>}
          </div>
        </div>
      </div>
    
        
    )
}

