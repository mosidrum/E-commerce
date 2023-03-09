import { BrowserRouter, Route, Routes } from "react-router-dom";
// Js files from components
import {Footer, Header} from "./components"
//Js files from pages
import {Home, Contact} from "./pages"




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/contact" element = {<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
