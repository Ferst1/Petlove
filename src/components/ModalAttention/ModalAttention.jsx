import React, { useLayoutEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/Modal.scss";
import "../../styles/ModalAttention.scss";
import AvtAttention from "../../../public/images/avatar-atantion.png";
import { AuthNav } from "../../components/AuthNav/AuthNav";

const ModalAttention = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

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

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/registration");
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
            data-aos="fade-up"
            data-aos-delay="100"
            className="modal-window"
          >
            <div className="modal-content">
              <button className="close-btn" onClick={onClose}>
                <IoCloseSharp size={"24px"} />
              </button>
              <img src={AvtAttention} alt="avatar pet" />
              <h3>Attention</h3>
              <p>
                We would like to remind you that certain functionality is
                available only to authorized users. If you have an account,
                please log in with your credentials. If you do not already have
                an account, you must register to access these features.
              </p>
              <div className="buttons_modal">
                <AuthNav />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalAttention;
