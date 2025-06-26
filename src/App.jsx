// REACT IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGES
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Template from "./pages/Template";
import Calculation from "./pages/Calculation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/calculation/:id" element={<Calculation />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;  
