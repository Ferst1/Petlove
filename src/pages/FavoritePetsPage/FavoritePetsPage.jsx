import React from 'react';
import { useSelector } from 'react-redux';
import PetCard from '../../components/PetCard/PetCard';

const FavoritePetsPage = () => {
  const favoritePets = useSelector((state) => state.favoritePets);

  if (!favoritePets || favoritePets.length === 0) {
    return <div className="favorite-pets-page"><h2>No favorite pets available</h2></div>;
  }

  return (
    <div className="favorite-pets-page">
      <h2>Favorite Pets</h2>
      <ul>
        {favoritePets.map(pet => (
          <li key={pet._id}>
            <PetCard pet={pet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePetsPage;
