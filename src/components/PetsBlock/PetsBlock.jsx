// components/PetsBlock/PetsBlock.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../styles/PetsBlock.scss';

const PetsBlock = () => {
  const pets = useSelector((state) => state.user.user.pets);

  return (
    <div className="pets-block">
      <NavLink className="add-pet" to="/add-pet">Add Pet</NavLink>
      <div className="pets-list">
        {pets.map(pet => (
          <div key={pet._id} className="pet-item">
            <img src={pet.avatar} alt={`${pet.name}'s avatar`} className="pet-avatar" />
            <span className="pet-name">{pet.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsBlock;
