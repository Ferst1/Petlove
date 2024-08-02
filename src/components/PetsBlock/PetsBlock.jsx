import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FirestorePetCard from '../FirestorePetCard/FirestorePetCard';
import { fetchPets } from '../../redux/slices/petsSlice';
import '../../styles/PetsBlock.scss';

const PetsBlock = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.pets);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchPets());
    }
  }, [dispatch, user]);

  return (
    <div className="pets-block">
      {pets.map((pet) => (
        <FirestorePetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetsBlock;
