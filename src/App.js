import "./App.css";
import Home from "./pages/Home";
import Faq from "./pages/Faq"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/faqs" element={<Faq/>}></Route>
    </Routes>
  );
}

export default App;
