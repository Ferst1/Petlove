import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from '../../redux/slices/petsSlice';
import '../../styles/PetsBlock.scss';
import { NavLink } from 'react-router-dom';

const PetsBlock = () => {
  const dispatch = useDispatch();
  const { pets, status, error } = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div className="pets-block">
      <NavLink className="add-pet" to="/add-pet">Add Pet</NavLink>
      <div className="pets-list">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && pets.map(pet => (
          <div key={pet._id} className="pet-item">
            <img src={pet.imgUrl} alt={`${pet.name}'s avatar`} className="pet-avatar" />
            <span className="pet-name">{pet.name}</span>
            <span className="pet-details">Species: {pet.species}</span>
            <span className="pet-details">Birthday: {pet.birthday}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsBlock;
