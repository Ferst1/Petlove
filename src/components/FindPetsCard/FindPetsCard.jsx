


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PetCard from "../PetCard/PetCard";
// import Modal from "../Modal/Modal";
// import "../../styles/FindPetsCard.scss";

// const API_BASE_URL = 'https://petlove.b.goit.study/api';

// const FindPetsCard = ({ filters, searchValue, currentPage, setTotalItems }) => {
//   const [pets, setPets] = useState([]);
//   const [filteredPets, setFilteredPets] = useState([]);
//   const [selectedPet, setSelectedPet] = useState(null);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/notices`, {
//           params: { page: currentPage, perPage: 6 }
//         });
//         setPets(response.data.results);
//         setTotalItems(response.data.totalItems);
//         console.log("Fetched pets:", response.data.results);
//       } catch (error) {
//         console.error("Error fetching pets:", error);
//       }
//     };
//     fetchPets();
//   }, [currentPage, setTotalItems]);

//   useEffect(() => {
//     const applyFilters = () => {
//       let updatedPets = [...pets];

//       if (filters?.category?.length > 0) {
//         updatedPets = updatedPets.filter(pet => pet.category && filters.category.includes(pet.category));
//       }

//       if (filters?.gender?.length > 0) {
//         updatedPets = updatedPets.filter(pet => pet.sex && filters.gender.includes(pet.sex));
//       }

//       if (filters?.type?.length > 0) {
//         updatedPets = updatedPets.filter(pet => pet.species && filters.type.includes(pet.species));
//       }

//       if (filters?.location?.length > 0) {
//         updatedPets = updatedPets.filter(pet => pet.location && filters.location.includes(pet.location));
//       }

//       setFilteredPets(updatedPets);
//       console.log("Filtered pets:", updatedPets);
//     };

//     applyFilters();
//   }, [filters, pets]);

//   const openModal = (pet) => {
//     setSelectedPet(pet);
//   };

//   const closeModal = () => {
//     setSelectedPet(null);
//   };

//   return (
//     <div className="find_pets_card_wrapper">
//       <div className="find_pets_card">
//         {filteredPets.length > 0 ? (
//           filteredPets.map((pet) => (
//             <PetCard
//               key={pet._id}
//               pet={pet}
//               openModal={openModal}
//             />
//           ))
//         ) : (
//           pets.map((pet) => (
//             <PetCard
//               key={pet._id}
//               pet={pet}
//               openModal={openModal}
//             />
//           ))
//         )}
//       </div>
//       {selectedPet && (
//         <Modal isOpen={selectedPet !== null} onClose={closeModal} pet={selectedPet}>
//           <h2>{selectedPet.title}</h2>
//           <button onClick={closeModal}>Close Modal</button>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default FindPetsCard;



import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "../PetCard/PetCard";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addViewedPet } from "../../redux/slices/viewedPetsSlice";
import "../../styles/FindPetsCard.scss";

const API_BASE_URL = 'https://petlove.b.goit.study/api';

const FindPetsCard = ({ filters, searchValue, currentPage, setTotalItems }) => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/notices`, {
          params: { page: currentPage, perPage: 6 }
        });
        setPets(response.data.results);
        setTotalItems(response.data.totalItems);
        console.log("Fetched pets:", response.data.results);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    fetchPets();
  }, [currentPage, setTotalItems]);

  useEffect(() => {
    const applyFilters = () => {
      let updatedPets = [...pets];

      if (filters?.category?.length > 0) {
        updatedPets = updatedPets.filter(pet => pet.category && filters.category.includes(pet.category));
      }

      if (filters?.gender?.length > 0) {
        updatedPets = updatedPets.filter(pet => pet.sex && filters.gender.includes(pet.sex));
      }

      if (filters?.type?.length > 0) {
        updatedPets = updatedPets.filter(pet => pet.species && filters.type.includes(pet.species));
      }

      if (filters?.location?.length > 0) {
        updatedPets = updatedPets.filter(pet => pet.location && filters.location.includes(pet.location));
      }

      setFilteredPets(updatedPets);
      console.log("Filtered pets:", updatedPets);
    };

    applyFilters();
  }, [filters, pets]);

  const openModal = (pet) => {
    setSelectedPet(pet);
    dispatch(addViewedPet(pet)); // Добавление просмотренной карточки в состояние Redux
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  return (
    <div className="find_pets_card_wrapper">
      <div className="find_pets_card">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={pet}
              openModal={openModal}
            />
          ))
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
