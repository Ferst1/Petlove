
import React, { useLayoutEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Modal.scss";
import CatLeaving from "../../images/cat-leaving.png";
import Button from "../UI/Button/Button";
import "../../styles/ModalApproveAction.scss";

const ModalApproveAction = ({ isOpen, onClose, onConfirm }) => {
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirmClick = () => {
    onConfirm();
    onClose();
  };

  useLayoutEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="backdrop" onClick={handleBackdropClick}>
          <motion.div
            className="modal-window"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
              exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
            }}
          >
            <div className="modal-content">
              <button className="close-btn" onClick={onClose}>
                <IoCloseSharp size={"24px"} />
              </button>
              <img src={CatLeaving} alt="cat leaving" />
              <h3>Already leaving?</h3>
              <div className="buttons_modal">
                <Button text="Yes" onClick={handleConfirmClick} className="confirm-btn" />
                <Button text="Cancel" onClick={onClose} className="cancel-btn" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalApproveAction;
