import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Products</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "1rem 2rem",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default Home;
