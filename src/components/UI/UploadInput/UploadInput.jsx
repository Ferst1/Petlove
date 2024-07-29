import React from 'react';
import UploadSvg from '/images/upload-url.svg';
import '../../../styles/AddPetForm.scss';
import Button from '../Button/Button';

const UploadInput = ({ handleFileChange, handleAvatarUpload }) => {
  return (
    <div className="form-group">
      <input 
        type="text"
        placeholder='Enter URL'
        className="url-input"
      />
      <Button 
        type="button"
        text={'Upload photo'} 
        className='button-upload'
        onClick={handleAvatarUpload}
      >
        <img src={UploadSvg} alt="Upload" className="button-icon" />
      </Button>
      <input
        type="file"
        name="file"
        onChange={handleFileChange}
        className="select-avatar-input"
      />
    </div>
  );
}

export default UploadInput;
