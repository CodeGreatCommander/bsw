import './navbar.css'
import Carousel from './carousel';
import Navbar from './navbar';

export default function Header() {
  return (<div className="navigation-bar">
    <Navbar/>
    <Carousel/>
    </div>
  );
}
