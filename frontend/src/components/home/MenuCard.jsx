import React from 'react'
import { motion } from "framer-motion"

const MenuCard = ({ ItemNum, burgerSrc, price, title, handler }) => {
    return <motion.div className="menuCard">
        <div>Item {ItemNum}</div>
        <main>
            <img src={burgerSrc} alt={ItemNum} />
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={() => handler(ItemNum)}>Buy Now</button>
        </main>
    </motion.div>
};

export default MenuCard;