import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type cartItemsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};

const CartItem = ({
  productId,
  photo,
  name,
  price,
  stock,
  quantity,
}: cartItemsProps) => {
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>
          <b>${price}</b>
        </span>
      </article>

      <div>
        <button>
          <FaPlus />
        </button>
        <p>{quantity}</p>
        <button>
          <FaMinus />
        </button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
