import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        <div style={styles.info}>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.price}>৳{product.price.toFixed(2)}</p>
          <p style={styles.description}>{product.description}</p>
          <button style={styles.button} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
  },
  container: {
    display: "flex",
    gap: "2rem",
    maxWidth: "1000px",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "500px",
    objectFit: "contain",
    borderRadius: "10px",
  },
  info: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  price: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#e53935",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProductDetail;
