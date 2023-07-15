import Footer from "../footer/footer";
import Header from "../navbar/header";
import BoardUnits from "./templates/boardunits";
import Latestupdates from "./templates/latestupdates";
import AboutUs from "./templates/text";
import './home.css'
export default function Home(){
    return(<>
            <Header/>
            <div className="home">
                <div className="aboutus">
                    <AboutUs/>
                </div>
                <div className="latestupdates align">
                    <Latestupdates/>
                </div>
            </div>
            <BoardUnits/>
            <Footer/>
        </>
    )
}