import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/contact";
import Header from "./components/layout/Header";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import About from "./components/about/About";
import Myorders from "./components/myorders/Myorders";
import OrderDetails from "./components/myorders/OrderDetails"
import 'bootstrap/dist/css/bootstrap.min.css';

// added the scss file
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/about.scss"
import "./styles/table.scss"
import "./styles/orderdetails.scss"

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
