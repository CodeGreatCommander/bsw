import FaqComponent from "../components/FAQ/faqComponent";
// import Header from "../components/navbar/header";
import Navbar from "../components/navbar/navbar"
import PageHeading from "../components/headingWithBGpic/pageHeading";
const Faq = () =>{
    return (
        <>
        <Navbar />
        <PageHeading />
        
        <FaqComponent />
        </>
    )
}

export default Faq;