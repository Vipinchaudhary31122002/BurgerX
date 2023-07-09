import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/home/Home"
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


// added the scss file
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/menu.scss"
import "./styles/footer.scss"

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
  </Router>
  ); 
}

export default App;
