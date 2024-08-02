
import React, { useLayoutEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Modal.scss";
import Button from '../UI/Button/Button';
import UploadInput from '../UI/UploadInput/UploadInput';
import UserUpload from "../../images/user-profile/user-upload.png";

const ModalEdit = ({ isOpen, onClose, user, onSave }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      avatar: user?.avatar || UserUpload,
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    }
  });

  const [avatar, setAvatar] = useState(user?.avatar || UserUpload);
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
        setValue('avatar', reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = () => {
    fileInputRef.current.click();
  };

  const onSubmit = (data) => {
    onSave({ ...data, avatar });
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
              <img src={avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
              <div className="img-upload">
                <UploadInput register={register} handleFileChange={handleFileChange} handleAvatarUpload={handleAvatarUpload} />
                <input
                  type="file"
                  name="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="select-avatar-input"
                  style={{ display: 'none' }}
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='name' {...register('name')} placeholder='Name' className="full-width-input" />
                <input type='email' name='email' {...register('email')} placeholder='E-mail' className="full-width-input" />
                <input type='tel' name='phone' {...register('phone')} placeholder='+380 ' className="full-width-input" />
                <div className="buttons_modal">
                  <Button text="Save" type="submit" />
                  <Button text="Cancel" onClick={onClose} />
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalEdit;
