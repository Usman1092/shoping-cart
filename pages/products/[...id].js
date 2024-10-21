






// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../Redux/Cart/Actions";
// import Swal from "sweetalert2";
// import Link from "next/link";
// import nookies from "nookies";

// const ProductDetails = ({ productInfo }) => {
//   localStorage.setItem("Id", productInfo.id);
//   const dispatch = useDispatch();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = nookies.get(null, "authToken");
//     console.log(token);
//     if (token.authToken) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   if (!productInfo) return <h1>Loading...</h1>;

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     console.log("Dispatching add to cart:", productInfo);
//     dispatch(addToCart(productInfo));
//     Swal.fire({
//       title: "Success",
//       text: "Item Successfully Added to Cart!",
//       icon: "success",
//       confirmButtonText: "Continue",
//     });
//   };

//   return (
//     <div>
//       <div className="flex flex-row pt-0">
//         <div className="w-full min-h-screen max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <img
//               className="p-8 rounded-t-lg flex justify-center"
//               src={productInfo.thumbnail}
//               alt="product image"
//             />
//           </a>
//           <div className="px-5 pb-5">
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               {productInfo.title}
//             </h5>
//             <div className="flex items-center justify-between pt-10">
//               <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                 ${productInfo.price}
//               </span>
//               {isLoggedIn ? (
//                 <button
//                   type="submit"
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   onClick={handleAddToCart}
//                 >
//                   Add to cart
//                 </button>
//               ) : (
//                 <Link href="/Login" legacyBehavior>
//                   <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Login to Add to Cart
//                   </a>
//                 </Link>
//               )}
//             </div>
//             <div className="text-end mt-10">
//               <Link href="/ShoppingCart" legacyBehavior>
//                 <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   Go to cart
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="w-full min-h-screen p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//           <h5 className="mb-2 text-3xl text-center font-bold text-gray-900 dark:text-white">
//             Product Details
//           </h5>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             ID: {productInfo.id}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Title: {productInfo.title}
//           </p>
//           <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Description: {productInfo.description}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Stock: {productInfo.stock}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Brand: {productInfo.brand}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Sku: {productInfo.sku}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Price: ${productInfo.price}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Rating: {productInfo.rating}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Tags: {productInfo.tags.join(", ")}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Shipping Information: {productInfo.shippingInformation}
//           </p>
//           <p className="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             Warranty: {productInfo.warrantyInformation}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps = async (context) => {
//   const { id } = context.query;

//   try {
//     const response = await fetch(`https://dummyjson.com/products/${id}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const productInfo = await response.json();
//     return {
//       props: {
//         productInfo,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return {
//       props: {
//         productInfo: null,
//       },
//     };
//   }
// };

// export default ProductDetails;




import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart/Actions";
import Swal from "sweetalert2";
import Link from "next/link";
import nookies from "nookies";

const ProductDetails = ({ productInfo }) => {
  localStorage.setItem("Id", productInfo.id);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = nookies.get(null, "authToken");
    console.log(token);
    if (token.authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!productInfo) return <h1>Loading...</h1>;

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("Dispatching add to cart:", productInfo);
    dispatch(addToCart(productInfo));
    Swal.fire({
      title: "Success",
      text: "Item Successfully Added to Cart!",
      icon: "success",
      confirmButtonText: "Continue",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row lg:space-x-10 items-start">
        {/* Product Image and Cart Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="p-8 rounded-t-lg w-full h-auto object-cover"
              src={productInfo.thumbnail}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {productInfo.title}
            </h5>
            <div className="flex items-center justify-between pt-10">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${productInfo.price}
              </span>
              {isLoggedIn ? (
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              ) : (
                <Link href="/Login" legacyBehavior>
                  <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login to Add to Cart
                  </a>
                </Link>
              )}
            </div>
            <div className="text-end mt-10">
              <Link href="/ShoppingCart" legacyBehavior>
                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Go to cart
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full h-screen lg:w-1/2 p-4 ">
          <h5 className="mb-2 text-3xl text-center font-bold text-gray-900 dark:text-white">
            Product Details
          </h5>
          <div className="space-y-2">
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              ID: {productInfo.id}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Title: {productInfo.title}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Description: {productInfo.description}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Stock: {productInfo.stock}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Brand: {productInfo.brand}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Sku: {productInfo.sku}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Price: ${productInfo.price}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Rating: {productInfo.rating}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Tags: {productInfo.tags.join(", ")}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Shipping Information: {productInfo.shippingInformation}
            </p>
            <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Warranty: {productInfo.warrantyInformation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const productInfo = await response.json();
    return {
      props: {
        productInfo,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        productInfo: null,
      },
    };
  }
};

export default ProductDetails;

