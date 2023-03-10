import { BrowserRouter, Route, Routes } from "react-router-dom";
// Js files from components
import {Footer, Header} from "./components"
//Js files from pages
import {Home, Contact, Login, Reset, Register} from "./pages"




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/register" element = {<Register />} />
            <Route path="/reset" element = {<Reset />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
