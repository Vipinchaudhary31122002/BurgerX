import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
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
        <motion.div initial={{x:"-100vw", opacity: 0}} animate={{x:0, opacity:1}} transition={{ delay: 0.5 }}>
          <Link to="admin/myorders">Orders</Link>
        </motion.div>
        <motion.button initial={{x:"-100vw", opacity: 0}} animate={{x:0, opacity:1}} transition={{ delay: 0.3 }}>Log Out</motion.button>
      </main>
        </Modal.Body>
      </Modal>
    );
  }

const About = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
};

export default About;
