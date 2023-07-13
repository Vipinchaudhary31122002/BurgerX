import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cart from "./components/Cart/Cart";


// added the scss file
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer/>
  </Router>
  ); 
}

export default App;
