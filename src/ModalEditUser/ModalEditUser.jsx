// components/ModalEditUser/ModalEditUser.jsx
import React from 'react';
import '../../styles/ModalEditUser.scss';

const ModalEditUser = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit User Information</h2>
        {/* Здесь будет форма для редактирования информации о пользователе */}
      </div>
    </div>
  );
};

export default ModalEditUser;
