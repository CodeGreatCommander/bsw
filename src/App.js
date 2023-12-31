import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Faq from './pages/Faq';
import ContactPage from './pages/contactUs';
import Mentorship from './components/mentorship/mentorship';
import Events from './pages/eventPage';
import Mail from './pages/Mail';
import EmailClient from './components/emailClient/emailClient';
import Emergency from './components/emergency/emergency';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path="/mentorship" element={<Mentorship/>}/>
      <Route path="/faqs" element={<Faq/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/mail' element={<Mail/>}/>
      <Route path="/about_us/emailConfig" element={<EmailClient/>}/>
      <Route path="/about_us/emergency" element={<Emergency/>}/>
    </Routes>

  );
}

export default App;
