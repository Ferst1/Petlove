import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/AddPetForm.scss';
import Button from '../UI/Button/Button';

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    name: Yup.string().required('Name is required'),
    imgUrl: Yup.string()
      .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Invalid URL format')
      .required('Image URL is required'),
    species: Yup.string().required('Species is required'),
    birthday: Yup.string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, 'Birthday must be in YYYY-MM-DD format')
      .required('Birthday is required'),
    sex: Yup.string().required('Sex is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data) => {
    try {
      
      const response = await axios.post('/api/add-pet', data);
      if (response.status === 200) {
      
        navigate('/profile');
      }
    } catch (error) {
     
      alert(`Error: ${error.response.data.message}`);
    }
  };

  const handleBackClick = () => {
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-pet-form">
      <div>
        <label>Title</label>
        <input type="text" {...register('title')} />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label>Name</label>
        <input type="text" {...register('name')} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" {...register('imgUrl')} />
        <p>{errors.imgUrl?.message}</p>
      </div>
      <div>
        <label>Species</label>
        <input type="text" {...register('species')} />
        <p>{errors.species?.message}</p>
      </div>
      <div>
        <label>Birthday</label>
        <input type="text" {...register('birthday')} />
        <p>{errors.birthday?.message}</p>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <input type="radio" value="male" {...register('sex')} /> Male
          </label>
          <label>
            <input type="radio" value="female" {...register('sex')} /> Female
          </label>
        </div>
        <p>{errors.sex?.message}</p>
      </div>
      <div className="buttun-form">
     <Button text="Sumit"/>  
     <Button text="Back" onClick={handleBackClick}/>  
     </div>
   
    </form>
  );
};

export default AddPetForm;
