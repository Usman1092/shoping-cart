export const calculateTotalPrice = (items, quantities) => {
    return items.reduce((acc, item) => {
      const quantity = quantities[item.id] || 1;
      return acc + item.price * quantity;
    }, 0);
  };