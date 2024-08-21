import { BrowserRouter, Routes, Route } from "react-router-dom"

//Importing Pages and Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import InputSkill from "./pages/InputSkill";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path = "/"
            element = {<Home />}
          />
          <Route
            path = "/InputSkill"
            element = {<InputSkill />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
