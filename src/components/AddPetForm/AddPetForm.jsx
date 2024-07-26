
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/AddPetForm.scss';
import Button from '../UI/Button/Button';
import DatePicker from '../DatePicker/DatePicker';
import UploadSvg from '../../../public/images/upload-url.svg';
import TypeSelect from '../UI/TypeSelect/TypeSelect';
import ReactSelectStyles from '../../utils/ReactSelectStyles';

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
    dateOfBirth: Yup.string()
      .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Birthday must be in MM.DD.YYYY format')
      .required('Birthday is required'),
    sex: Yup.string().required('Sex is required')
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      dateOfBirth: '00.00.0000',
    }
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
      <div className="form-group">
        <input 
          type="text" {...register('imgUrl')} 
          placeholder='Enter URL'
        />
        <Button 
          text={'Upload photo'} 
          className='button-upload'
        >
          <img src={UploadSvg} alt="Upload" className="button-icon" />
        </Button>
      </div>
      
      <div className="form-group full-width">
        <input type="text" {...register('title')} placeholder='Title' />
      </div>
     
      <div className="form-group full-width">
        <input type="text" {...register('name')} placeholder='Pet’s Name' />
      </div>
      
      <div className="form-row">
        <div className="form-group">
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
        <div className="form-group">
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
          
        </div>
      </div>
      
     
      <div className="button-form">
        <Button text="Submit"/>  
        <Button text="Back" onClick={handleBackClick}/>  
      </div>
    </form>
  );
};

export default AddPetForm;
