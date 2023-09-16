import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import ColorPicker from "./ColorsMap";
import { DarkContext } from "../context/ThemeContext";

const Modal = ({ setIsOpen }) => {
  const { resetAccentColor } = useContext(DarkContext);
  return (
    <>
      {/* <div className={styles.darkBG} onClick={() => setIsOpen(false)} /> */}
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Customise Your Accent</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <ColorPicker />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={resetAccentColor}
                >
                Reset
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
