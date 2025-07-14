import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isCartOpen,
    toggleCart,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  if (!isCartOpen) return null;

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Order placed successfully!");
    setShowCheckout(false);
    clearCart();
    toggleCart();
  };

  return (
    <div style={styles.overlay} onClick={toggleCart}>
      <div style={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        <div style={styles.content}>
          {/* Header */}
          <div style={styles.header}>
            <button style={styles.closeBtn} onClick={toggleCart}>
              ✖
            </button>
            <h2 style={styles.heading}>Your Cart</h2>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p style={styles.empty}>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.item}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.itemImage}
                    />
                  )}
                  <div style={styles.itemDetails}>
                    <div style={styles.itemTop}>
                      <strong>{item.name}</strong>
                      <span style={styles.itemPrice}>
                        ৳
                        {(item.price * item.quantity).toLocaleString(
                          undefined,
                          { minimumFractionDigits: 2 }
                        )}
                      </span>
                    </div>
                    <div style={styles.qtyControls}>
                      <button
                        style={styles.qtyBtn}
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span style={styles.qtyNumber}>{item.quantity}</span>
                      <button
                        style={styles.qtyBtn}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <hr style={styles.divider} />
              <div style={styles.total}>
                Total:{" "}
                <strong>
                  ৳
                  {totalPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={styles.footer}>
            <button
              style={styles.checkoutBtn}
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
            <button style={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckout && (
          <div
            style={styles.modalOverlay}
            onClick={() => setShowCheckout(false)}
          >
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
              <h2>Checkout</h2>
              <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label>Address:</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" style={styles.submitBtn}>
                  Place Order
                </button>
                <button
                  type="button"
                  style={styles.cancelBtn}
                  onClick={() => setShowCheckout(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  sidebar: {
    backgroundColor: "#fff",
    width: "360px",
    padding: "1rem",
    height: "100%",
    overflowY: "auto",
    boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  content: {
    flex: 1,
    overflowY: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  closeBtn: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    marginRight: "0.5rem",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  empty: {
    textAlign: "center",
    marginTop: "2rem",
    color: "#777",
  },
  item: {
    display: "flex",
    marginBottom: "1rem",
    gap: "0.75rem",
    alignItems: "center",
  },
  itemImage: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  itemDetails: {
    flex: 1,
  },
  itemTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  itemPrice: {
    fontWeight: "bold",
    color: "#333",
  },
  qtyControls: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  qtyBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    width: "28px",
    height: "28px",
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  qtyNumber: {
    minWidth: "24px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  removeBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "4px 8px",
    cursor: "pointer",
  },
  total: {
    fontSize: "1.2rem",
    textAlign: "right",
    fontWeight: "bold",
    margin: "1rem 0",
  },
  divider: {
    border: "0",
    height: "1px",
    backgroundColor: "#ddd",
    margin: "1rem 0",
  },
  footer: {
    padding: "1rem",
    borderTop: "1px solid #ddd",
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  checkoutBtn: {
    padding: "1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  clearBtn: {
    padding: "1rem",
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    width: "400px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  inputGroup: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  submitBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.6rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "0.5rem",
  },
  cancelBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "0.6rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
};

export default CartSidebar;
