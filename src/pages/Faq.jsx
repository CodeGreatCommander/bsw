import FaqComponent from "../components/FAQ/faqComponent";
// import Header from "../components/navbar/header";
import Navbar from "../components/navbar/navbar"
import PageHeading from "../components/headingWithBGpic/pageHeading";
import Footer from "../components/footer/footer";
const Faq = () =>{
    return (
        <>
        <Navbar />
        <PageHeading heading="FAQs" />
        <FaqComponent />
        <Footer/>
        </>
    )
}

export default Faq;