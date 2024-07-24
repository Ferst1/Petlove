
import React, { useState } from "react";
import PetCard from "../PetCard/PetCard";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addViewedPet } from "../../redux/slices/viewedPetsSlice";
import "../../styles/FindPetsCard.scss";

const FindPetsCard = ({ pets, loading }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const dispatch = useDispatch();

  const openModal = (pet) => {
    setSelectedPet(pet);
    dispatch(addViewedPet(pet)); 
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  return (
    <div className="find_pets_card_wrapper">
      <div className="find_pets_card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          pets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={pet}
              openModal={openModal}
            />
          ))
        )}
      </div>
      {selectedPet && (
        <Modal isOpen={selectedPet !== null} onClose={closeModal} pet={selectedPet}>
          <h2>{selectedPet.title}</h2>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>
      )}
    </div>
  );
};

export default FindPetsCard;
