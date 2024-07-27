

// import React, { useLayoutEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { IoCloseSharp } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion";
// import "../../styles/Modal.scss";
// import Button from "../UI/Button/Button";
// import Star from "../../../public/images/star.png";
// import StarTransparent from "../../../public/images/star-transparent.png";
// import HeardEmpty from "../../../public/images/heard-white.png";
// import { addFavoritePet, removeFavoritePet } from '../../redux/slices/favoritePetsSlice';

// const Modal = ({ children, isOpen, onClose, pet }) => {
//   const dispatch = useDispatch();
//   const favoritePets = useSelector((state) => state.favoritePets.pets);
//   const isFavorite = pet ? favoritePets.some(favPet => favPet._id === pet._id) : false;

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//     exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   const handleEscapeKey = (e) => {
//     if (e.key === "Escape") {
//       onClose();
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleFavoriteClick = () => {
//     if (isFavorite) {
//       dispatch(removeFavoritePet(pet));
//     } else {
//       dispatch(addFavoritePet(pet));
//     }
//   };

//   useLayoutEffect(() => {
//     document.addEventListener("keydown", handleEscapeKey);
//     return () => {
//       document.removeEventListener("keydown", handleEscapeKey);
//     };
//   }, []);

//   useLayoutEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && pet && (
//         <div className="backdrop" onClick={handleBackdropClick}>
//           <motion.div
//             className="modal-window"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={modalVariants}
//           >
//             <div className="modal-content">
//               <div className="pet-info">
//                 <button className="close-btn" onClick={onClose}>
//                   <IoCloseSharp size={"24px"} />
//                 </button>
//                 <img
//                   src={pet.imgURL}
//                   alt={pet.title}
//                 />

//                 <p className="category_modal">{pet.category}</p>

//                 <h2>
//                   {pet.title}
//                 </h2>
//                 <div className="name-rating">
//                   <img className="star" src={Star} />
//                   <img className="star" src={Star} />
//                   <img className="star" src={Star} />
//                   <img className="star" src={StarTransparent} />
//                   <img className="star" src={StarTransparent} />
//                   <p>{pet.popularity}</p>
//                 </div>

//                 <div className="info_item">
//                   <p>
//                     <div className="label">Name:</div> {pet.name}
//                   </p>
//                   <p>
//                     <div className="label">Birthday:</div> {pet.birthday}
//                   </p>
//                   <p>
//                     <div className="label">Sex:</div> {pet.sex}
//                   </p>
//                   <p>
//                     <div className="label">Species:</div> {pet.species}
//                   </p>
//                 </div>
//                 <p className="comment">{pet.comment}</p>
//                 <div className="buttons_modal">
//                   <Button
//                     text={isFavorite ? "Remove from favorites" : "Add to favorites"}
//                     onClick={handleFavoriteClick}
//                   >
//                     <img src={HeardEmpty} alt="Heart" className="button-icon" />
//                   </Button>
//                   <Button text={"Contact"} />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Modal;




import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Modal.scss";
import Button from "../UI/Button/Button";
import Star from "../../../public/images/star.png";
import StarTransparent from "../../../public/images/star-transparent.png";
import HeardEmpty from "../../../public/images/heard-white.png";
import { addFavoritePet, removeFavoritePet } from '../../redux/slices/favoritePetsSlice';

const Modal = ({ children, isOpen, onClose, pet }) => {
  const dispatch = useDispatch();
  const favoritePets = useSelector((state) => state.favoritePets.pets);
  const isFavorite = pet ? favoritePets.some(favPet => favPet._id === pet._id) : false;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoritePet(pet));
    } else {
      dispatch(addFavoritePet(pet));
    }
  };

  useLayoutEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && pet && (
        <div className="backdrop" onClick={handleBackdropClick}>
          <motion.div
            className="modal-window"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="modal-content">
              <div className="pet-info">
                <button className="close-btn" onClick={onClose}>
                  <IoCloseSharp size={"24px"} />
                </button>
                <img
                  src={pet.imgURL}
                  alt={pet.title}
                />

                <p className="category_modal">{pet.category}</p>

                <h2>
                  {pet.title}
                </h2>
                <div className="name-rating">
                  <img className="star" src={Star} />
                  <img className="star" src={Star} />
                  <img className="star" src={Star} />
                  <img className="star" src={StarTransparent} />
                  <img className="star" src={StarTransparent} />
                  <p>{pet.popularity}</p>
                </div>

                <div className="info_item">
                  <p>
                    <div className="label">Name:</div> {pet.name}
                  </p>
                  <p>
                    <div className="label">Birthday:</div> {pet.birthday}
                  </p>
                  <p>
                    <div className="label">Sex:</div> {pet.sex}
                  </p>
                  <p>
                    <div className="label">Species:</div> {pet.species}
                  </p>
                </div>
                <p className="comment">{pet.comment}</p>
                <div className="buttons_modal">
                  <Button
                    text={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    className="primary"
                    onClick={handleFavoriteClick}
                  >
                    <img src={HeardEmpty} alt="Heart" className="button-icon" />
                  </Button>
                  <Button text={"Contact"} className="primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
