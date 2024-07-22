export const applyFilter = (data, filters) => {
  if (!data || !filters) return [];

  return data.filter((item) => {
    if (filters.category && filters.category !== 'Show all' && item.category !== filters.category) {
      return false;
    }
    if (filters.gender && filters.gender !== 'Show all' && item.gender !== filters.gender) {
      return false;
    }
    if (filters.type && filters.type !== 'Show all' && item.type !== filters.type) {
      return false;
    }
    return true;
  });
};

export const categoryOptions = ["Show all", "Sell", "Free", "Lost", "Found"];
export const genderOptions = ["Show all", "Unknown", "Female", "Male", "Multiple"];
export const typeOptions = [
  "Show all",
  "Dog",
  "Cat",
  "Monkey",
  "Bird",
  "Snake",
  "Turtle",
  "Lizard",
  "Frog",
  "Fish",
  "Ants",
  "Bees",
  "Butterfly",
  "Spider",
  "Scorpion",
];
