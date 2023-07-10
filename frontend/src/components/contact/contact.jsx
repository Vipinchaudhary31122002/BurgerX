import React from 'react'
import {motion} from "framer-motion"

const contact = () => {
  return <section class="contact">
    <motion.form>
        <h2>Contact Us</h2>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email'/>
        <textarea placeholder='Enter you message....' cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
    </motion.form>
    <motion.div class="FormBorder">

    </motion.div>
  </section>
}

export default contact