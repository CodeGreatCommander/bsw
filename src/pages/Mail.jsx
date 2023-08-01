import Navbar from "../components/navbar/navbar";
import PageHeadingText from "../components/headingWithBGpic/pageHeading_text";
import Footer from "../components/footer/footer";
import DeviceHeading from "../components/mail_page/DeviceHeading";
import SetupStep from "../components/mail_page/SetupStep";
const Mail = () => {
  return (
    <>
    <Navbar/>
    <PageHeadingText heading="EMAIL CLIENT CONFIGURATION
" description="If you want to get rid of logging in again and again into your kerberos id and want to sync your kerberos id with your Android, iOS and iPadOS devices, then just follow the steps given below. Syncing your webmail with your phones will provide you a central interface for receiving, composing and sending emails.
"></PageHeadingText>
        <div className="colorbar"></div>
        <div className="step_cont col-8 col-md-8 mx-auto">

<DeviceHeading device="Android"/>
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
{/* Create a container having multiple elements showing steps for connecting to the email client. */}
<Footer></Footer>
    </>
  )
};

export default Mail;
