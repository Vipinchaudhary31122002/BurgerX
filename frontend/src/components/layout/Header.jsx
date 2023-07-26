import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Modal from "react-bootstrap/Modal";
import me from "../../assets/founder.jpg";

//   profile component
function ModalComponent(props) {
  if (props.value === "login") {
    return (
      <>
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <main>
              <motion.button initial={{ y: "-100vh" }} animate={{ y: 0 }}>
                Login with Google
                <FcGoogle />
              </motion.button>
            </main>
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    const options = {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    };
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <main>
            <motion.img src={me} alt="User" {...options} />
            <motion.h5 {...options} transition={{ delay: 0.3 }}>
              Abhimanyu
            </motion.h5>
            <motion.div {...options} transition={{ delay: 0.5 }}>
              <Link to="admin/dashboard">DashBoard</Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="myorders">Orders</Link>
            </motion.div>
            <motion.button
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Log Out
            </motion.button>
          </main>
        </Modal.Body>
      </Modal>
    );
  }
}

// header component
const Header = ({ isAuthenticated = false }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <span>
            <FiShoppingCart />
          </span>
        </Link>
        <Link>
          {isAuthenticated ? (
            <span>
              <FaUser onClick={() => setModalShow(true)} />
              <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </span>
          ) : (
            <span>
              <FiLogIn onClick={() => setModalShow(true)} />
              <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                value="login"
              />
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
