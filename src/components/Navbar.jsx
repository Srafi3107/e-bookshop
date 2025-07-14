import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { toggleCart, cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={styles.navbar}>
      <div style={styles.leftGroup}>
        <div style={styles.logo}>E-BookShop</div>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
      </div>
      <button onClick={toggleCart} style={styles.cartBtn}>
        Cart ({totalQuantity})
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftGroup: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  cartBtn: {
    backgroundColor: "#555",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Navbar;
