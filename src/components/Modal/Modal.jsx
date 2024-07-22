import React, { useLayoutEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Modal.scss";
import Button from "../UI/Button/Button";

const Modal = ({ children, isOpen, onClose, pet }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: {
      opacity: 1,
      y: "50vh",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

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
              <div className="pet-info">
                <button className="close-btn" onClick={onClose}>
                  <IoCloseSharp size={"24px"} />
                </button>
                <img 
                data-aos="zoom-in"
                data-aos-duration="400"
                data-ous-once="true"
                src={pet.imgURL} alt={pet.title} />
                <p className="category_modal">{pet.category}</p>
                <h2
                data-aos="zoom-in"
                data-aos-duration="500"
                data-ous-once="true"
                >{pet.title}</h2>
                <div className="info_item">
                <p><div className="lable">Name:</div> {pet.name}</p>
                <p><div className="lable">Birthday:</div> {pet.name}</p>
                <p><div className="lable">Sex:</div> {pet.sex}</p>
                <p><div className="lable">Species:</div> {pet.species}</p> 

                </div>
                <p>{pet.comment}</p>
                <div className="buttons_modal">
                <Button text={"Add to"}/>
                  <Button text={"Contact"}/>
                </div>
                  
                
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
