import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const _DEV_ = document.domain === "localhost";

function Payment() {
  const [name, setName] = useState("Meghna");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: _DEV_ ? "rzp_test_k9p4wrvkFIdNW9" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: " Travel Trek",
      description: "Secure Payment Gateway",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        alert("Booking Succesfull");
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "xyz@gmail.com",
        phone_number: "9112345678",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      

        <button
          className="App-link"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
          style={{backgroundColor:"#ff5757" , color:"black", borderRadius:"4px", height:"2rem",borderColor:"#ff5757" }}
        >
          Book This Hotel
        </button>
      
    </div>
  );
}

export default Payment;