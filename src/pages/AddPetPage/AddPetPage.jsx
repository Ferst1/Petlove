import React, { useState, useEffect } from 'react';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import '../../styles/PetsBlock.scss';
import '../../styles/AddPetPage.scss';
import AvatarPets from "../../../public/images/avatar-pets.png";
import AddPets from "../../../public/images/addmypat.jpg";
import AddPetsTablet from "../../../public/images/addmypets-tablet.png";
import Femali from "../../../public/images/female.png"
import Male from "../../../public/images/male.png"
import Multiple from "../../../public/images/multiple.png"

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
          <div className="pets-title">
            <h2>Add my pet /</h2>
            <p>Personal details</p>
          </div>
          <div className="button-gender">
          <img src={Femali} alt="femali gender" />
          <img src={Male} alt="male gender" />
          <img src={Multiple} alt="multiple gender" />
          </div>
          <img src={AvatarPets} alt="avatar pet" className="avatar-pet" />
          <AddPetForm />
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;
