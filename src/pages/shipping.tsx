import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  const navigate = useNavigate();
  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address</h1>

        <input required type="text" placeholder="Address" name="address" value={shippingInfo.address} />

        <input required type="text" placeholder="City" name="city" value={shippingInfo.city}/>

        <input required type="text" placeholder="State" name="state" value={shippingInfo.state}/>

        <select name="country" required value={shippingInfo.country}>
          <option value="">Choose Country</option>
          <option value="india">Pakistan</option>
          <option value="india">India</option>
          <option value="india">Afghanistan</option>
        </select>

        <input required type="number" placeholder="Pin Code" name="pinCode" value={shippingInfo.pinCode} />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
