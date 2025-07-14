import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
      </Link>
      <p>৳{product.price.toFixed(2)}</p>
      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default ProductCard;
