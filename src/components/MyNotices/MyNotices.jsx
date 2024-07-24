
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/MyNotices.scss';
import Button from '../UI/Button/Button';
import PetCard from '../PetCard/PetCard';
import { setShowFavorites } from '../../redux/slices/favoritePetsSlice';

const MyNotices = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.user.noticesFavorites);
  const favoritePets = useSelector((state) => state.favoritePets.pets);
  const viewedPets = useSelector((state) => state.viewedPets.viewedPets);
  const showFavorites = useSelector((state) => state.favoritePets.showFavorites);

  useEffect(() => {
    console.log('Favorite Pets:', favoritePets);
    console.log('Viewed Pets:', viewedPets);
  }, [favoritePets, viewedPets]);

  const handleShowFavorites = () => {
    dispatch(setShowFavorites(true));
  };

  const handleShowAll = () => {
    dispatch(setShowFavorites(false));
  };

  const petsToShow = showFavorites ? favoritePets : viewedPets;

  return (
    <div className="my-notices">
      <div className="button-container">
        <Button
          text={"My favorite pets"}
          onClick={handleShowFavorites}
          className={showFavorites ? "active-button" : "white-button"}
        />
        <Button
          text={"Viewed"}
          onClick={handleShowAll}
          className={!showFavorites ? "active-button" : "white-button"}
        />
      </div>
      {!petsToShow || petsToShow.length === 0 ? (
        <p>Oops, looks like there aren't any furries on our adorable page yet. Do not worry! View your pets on the "find your 
          favorite pet" page and add them to your favorites.</p>
      ) : (
        <>
          <div className="notices-grid">
            {petsToShow.map(pet => (
              <PetCard key={pet._id} pet={pet} showRemoveButton={showFavorites} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyNotices;
