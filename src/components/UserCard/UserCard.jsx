
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { updateUser, updateAvatar } from '../../redux/slices/userSlice';
import '../../styles/UserCard.scss';
import UserLogo from "../../images/user-profile/user-profile.png";
import UserUpload from "../../images/user-profile/user-upload.png";
import UserEdit from "../../images/user-profile/edit.png";
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import ModalEdit from '../ModalEdit/ModalEdit';
import PetsBlock from '../PetsBlock/PetsBlock';

const UserCard = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSave = (values) => {
    dispatch(updateUser({ uid: user.uid, name: values.name, email: values.email, phone: values.phone }));
    if (values.avatar) {
      dispatch(updateAvatar({ uid: user.uid, avatar: values.avatar }));
    }
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="user-card">
      <div className="user-updated">
        <img className="user-logo" src={UserLogo} alt="User Logo" />
        <div className="img-upload">
          <img className="user-upload" src={user?.avatar || UserUpload} alt="User Upload" />
        </div>
        <img className="user-edit" src={UserEdit} alt="User Edit" onClick={handleEditClick} />
      </div>
      {user ? (
        <Formik initialValues={{ name: user.name, email: user.email, phone: user.phone }} onSubmit={handleSave}>
          <Form>
            <div className="name-input-wrapper">
              <Field type="text" name="name" className="change-name-input" />
              <Field type="email" name="email" className="change-name-input" />
              <Field type="text" name="phone" placeholder="+380" className="change-name-input" />
            </div>
          </Form>
        </Formik>
      ) : (
        <p>Loading...</p>
      )}
      <div className='my-pets'>
        <h3>My pets</h3>
        <Button text={"Add pet +"} className="button-add" onClick={() => navigate('/add_pet')} />
        <PetsBlock />
      </div>
      <ModalEdit isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} user={user} onSave={handleSave} />
    </div>
  );
};

export default UserCard;
