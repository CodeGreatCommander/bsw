import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/navbar/header';
import Footer from './components/footer/footer';
import Latestupdates from './components/home/templates/latestupdates';
import BoardUnits from './components/home/templates/boardunits';

function App() {
  return (
    <BrowserRouter><Header/><Latestupdates/><BoardUnits/><Footer/>
    </BrowserRouter>
  );
}

export default App;
