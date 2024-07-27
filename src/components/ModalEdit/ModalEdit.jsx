

import React, { useLayoutEffect, useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Modal.scss";
import Button from '../UI/Button/Button';
import UploadInput from '../UI/UploadInput/UploadInput';
import UserUpload from "/images/user-profile/user-upload.png";
const ModalEdit = ({ isOpen, onClose, user, onSave }) => {
  const [avatar, setAvatar] = useState(user?.avatar || UserUpload);
  const [username, setUsername] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const fileInputRef = useRef(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = () => {
    onSave({ avatar, name: username, email, phone });
    onClose();
  };

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
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
              <h3>Edit information</h3>
              <img src={avatar} alt={`${username}'s avatar`} className="user-avatar" />
              <div className="img-upload">
                <UploadInput handleFileChange={handleFileChange} handleAvatarUpload={handleAvatarUpload} />
                <input
                  type="file"
                  name="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="select-avatar-input"
                  style={{ display: 'none' }}
                />
              </div>
              <input type='text' name='name' value={username} onChange={handleInputChange} placeholder='Name' className="full-width-input" />
              <input type='email' name='email' value={email} onChange={handleInputChange} placeholder='E-mail' className="full-width-input" />
              <input type='tel' name='phone' value={phone} onChange={handleInputChange} placeholder='+380 ' className="full-width-input" />
              <div className="buttons_modal">
                <Button text="Save" onClick={handleSubmit} />
                <Button text="Cancel" onClick={onClose} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalEdit;
