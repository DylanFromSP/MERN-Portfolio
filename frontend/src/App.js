import { BrowserRouter, Routes, Route } from "react-router-dom"

//Importing Pages and Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Input from "./pages/Input";

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
            path = "/Input"
            element = {<Input />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
