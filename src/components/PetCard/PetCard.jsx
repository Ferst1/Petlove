
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritePet, removeFavoritePet } from '../../redux/slices/favoritePetsSlice'; 
import Button from "../UI/Button/Button";
import Favorit from "/images/favorite.svg";
import FavoritHover from "/images/user-profile/heard-hover.png";
import Crash from "/images/user-profile/crash.png";
import "../../styles/PetCard.scss";
import formatDate from "../../utils/formatData";
import Star from "../../../public/images/star.png"

const PetCard = ({ pet, openModal }) => {
  const dispatch = useDispatch();
  const favoritePets = useSelector((state) => state.favoritePets.pets);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritePets.some(favPet => favPet._id === pet._id));
  }, [favoritePets, pet._id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoritePet(pet));
    } else {
      dispatch(addFavoritePet(pet));
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="pets_item aos-animate">
      <img src={pet.imgURL} alt={pet.title} />
     
      <div className="name-rating">
    
      <h3>{pet.title}</h3>
      <div className="rating">
      <img
      src={Star}/>

      <p>{pet.popularity}</p>
      </div>
      
      </div>
      <div className="pets-data">
        <div className="data-item">
          <p>Name</p>
          <p>{pet.name}</p>
          
        </div>
        <div className="data-item">
          <p>Birthday</p>
          <p>{formatDate(pet.birthday)}</p>
        </div>
        <div className="data-item">
          <p>Sex</p>
          <p>{pet.sex}</p>
        </div>
        <div className="data-item">
          <p>Species</p>
          <p>{pet.species}</p>
        </div>
        <div className="data-item">
          <p>Category</p>
          <p>{pet.category}</p>
        </div>
      </div>
      <div>
        <p>{pet.comment}</p>
      </div>
      <div className="favorite_button">
        <Button text={"Learn more"} color="primary" onClick={() => openModal(pet)} />
        <img
          className="favorit"
          src={isFavorite ? Crash : isHovered ? FavoritHover : Favorit}
          alt="favorit"
          onClick={handleFavoriteClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: '48px', height: '48px' }} 
        />
      </div>
    </div>
  );
};

export default PetCard;



// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { addFavoritePet, removeFavoritePet } from '../../redux/slices/favoritePetsSlice'; 
// import Button from "../UI/Button/Button";
// import Favorit from "/images/favorite.svg";
// import FavoritHover from "/images/user-profile/heard-hover.png";
// import Crash from "/images/user-profile/crash.png";
// import "../../styles/PetCard.scss";
// import formatDate from "../../utils/formatData";
// import Star from "/images/star.png";
// import Modal from "../Modal/Modal"; // Импортируем компонент модального окна

// const PetCard = ({ pet }) => {
//   const dispatch = useDispatch();
//   const favoritePets = useSelector((state) => state.favoritePets.pets);
//   const viewedPets = useSelector((state) => state.viewedPets.viewedPets);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
//   const isViewed = viewedPets.some(viewedPet => viewedPet._id === pet._id);

//   useEffect(() => {
//     setIsFavorite(favoritePets.some(favPet => favPet._id === pet._id));
//   }, [favoritePets, pet._id]);

//   const handleFavoriteClick = () => {
//     if (isFavorite) {
//       dispatch(removeFavoritePet(pet));
//     } else {
//       dispatch(addFavoritePet(pet));
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className="pets_item aos-animate">
//         <img src={pet.imgURL} alt={pet.title} />
//         <div className="name-rating">
//           <h3>{pet.title}</h3>
//           <div className="rating">
//             <img src={Star} />
//             <p>{pet.popularity}</p>
//           </div>
//         </div>
//         <div className="pets-data">
//           <div className="data-item">
//             <p>Name</p>
//             <p>{pet.name}</p>
//           </div>
//           <div className="data-item">
//             <p>Birthday</p>
//             <p>{formatDate(pet.birthday)}</p>
//           </div>
//           <div className="data-item">
//             <p>Sex</p>
//             <p>{pet.sex}</p>
//           </div>
//           <div className="data-item">
//             <p>Species</p>
//             <p>{pet.species}</p>
//           </div>
//           <div className="data-item">
//             <p>Category</p>
//             <p>{pet.category}</p>
//           </div>
//         </div>
//         <div>
//           <p>{pet.comment}</p>
//         </div>
//         <div className={`favorite_button ${isViewed ? 'viewed' : ''}`}>
//           <Button text={"Learn more"} className="primary full-width" onClick={openModal} />
//           {!isViewed && (
//             <img
//               className="favorit"
//               src={isFavorite ? Crash : isHovered ? FavoritHover : Favorit}
//               alt="favorit"
//               onClick={handleFavoriteClick}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               style={{ width: '48px', height: '48px' }} 
//             />
//           )}
//           {isViewed && isFavorite && (
//             <img
//               className="favorit"
//               src={Crash}
//               alt="favorit"
//               onClick={handleFavoriteClick}
//               style={{ width: '48px', height: '48px' }} 
//             />
//           )}
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal} pet={pet} />
//     </>
//   );
// };

// export default PetCard;
