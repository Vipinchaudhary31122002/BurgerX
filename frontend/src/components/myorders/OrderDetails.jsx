import React from "react";

const OrderDetails = () => {
  return (
    <section className="OrderDetails">
      <main>
        <h1>Order Details</h1>
        {/* delivery details */}
        <div>
          <h1>Delivery Details</h1>
          <p>
            <b>Address</b>
            {"sjlsjgsuosno 21759 s205802"}
          </p>
        </div>
        {/* Contact Details */}
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"sjlsjgsuosno"}
          </p>
          <p>
            <b>Phone</b>
            {"09752058209"}
          </p>
        </div>
        {/* Order Details */}
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Preparing"}
          </p>
          <p>
            <b>Placed At</b>
            {"29527592"}
          </p>
          <p>
            <b>Delivered At</b>
            {"29527592"}
          </p>
        </div>
        {/* Payment Status */}
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"online"}
          </p>
          <p>
            <b>Payment Reference</b>
            {"29527592"}
          </p>
          <p>
            <b>Payed At</b>
            {"29527592"}
          </p>
        </div>
        {/* Amount Details */}
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>
            ₹{26262}
          </p>
          <p>
            <b>Shipping Charges</b>
            ₹{200}
          </p>
          <p>
            <b>Tax Charges</b>
            ₹{26}
          </p>
          <p>
            <b>Total Amount</b>
            ₹{2276}
          </p>
          
        </div>
      </main>
    </section>
  );
};

export default OrderDetails;
