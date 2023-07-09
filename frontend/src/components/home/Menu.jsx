import React from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"

const Menu = () => {
    const addToCartHandler = (ItemNum)=>{};

    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                <MenuCard 
                    ItemNum={1} 
                    burgerSrc={burger1} 
                    price={200} 
                    title={"Cheese Burger"} 
                    handler={addToCartHandler}/>
                <MenuCard 
                    ItemNum={2} 
                    burgerSrc={burger2} 
                    price={500} 
                    title={"Veg Burger"} 
                    handler={addToCartHandler}/>
                <MenuCard 
                    ItemNum={3} 
                    burgerSrc={burger3} 
                    price={300} 
                    title={"Cheese Burger With Frech Fries"} 
                    handler={addToCartHandler}/>
            </div>
        </section>
    )
}

export default Menu