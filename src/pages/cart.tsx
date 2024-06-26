import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "saasdsfs",
    name: "mackbook",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJmdPJ1y_djkDQ0eody5P66aSNqxK0ZK0KtlpkPgzmw&s",
    price: 400,
    stock: 0,
    quantity: 20,
  },
  {
    productId: "saasdsfs",
    name: "mackbook",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJmdPJ1y_djkDQ0eody5P66aSNqxK0ZK0KtlpkPgzmw&s",
    price: 400,
    stock: 0,
    quantity: 20,
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = tax + subtotal + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length>0 ? cartItems.map((i, index) => (
          <CartItem
            productId={i.productId}
            name={i.name}
            price={i.price}
            stock={i.stock}
            quantity={i.quantity}
            photo={i.photo}
            key={index}
          />
        )):<h1>no item added</h1>}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="enter coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
          {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
