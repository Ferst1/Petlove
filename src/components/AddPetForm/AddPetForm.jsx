
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/AddPetForm.scss';
import Button from '../UI/Button/Button';
import DatePicker from '../DatePicker/DatePicker';
import TypeSelect from '../UI/TypeSelect/TypeSelect';
import ReactSelectStyles from '../../utils/ReactSelectStyles';
import { addPetToFirestore } from '../../redux/slices/petsSlice';

import Femali from "/images/female.png";
import Male from "/images/male.png";
import Multiple from "/images/multiple.png";

import AvatarPets from "/images/avatar-pets.png";
import UploadInput from '../UI/UploadInput/UploadInput';

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(AvatarPets);
  const { token } = useSelector((state) => state.user); 

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    name: Yup.string().required('Name is required'),
    imgUrl: Yup.string()
      .url('Invalid URL format')
      .required('Image URL is required'),
    species: Yup.string().required('Species is required'),
    dateOfBirth: Yup.string()
      .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Birthday must be in MM.DD.YYYY format')
      .required('Birthday is required'),
    sex: Yup.string().required('Sex is required')
  });

  const { register, handleSubmit, control, setValue, getValues, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      dateOfBirth: '00.00.0000',
      sex: ''
    }
  });

  const onSubmit = async (data) => {
    console.log("Submitting form with data:", data);
    try {
      await dispatch(addPetToFirestore({ ...data, sex: selectedGender })).unwrap();
      toast.success('Pet added successfully!', {
        onClose: () => navigate('/profile'),
      });
    } catch (error) {
      console.error("Error adding pet:", error);
      toast.error(`Error adding pet: ${error}`);
    }
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setValue('sex', gender);
  };

  const handleAvatarUpload = () => {
    const imgUrl = getValues('imgUrl');
    const validImageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'];
    const isValidUrl = validImageExtensions.some(ext => imgUrl.endsWith(ext));
    
    if (imgUrl && isValidUrl) {
      setAvatarUrl(imgUrl);
    } else {
      alert('Please enter a valid URL.');
    }
  };

  const handleBackClick = () => {
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-pet-form">
      <ToastContainer />
      <div className="pets-title">
        <h2>Add my pet /</h2>
        <p>Personal details</p>
      </div>
      <div className="button-gender">
        <img src={Femali} alt="female gender" onClick={() => handleGenderClick('female')} />
        <img src={Male} alt="male gender" onClick={() => handleGenderClick('male')} />
        <img src={Multiple} alt="multiple gender" onClick={() => handleGenderClick('multiple')} />
      </div>
      <div className="avatar">
        <img src={avatarUrl} alt="avatar pet" className="avatar-pet" />
      </div>

      <UploadInput register={register} handleAvatarUpload={handleAvatarUpload} />  

      {errors.imgUrl && <p>{errors.imgUrl.message}</p>}
      <div className={`form-group full-width ${errors.title ? 'error' : isValid ? 'success' : ''}`}>
        <input type="text" {...register('title')} placeholder='Title' />
      </div>
      {errors.title && <p>{errors.title.message}</p>}
      <div className={`form-group full-width ${errors.name ? 'error' : isValid ? 'success' : ''}`}>
        <input type="text" {...register('name')} placeholder='Pet’s Name' />
      </div>
      {errors.name && <p>{errors.name.message}</p>}
      <div className="form-row">
        <div className={`form-group ${errors.dateOfBirth ? 'error' : isValid ? 'success' : ''}`}>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                placeholder="Date of birth"
                error={errors.dateOfBirth ? 'true' : 'false'}
                success={field.value && !errors.dateOfBirth ? 'true' : 'false'}
              />
            )}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
        </div>
        <div className={`form-group ${errors.species ? 'error' : isValid ? 'success' : ''}`}>
          <Controller
            name="species"
            control={control}
            render={({ field }) => (
              <TypeSelect
                {...field}
                onChange={(value) => field.onChange(value)}
                placeholder="Type of pet"
                styles={ReactSelectStyles}
              />
            )}
          />
          {errors.species && <p>{errors.species.message}</p>}
        </div>
      </div>
      {errors.sex && <p>{errors.sex.message}</p>}
      <div className="button-form">
        <Button type="submit" text="Submit" />  
        <Button type="button" text="Back" onClick={handleBackClick} />  
      </div>
    </form>
  );
};

export default AddPetForm;
