import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const Myorders = () => {
  const arr = [1, 2, 3, 4];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status ID</th>
              <th>Item Quantity</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sofjsofjsjosj</td>
                <td>Processing</td>
                <td>20</td>
                <td>₹ 2000</td>
                <td>Cash on delivery</td>
                <td>
                  <Link to={`/order/${"as"}`}><AiOutlineEye /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Myorders;
