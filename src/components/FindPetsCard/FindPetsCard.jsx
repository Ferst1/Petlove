

import React, { useState, useEffect } from "react";
import PetCard from "../PetCard/PetCard";
import Modal from "../Modal/Modal";
import ModalAttention from "../ModalAttention/ModalAttention";
import { useDispatch, useSelector } from "react-redux";
import { addViewedPet } from "../../redux/slices/viewedPetsSlice";
import "../../styles/FindPetsCard.scss";

const FindPetsCard = ({ pets, loading, onPetClick }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [isModalAttentionOpen, setIsModalAttentionOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const openModal = (pet) => {
    if (user) {
      setSelectedPet(pet);
      dispatch(addViewedPet(pet));
    } else {
      setIsModalAttentionOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedPet(null);
    setIsModalAttentionOpen(false);
  };

  useEffect(() => {
    console.log("Displaying pets:", pets);
  }, [pets]);

  return (
    <div className="find_pets_card_wrapper">
      <div className="find_pets_card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          pets.map((pet, index) => (
            <div key={pet._id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <PetCard
                pet={pet}
                openModal={openModal}
              />
            </div>
          ))
        )}
      </div>
      {selectedPet && (
        <Modal isOpen={selectedPet !== null} onClose={closeModal} pet={selectedPet}>
          <h2>{selectedPet.title}</h2>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>
      )}
      <ModalAttention isOpen={isModalAttentionOpen} onClose={closeModal} />
    </div>
  );
};

export default FindPetsCard;
