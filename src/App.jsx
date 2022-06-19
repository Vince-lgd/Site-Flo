import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portefolio from "./components/Portefolio";
import Cars from "./components/Cars";
import Hotels from "./components/Hotels";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portefolio" element={<Portefolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/automobile" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
