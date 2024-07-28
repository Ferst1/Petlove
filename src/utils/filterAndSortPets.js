
export const filterAndSortPets = (pets, query, category, gender, type, location, sortBy) => {
    let filteredPets = pets;
    const lowerCaseQuery = query.toLowerCase();
  
    if (query) {
      filteredPets = filteredPets.filter(pet => {
        const { species, title, name, comment, sex, location: petLocation } = pet;
        const locationString = `${petLocation?.stateEn || ''} ${petLocation?.cityEn || ''}`.toLowerCase();
        return (
          (species && species.toLowerCase().includes(lowerCaseQuery)) ||
          (title && title.toLowerCase().includes(lowerCaseQuery)) ||
          (name && name.toLowerCase().includes(lowerCaseQuery)) ||
          (comment && comment.toLowerCase().includes(lowerCaseQuery)) ||
          (sex && sex.toLowerCase().includes(lowerCaseQuery)) ||
          locationString.includes(lowerCaseQuery)
        );
      });
    }
    
    if (category) {
      filteredPets = filteredPets.filter(pet => pet.category === category);
    }
    
    if (gender) {
      filteredPets = filteredPets.filter(pet => pet.sex === gender);
    }
    
    if (type) {
      filteredPets = filteredPets.filter(pet => pet.species === type);
    }
    
    if (location) {
      filteredPets = filteredPets.filter(pet => `${pet.location.stateEn} ${pet.location.cityEn}`.toLowerCase().includes(location.toLowerCase()));
    }
  
    // Добавляем сортировку
    if (sortBy === 'popularity') {
      filteredPets = filteredPets.slice().sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'unpopularity') {
      filteredPets = filteredPets.slice().sort((a, b) => a.popularity - b.popularity);
    } else if (sortBy === 'cheap') {
      filteredPets = filteredPets.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'expensive') {
      filteredPets = filteredPets.slice().sort((a, b) => b.price - a.price);
    }
  
    return filteredPets;
  };
  