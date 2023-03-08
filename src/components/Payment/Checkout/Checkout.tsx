import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { AiOutlineCreditCard } from "react-icons/ai";

let stripePromise: any;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51KcT8XLR0CNPqZD3WW6PSCuhCUOTvGxoTi16mCslMhK2m2rEzeTeoALpQjh2cK5UWSf7HN8Bg3O6V6fqQfk3fP8a00AhQcP7pe"
    );
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MjLLuLR0CNPqZD3O5tX1Xbh",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success?price=${item.price}`,
    cancelUrl: `${window.location.origin}/cancel?price=${item.price}`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Become a Pro</h1>
      <p>You need to become a pro to add more playlists!</p>
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            <span className="">
              <AiOutlineCreditCard />
            </span>
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
