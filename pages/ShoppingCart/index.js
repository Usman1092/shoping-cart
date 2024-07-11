import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../Redux/Cart/Actions";
import nookies from "nookies";
import Link from "next/link";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.operations.items);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = nookies.get(null, "authToken");
    if (token.authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedQuantities =
        JSON.parse(localStorage.getItem("quantities")) || {};
      setQuantities(storedQuantities);
    }
  }, [cartItems]);

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [itemId]: (prevQuantities[itemId] || 1) + 1,
      };
      localStorage.setItem("quantities", JSON.stringify(newQuantities));
      return newQuantities;
    });
  };

  const handleDecrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1,
      };
      localStorage.setItem("quantities", JSON.stringify(newQuantities));
      return newQuantities;
    });
  };

  const calculateTotalPrice = (items, quantities) => {
    return items.reduce((acc, item) => {
      const quantity = quantities[item.id] || 1;
      return acc + item.price * quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice(cartItems, quantities).toFixed(2);

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center pt-5">Shopping Cart</h1>

      {isLoggedIn ? (
        cartItems.length === 0 ? (
          <p className="text-center pt-3">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col justify-center">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 border-b border-gray-300">
                <div className="flex flex-row justify-between text-left">
                  <div className="max-w-sm p-6 ml-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                      src={item.images}
                      width={200}
                      height={200}
                      alt="Product Image"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p>ID: {item.id}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Price: {item.price}</p>
                    <p>Sku: {item.sku}</p>
                    <p>Discount: {item.discountPercentage}%</p>
                    <p>Shipping: {item.shippingInformation}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="">Quantity:</p>
                    <button
                      type="button"
                      onClick={() => handleDecrement(item.id)}
                      className="bg-black rounded-[10%] pt-2 pb-2 pl-2 pr-2 text-white font-bold"
                    >
                      -
                    </button>
                    <span className="text-lg">{quantities[item.id] || 1}</span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(item.id)}
                      className="bg-black rounded-[10%] pt-2 pb-2 pl-2 pr-2 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => dispatch(removeItem(item.id))}
                      className="bg-black rounded-[10%] pt-2 pb-2 pl-2 pr-2 text-white font-bold mt-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold text-center pt-4">
              Total Price: ${totalPrice}
            </div>
          </div>
        )
      ) : (
        <div className="text-center pt-10">
          <Link href="/Login" legacyBehavior>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {" "}
              Login to View Items!
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
