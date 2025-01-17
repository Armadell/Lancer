/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/order */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import useAxios from '../../Axios/useAxios';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './Payment.css';
import { useParams, useNavigate } from 'react-router-dom';

function Payment() {
  const [plan, setPlan] = useState([]);
  const { id } = useParams();
  console.log(id, 'idddd');
  const navigate = useNavigate();
  console.log(useSelector((state) => state));
  const user_id = useSelector((state) => state.freelancer.Freelancer.id);
  console.log(id, '1233');
  const api = useAxios();
  const handlePaymentSuccess = async (response) => {
    const datas = response;
    console.log(response, '123333');
    try {
      const response = await api.post(`razorpay_callback/`, {
        id,
        user_id,
        datas,
      });
      if (response.status === 200) {
        navigate('/posts');
        console.log(response, 'responsde');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const data = async () => {
    try {
      const response = await api.post(`packages/`, {
        id,
      });
      setPlan(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    data();
  }, []);
  // Function to load razorpay script for the display of razorpay payment SDK.
  function loadRazorpayScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
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

  // function will get called when clicked on the pay button.
  async function displayRazorpayPaymentSdk() {
    const res = await loadRazorpayScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. please check are you online?');
      return;
    }

    // creating a new order and sending order ID to backend
    const result = await axios.post(
      'http://127.0.0.1:8000/api/razorpay_order/',
      {
        order_id: 'Order-5152',
        user_id,
        price: plan.price,
      }
    );

    if (!result) {
      alert('Server error. please check are you onlin?');
      return;
    }

    // Getting the order details back
    const {
      merchantId = null,
      amount = null,
      currency = null,
      orderId = null,
    } = result.data;

    const options = {
      key: merchantId,
      amount: amount.toString(),
      currency,
      name: 'Razorpay Testing',
      description: 'Test Transaction',

      order_id: orderId,

      handler(response) {
        handlePaymentSuccess(response);
      },

      prefill: {
        name: 'Swapnil Pawar',
        email: 'swapnil@example.com',
        contact: '6282448593',
      },
      notes: {
        address: 'None',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="mb-auto m-10">
      <div className=" grid lg:grid-cols-4 container mx-auto">
        <div className=" lg:col-start-2 lg:col-span-2 p-4  mx-10 border shadow-2xl">
          <h1 className="text-2xl font-bold mb-8">ORDER DETAILS</h1>
          <hr />
          <div className="flex justify-between mt-5">
            <p className="text-sm font-semibold  ml-5">PLAN DETAILS </p>
            <p className="mr-5 text-sm ">{plan.title}</p>
          </div>
          <div className="flex justify-between mt-5 mb-5">
            <p className="text-sm font-semibold ml-5">TOTAL POST </p>
            <p className="mr-5 text-sm ">{plan.no_of_posts}</p>
          </div>
          <hr />
          <div className="flex justify-between mt-5 mb-5">
            <p className="text-sm font-semibold ml-5">TOTAL AMOUNT </p>
            <p className="mr-5 text-sm ">₹ {plan.price}</p>
          </div>
          <div className="flex space-x-2 justify-center ">
            <button
              type="button"
              onClick={displayRazorpayPaymentSdk}
              className="inline-block px-28 sm:px-48 mt-5 py-2.5 bg-yellow-400 text-black font-medium text-xs leading-tight uppercase rounded shadow-md  active:shadow-lg transition duration-150 ease-in-out"
            >
              RAZORPAY
            </button>
          </div>
        </div>
      </div>
      {/* <header className="App-header">

        <p>Razorpay Payments ! Try it Once </p>
        <button className="App-link" onClick={displayRazorpayPaymentSdk}>
            Pay Now To Test
        </button>
    </header> */}
    </div>
  );
}

export default Payment;
