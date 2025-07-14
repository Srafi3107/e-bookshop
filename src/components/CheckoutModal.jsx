import React from "react";

const CheckoutModal = ({ onClose, onConfirm }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Confirm Checkout</h2>
        <p>Are you sure you want to complete your purchase?</p>
        <div style={styles.buttons}>
          <button onClick={onConfirm} style={styles.confirmBtn}>
            Confirm
          </button>
          <button onClick={onClose} style={styles.cancelBtn}>
            Cancel
          </button>
        </div>
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
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
  },
  buttons: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "space-around",
  },
  confirmBtn: {
    backgroundColor: "#28a745",
    border: "none",
    padding: "0.5rem 1rem",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
  },
  cancelBtn: {
    backgroundColor: "#dc3545",
    border: "none",
    padding: "0.5rem 1rem",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default CheckoutModal;
