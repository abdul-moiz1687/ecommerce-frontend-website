import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems,
    subtotal,
    removeFromCart,
    updateQuantity, } = useCart();

  const discount = subtotal * 0.2;
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const handleCheckout = () => {
  alert(
    `Checkout started. Your order contains ${cartItems.length} item(s) with a total of 
    $${total.toFixed( 2 )}.` );};
  return (
    <main className="cart-page">
      <div className="cart-breadcrumb">
        Home <span>›</span> Cart </div>

      <h1>YOUR CART</h1>

   {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <Link to="/casual">
            Continue Shopping
          </Link>
        </div>  ) : (

        <div className="cart-layout">
          <section className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img
                  src={item.product.image}
                  alt={item.product.title} />

        <div className="cart-item-info">
            <h3>{item.product.title}</h3>

                  <p>  Size: <strong>{item.size}</strong> </p>

 <p>   Color: <strong>{item.color}</strong>
                  </p>

                  <strong className="cart-item-price">
                    ${item.product.price} </strong>
                </div>

                <div className="cart-item-actions">
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }>  Remove</button>

                  <div className="quantity-control">
                    <button   onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )  }>    − </button>

                    <span>{item.quantity}</span>

            <button  onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1 ) }>+</button></div>
                </div>
              </article>
   ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

     <div>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div>
        <span>Discount</span>
              <strong className="discount">
                -${discount.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>Delivery Fee</span>
              <strong>${deliveryFee.toFixed(2)}</strong>
            </div>

        <hr />

            <div className="cart-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div className="promo-row">
              <input
                type="text"
                placeholder="Add promo code" />

              <button>Apply</button>
            </div>

            <button className="checkout-btn"   onClick={handleCheckout}>   Go to Checkout → </button>
          </aside>
        </div>
      )}
    </main>
  );}export default Cart;