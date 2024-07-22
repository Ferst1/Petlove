import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { updateUser } from '../../redux/slices/userSlice';
import '../../styles/UserCard.scss';
import UserLogo from "../../assets/images/user-profile/user-profile.png";
import UserUpload from "../../assets/images/user-profile/user-upload.png";
import UserEdit from "../../assets/images/user-profile/edit.png";
import Button from '../UI/Button/Button';

const UserCard = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(user?.avatar || 'default-avatar.png');
  const [username, setUsername] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const fileInputRef = useRef(null);

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

  const handleSubmit = (values) => {
    dispatch(updateUser({ ...user, name: values.name, email: values.email, phone: values.phone, avatar }));
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="user-card">
      <div className="user-updated">
        <img
          className="user-logo"
          src={UserLogo} alt="User Logo"
        />
        <div className="img-upload">
          <img className="user-upload" src={UserUpload} alt="User Upload" />
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
        <img className="user-edit" src={UserEdit} alt="User Edit" />
      </div>
      {user ? (
        <>
          <Formik initialValues={{ name: username, email: email, phone: phone }} onSubmit={handleSubmit}>
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
  <Button text={"Add pet +"} className="button-add"/> 
</div>

    </div>
  );
};


export default UserCard;
