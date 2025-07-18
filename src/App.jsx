// REACT IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Template from "./pages/Template";
import Calculation from "./pages/Calculation";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import InDevelopment from "./pages/InDevelopment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/calculation/:id" element={<Calculation />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signup" element={<InDevelopment />} />
        <Route path="/signin" element={<InDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
