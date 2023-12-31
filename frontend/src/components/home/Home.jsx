import React from 'react'
import { motion } from "framer-motion";
import Menu from "./Menu"
import Footer from "../layout/Footer";

const Home = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <>
            <section class="home">
                <div>
                    <motion.h1 {...options}>BurgerX</motion.h1>
                    <motion.p {...options} transition={{ delay: 0.2 }}>Give Yourself A Tasty Burger Meal Today</motion.p>
                </div>

                <motion.a href="#menu"
                    initial={{ y: "-100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                    Explore Menu
                </motion.a>
            </section>
            <Menu />
            <Footer/>
        </>
    );
}

export default Home