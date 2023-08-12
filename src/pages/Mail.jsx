import Navbar from "../components/navbar/navbar";
import PageHeading from "../components/headingWithBGpic/pageHeading";
import Footer from "../components/footer/footer";
import DeviceHeading from "../components/mail_page/DeviceHeading";
import SetupStep from "../components/mail_page/SetupStep";
const Mail = () => {
  return (
    <>
    <Navbar/>
    <PageHeading heading="EMAIL CLIENT CONFIGURATION
"></PageHeading>
        <div className="colorbar"></div>
    

    <p className="col-8 mx-auto mt-5 email_top">If you want to get rid of logging in again and again into your kerberos id and want to sync your kerberos id with your Android, iOS and iPadOS devices, then just follow the steps given below. Syncing your webmail with your phones will provide you a central interface for receiving, composing and sending emails.</p>
        <div className="step_cont col-8 col-md-8 mx-auto">

<DeviceHeading device="Android"/>
<p className="corner_and">Anduuuu</p>
    <SetupStep body="Go to Settings > Accounts > Email" num="1"></SetupStep>
    <SetupStep body="'E-mail id' is kerberos_id@iitd.ac.in" num="2"></SetupStep>
    <SetupStep body="'Username' is kerberos_id and 'Password' is your kerberos password" num="3"></SetupStep>
    <SetupStep body="Choose 'Manual Setup' > 'IMAP Account'" num="4"></SetupStep>
    


    <DeviceHeading device="ios/ipad os"/>
    <SetupStep body="Go to Settings > Accounts > Email" num="1"></SetupStep>
    <SetupStep body="'E-mail id' is kerberos_id@iitd.ac.in" num="2"></SetupStep>
    <SetupStep body="'Username' is kerberos_id and 'Password' is your kerberos password" num="3"></SetupStep>
    <SetupStep body="Choose 'Manual Setup' > 'IMAP Account'" num="4"></SetupStep>
    

        </div>
<div className="space_"></div>

<Footer></Footer>
    </>
  )
};

export default Mail;
