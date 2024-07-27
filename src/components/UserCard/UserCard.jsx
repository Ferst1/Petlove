
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { updateUser } from '../../redux/slices/userSlice';
import '../../styles/UserCard.scss';
import UserLogo from "/images/user-profile/user-profile.png";
import UserUpload from "/images/user-profile/user-upload.png";
import UserEdit from "/images/user-profile/edit.png";
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import ModalEdit from '../ModalEdit/ModalEdit'; 

const UserCard = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(user?.avatar || UserLogo);
  const [uploadAvatar, setUploadAvatar] = useState(user?.avatar || UserUpload);
  const [username, setUsername] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

  const handleSave = (values) => {
    setAvatar(UserLogo);
    setUploadAvatar(values.avatar || UserUpload);
    setUsername(values.name);
    setEmail(values.email);
    setPhone(values.phone);
    dispatch(updateUser({ ...user, name: values.name, email: values.email, phone: values.phone, avatar: values.avatar }));
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const navigate = useNavigate();

  const handleAddPetClick = () => {
    navigate('/add_pet');
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="user-card">
      <div className="user-updated">
        <img className="user-logo" src={avatar} alt="User Logo" />
        <div className="img-upload">
          <img className="user-upload" src={uploadAvatar} alt="User Upload" />
          <a onClick={handleUploadClick}>Upload photo</a>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="select-avatar-input"
            style={{ display: 'none' }}
          />
        </div>
        <img className="user-edit" src={UserEdit} alt="User Edit" onClick={handleEditClick} />
      </div>
      {user ? (
        <>
          <Formik initialValues={{ name: username, email: email, phone: phone }} onSubmit={handleSave}>
            <Form>
              <div className="name-input-wrapper">
                <Field
                  type="text"
                  name="name"
                  value={username}
                  onChange={handleInputChange}
                  className="change-name-input"
                />
                <Field
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="change-name-input"
                />
                <Field
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="+380"
                  onChange={handleInputChange}
                  className="change-name-input"
                />
              </div>
            </Form>
          </Formik>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className='my-pets'>
        <h3>My pets</h3>
        <Button text={"Add pet +"} className="button-add" onClick={handleAddPetClick} />
      </div>
      <ModalEdit isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} user={user} onSave={handleSave} />
    </div>
  );
};

export default UserCard;
