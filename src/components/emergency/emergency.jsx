import { useState } from "react";
import "./emergency.css";
import phoneimg from "../../assets/phone.png";
import security from "../../assets/security.svg";
import home_work from "../../assets/home_work.svg";
import Footer from "../footer/footer";
import Header from "../navbar/header";
function ContactBar({ name, phone }) {
  return (
    <div className="contact-bar">
      <div className="contact-name">
        <img
          src={phoneimg}
          style={{ width: "1.5rem", height: "1.5rem", marginRight: "1rem" }}
          alt="phone"
        />
        {name}
      </div>
      <div className="contact-phone green">{phone}</div>
    </div>
  );
}

function Default({ contacts }) {
  return (
    <div className="default">
      {Object.keys(contacts).map((key, index) => {
        return (
          <>
            {" "}
            <ContactBar name={key} phone={contacts[key]} />
            {index !== Object.keys(contacts).length - 1 ? <hr className="laptop"/> : null}
          </>
        );
      })}
    </div>
  );
}
function OpenClose({ contacts, heading,image }) {
  const [open, setOpen] = useState(window.innerWidth<700?true:false);
  return (
    <div>
      <div className="container-block" onClick={() => {if(window.innerWidth>700)setOpen((prevOpen) => !prevOpen)}}>
        <div
          className="heading"
        >
          {heading}
        </div>
        <div className="mobile backimg">
          <img src={image} alt="bg-image" className="bg-image"/>
        </div>
        <div style={{transform: open ? "rotate(180deg)" : "rotate(0deg)",alignSelf:"center"}} className="laptop">
            {/* <img src={dropdown} alt="dropdown" className="dropdown" style={{transform: open ? "rotate(90deg)" : "rotate(0deg)"}}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M24.7368 34.9841L35.7936 20.6513C37.4527 18.5006 35.9196 15.3818 33.2034 15.3818H10.6804C7.9374 15.3818 6.41239 18.5548 8.12595 20.6967L19.5922 35.0295C20.9166 36.6851 23.4419 36.6628 24.7368 34.9841Z" fill="#21AA9E"/>
  <circle cx="22.6842" cy="22.7421" r="21.2636" transform="rotate(90 22.6842 22.7421)" stroke="#21AA9E" stroke-width="1.63566"/>
</svg>
        </div>
      </div>
      <div className="body-of">
        {open
          ? Object.keys(contacts).map((key, index) => {
              return (
                <>
                  {" "}
                  <ContactBar name={key} phone={contacts[key]} />
                  {index !== Object.keys(contacts).length - 1 ? <hr className="laptop" /> : null}
                </>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default function Emergency() {
  const contacts = {
    "IIT security": "+91-11-2659-1000",
    "IIT security1": "+91-11-2659-1000",
    "IIT security2": "+91-11-2659-1000",
    "IIT security3": "+91-11-2659-1000",
  };
  return (
    <>
    <Header/>
    <div className="emergency">
      <div className="intro-text">
        Given below is the link of IIT Delhi Telephone Directory.
        <br />
        All the telephone contacts at IIT Delhi are available in this directory,
        and also there are emergency contacts given below. In case you don’t
        know whom to call, just call the Main Control Room
        <span className="green"> (+91-11-2659-1000)</span>. You are advised to
        save some important contacts in your phone as well. Download a PDF of
        the directory from{" "}
        <span className="green">http://rti.iitd.ac.in/rti/rtiteldir.pdf.</span>{" "}
        You have to use DID code(<span className="green">+91-11-2659</span>)
        before any number.{" "}
      </div>
      <Default contacts={contacts} />
      <hr className="mobile"/>
      <OpenClose contacts={contacts} heading="Security" image={security} />
      <hr className="mobile"/>
      <OpenClose contacts={contacts} heading="Hostel Security" image={home_work}/>
    </div>
    <Footer/>
    </>
  );
}
