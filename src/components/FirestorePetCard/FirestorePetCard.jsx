
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/slices/petsSlice';
import Crash from "/images/user-profile/crash.png";
import "../../styles/FirestorePetCard.scss";
import formatDate from "../../utils/formatData";

const FirestorePetCard = ({ pet, openModal }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleDeleteClick = () => {
    dispatch(deletePet(pet.id));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="firestore-pets_item">
      <div className="img-wrapper">
        <img src={pet.imgUrl} alt={pet.title} />
      </div>
      <div className="content-wrapper">
        <div className="title-crach">
          <h3>{pet.title}</h3>
          <div className="favorite_button">
            <img
              className="favorit"
              src={Crash}
              alt="Delete"
              onClick={handleDeleteClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
             
            />
          </div>
        </div>
        <div className="firestore-pets-data">
          <div className="data-item">
            <p className="label">Name</p>
            <p className="value">{pet.name}</p>
          </div>
          <div className="data-item">
            <p className="label">Birthday</p>
            <p className="value">{formatDate(pet.dateOfBirth)}</p>
          </div>
          <div className="data-item">
            <p className="label">Sex</p>
            <p className="value">{pet.sex}</p>
          </div>
          <div className="data-item">
            <p className="label">Species</p>
            <p className="value">{pet.species}</p>
          </div>
        </div>
        <div>
          <p>{pet.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default FirestorePetCard;
