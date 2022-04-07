import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Service from "./pages/Service"
import About from "./pages/About"
import News from "./pages/News"
import Contact from "./pages/Contact"
import Constructions from "./pages/Constructions"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exec path="/" element={<Home />} />
          <Route exec path="/services" element={<Services />} />
          <Route exec path="/service/:id" element={<Service />} />
          <Route exec path="/about" element={<About />} />
          <Route exec path="/news" element={<News />} />
          <Route exec path="/contact" element={<Contact />} />
          <Route exec path="/constructions" element={<Constructions />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
