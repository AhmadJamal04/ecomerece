import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
    const[isOpen, setIsOpen]=useState<boolean>(false)
  const user = { id: "dsdsad", role: "admin" };

 const logOutHandler=()=>{
setIsOpen(false);
  }
  return (
    <nav className="header">
      <Link onClick={()=>setIsOpen(false)}  to={"/"}>Home</Link>
      <Link onClick={()=>setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={()=>setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?.id ? (
        <>
          <button onClick={()=>setIsOpen((prev)=>!prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={()=>setIsOpen(false)} to="/admin/dashboard">admin</Link>
              )}
              <Link onClick={()=>setIsOpen(false)} to={"/orders"}>orders</Link>
              <button onClick={logOutHandler}><FaSignOutAlt/></button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
