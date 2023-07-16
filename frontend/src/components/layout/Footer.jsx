import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return <footer>
    <div>
      <h2> BurgerX </h2>
      <p>We are trying to give you the best taste possible.</p>
      <br />
      <strong>All right received to BurgerX</strong>
    </div>
    <aside>
      <h4>Follow Us</h4>
      <span><AiFillGithub /></span>
      <span><AiFillInstagram /></span>
      <span><AiFillYoutube /></span>
    </aside>
  </footer>

};

export default Footer