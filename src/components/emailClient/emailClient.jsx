import  android from "../../assets/Android.png"
import  ios from "../../assets/IOS.png"
import "./emailClient.css"
import downArrow from "../../assets/down-arrow.svg"
import Header from "../navbar/header"
import Footer from "../footer/footer"
function TextBlock({index,children}){
    return(
        <div className=" text-block ">
            <div className="laptop index">{index}</div>
            <div className="text-white text">{children}</div>
        </div>
    )
}

function Block({heading,img,instructions}){
    return(
        <div className="block">
            <div className="left-block">
                <div className="h1">{heading}</div>
                <hr className="laptop"/>
                {instructions.map((instruction,index)=>{
                    if(index!==instructions.length-1)
                    return <><TextBlock index={index}>{instruction}</TextBlock><img alt="dropdown" className="mobile" style={{width:"10px",height:"20px",alignSelf:"center"}}src={downArrow}/></>
                    else 
                    return <TextBlock index={index}>{instruction}</TextBlock>
                })}
            </div>
            <div className="laptop right-block">
                <div className="image-container"><img src={img} alt="img" /></div>
            </div>
        </div>
    )
}

export default function EmailClient(){
    const in1=["Go to Settings > Accounts > Email ","'E-mail id' is kerberos_id@iitd.ac.in","'Username' is kerberos_id and 'Password' is your kerberos password","Choose 'Manual Setup' > 'IMAP Account'","IMAP server : mailstore.iitd.ac.in","Security Type : SSL (Accept all certificates). Click Next.","SMTP server : smtp.iitd.ac.in","Security Type : SSL (Accept all certificates).Click Next","Choose synchronisation frequency and other options as per your choice. Click Next","Set a name for your account. Click Done"]
    const in2=["Go to Settings > Accounts > Email ","'E-mail id' is kerberos_id@iitd.ac.in","'Username' is kerberos_id and 'Password' is your kerberos password","Choose 'Manual Setup' > 'IMAP Account'","IMAP server : mailstore.iitd.ac.in","Security Type : SSL (Accept all certificates). Click Next.","SMTP server : smtp.iitd.ac.in","Security Type : SSL (Accept all certificates).Click Next","Choose synchronisation frequency and other options as per your choice. Click Next","Set a name for your account. Click Done"]
    
    return(
        <><Header/>
        <div className="emailClient">
            {/* <h1>Email Client</h1> */}
            <div className="mobile initial-text">If you want to get rid of logging in again and again into your Kerberos ID and want to sync your Kerberos ID with your Android, iOS and iPadOS devices, then just follow the steps given below.Syncing your webmail with your phones will provide you a central interface for receiving, composing and sending emails.</div>
            <Block heading="android" instructions={in1} img={android}/>
            <Block heading="iOS" instructions={in2} img={ios}/>
        </div>
        <Footer/>
        </>
    )   
}