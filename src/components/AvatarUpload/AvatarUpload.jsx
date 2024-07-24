import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserAvatar } from '../../redux/slices/userSlice'; 

const AvatarUpload = () => {
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setAvatar(reader.result);
      dispatch(updateUserAvatar(reader.result)); 
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="avatar-upload">
      <input type="file" accept="image/*" onChange={handleChange} />
      {avatar && <img src={avatar} alt="Avatar Preview" className="avatar-preview" />}
    </div>
  );
};

export default AvatarUpload;
