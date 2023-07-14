import Header from "../components/navbar/header";
import Latestupdates from "../components/home/templates/latestupdates"
import Footer from "../components/footer/footer"
import BoardUnits from "../components/home/templates/boardunits"
function Home() {
    return (
        <>
            <Header /><Latestupdates /><BoardUnits /><Footer />
        </>);
}
export default Home;