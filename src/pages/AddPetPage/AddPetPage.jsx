


import React, { useState, useEffect } from 'react';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import '../../styles/PetsBlock.scss';
import '../../styles/AddPetPage.scss';

import AddPets from "/public/images/addmypat.jpg";
import AddPetsTablet from "/public/images/addmypets-tablet.png";

const AddPetPage = () => {
  const [currentImage, setCurrentImage] = useState(AddPets);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentImage(AddPetsTablet);
      } else {
        setCurrentImage(AddPets);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      <div className="add-pet-page">
        <img src={currentImage} alt="pets images" className="add-pet-image" />

        <div className="pets-form">
        
          <AddPetForm />
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;
