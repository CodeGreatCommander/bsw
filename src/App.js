import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Faq from './pages/Faq';
import ContactPage from './pages/contactUs';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path="/faqs" element={<Faq/>}></Route>
    </Routes>
     
  );
}

export default App;
