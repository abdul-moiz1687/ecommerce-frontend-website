import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../../context/CartContext";
import "./Cart.css";

const API_URL = "https://ecommerce-backend-nine-phi-57.vercel.app";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const [checkoutLoading, setCheckoutLoading] =
    useState(false);

  const [checkoutMessage, setCheckoutMessage] =
    useState("");

  const [checkoutError, setCheckoutError] =
    useState("");

  const discount = subtotal * 0.2;

  const deliveryFee =
    subtotal > 0 ? 15 : 0;

  const total =
    subtotal -
    discount +
    deliveryFee;

  const handleCheckout = async () => {
    setCheckoutMessage("");
    setCheckoutError("");

    const token =
      localStorage.getItem("token");

    if (!token) {
      alert(
        "Please login before placing an order."
      );

      navigate("/login");

      return;
    }

    if (cartItems.length === 0) {
      setCheckoutError(
        "Your cart is empty."
      );

      return;
    }

    try {
      setCheckoutLoading(true);

      const orderItems = cartItems.map(
        (item) => ({
          productId:
            item.product.id,

          title:
            item.product.title,

          image:
            item.product.image || "",

          price:
            Number(item.product.price),

          quantity:
            item.quantity,
        })
      );

      const response = await fetch(
        `${API_URL}/api/orders`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({
            items: orderItems,

            totalAmount:
              Number(total.toFixed(2)),

            shippingAddress:
              "Karachi, Pakistan",
          }),
        }
      );

      const data =
        await response.json();

      if (response.status === 401) {
        localStorage.removeItem(
          "token"
        );

        localStorage.removeItem(
          "user"
        );

        alert(
          "Your session has expired. Please login again."
        );

        navigate("/login");

        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to place order"
        );
      }

      clearCart();

      setCheckoutMessage(
        "Order placed successfully!"
      );
    } catch (error) {
      console.error(
        "Checkout error:",
        error
      );

      setCheckoutError(
        error.message
      );
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <main className="cart-page">

      <div className="cart-breadcrumb">
        Home <span>›</span> Cart
      </div>

      <h1>YOUR CART</h1>

      {checkoutMessage && (
        <div className="checkout-success">
          {checkoutMessage}
        </div>
      )}

      {checkoutError && (
        <div className="checkout-error">
          {checkoutError}
        </div>
      )}

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <h2>
            {checkoutMessage
              ? "Order placed successfully"
              : "Your cart is empty"}
          </h2>

          <Link to="/casual">
            Continue Shopping
          </Link>

        </div>

      ) : (

        <div className="cart-layout">

          {/* CART ITEMS */}

          <section className="cart-items">

            {cartItems.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.product.image}
                  alt={item.product.title}
                />

                <div className="cart-item-info">

                  <h3>
                    {item.product.title}
                  </h3>

                  <p>
                    Size:{" "}
                    <strong>
                      {item.size}
                    </strong>
                  </p>

                  <p>
                    Color:{" "}
                    <strong>
                      {item.color}
                    </strong>
                  </p>

                  <strong className="cart-item-price">
                    ${item.product.price}
                  </strong>

                </div>

                <div className="cart-item-actions">

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                  <div className="quantity-control">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </section>

          {/* SUMMARY */}

          <aside className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <div>
              <span>
                Subtotal
              </span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>
                Discount
              </span>

              <strong className="discount">
                -${discount.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>
                Delivery Fee
              </span>

              <strong>
                ${deliveryFee.toFixed(2)}
              </strong>
            </div>

            <hr />

            <div className="cart-total">

              <span>
                Total
              </span>

              <strong>
                ${total.toFixed(2)}
              </strong>

            </div>

            <div className="promo-row">

              <input
                type="text"
                placeholder="Add promo code"
              />

              <button>
                Apply
              </button>

            </div>

            <button
              className="checkout-btn"
              onClick={
                handleCheckout
              }
              disabled={
                checkoutLoading
              }
            >
              {checkoutLoading
                ? "Placing Order..."
                : "Go to Checkout →"}
            </button>

          </aside>

        </div>

      )}

    </main>
  );
}

export default Cart;