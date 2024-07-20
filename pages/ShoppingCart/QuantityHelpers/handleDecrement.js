

  export const handleDecrement = (itemId, setQuantities) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1,
      };
      localStorage.setItem("quantities", JSON.stringify(newQuantities));
      return newQuantities;
    });
  };
