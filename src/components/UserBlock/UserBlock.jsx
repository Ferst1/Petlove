/// components/UserBlock/UserBlock.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditUserBtn from '../EditUserBtn/EditUserBtn';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import '../../styles/UserBlock.scss';

const UserBlock = () => {
  const user = useSelector((state) => state.user.user);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div className="user-block">
      {user.avatar ? (
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
      ) : (
        <EditUserBtn onClick={handleEditClick} />
      )}
      <div className="user-info">
        <span className="user-name">{user.name}</span>
        <span className="user-email">{user.email}</span>
        <span className="user-phone">{user.phone}</span>
      </div>
      {isEditModalOpen && <ModalEditUser onClose={handleCloseModal} />}
    </div>
  );
};

export default UserBlock;
