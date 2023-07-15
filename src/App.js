import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Faq from './pages/Faq';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/faqs" element={<Faq/>}></Route>
    </Routes>
     
  );
}

export default App;
