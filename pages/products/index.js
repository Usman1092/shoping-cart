import Link from "next/link";
import React,{useRef,useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import Lenis from "lenis";



const fetchProducts = async (page = 0) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=40&skip=${page * 40}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps = async () => {
  const initialData = await fetchProducts();
  return {
    props: {
      initialData,
    },
  };
};

function Products({ initialData }) {
  const [page, setPage] = React.useState(0);
  // const lenisRef = useRef(null);
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis({
    
  //     duration: 1.2, // Animation duration (default 1.2)
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function (default)
  //     direction: "horizontal", // Scroll direction (vertical or horizontal)
  //     smooth: true, // Enable smooth scrolling (default true)
  //     smoothTouch: false, // Enable smooth scrolling on touch devices (default false)
  //     touchMultiplier: 2, // Multiply the scroll speed on touch devices (default 2)
  //     // infinite:true,
  //     smoothWheel:true,
  //     wheelMultiplier:0.1,
  //     direction:1
      
  //   });
  //   // lenis.on('scroll', (e) => {
  //   //   console.log(e)
  //   // })
  //   lenis.on('scroll', ({scroll,limit,velocity, direction,progress}) => {
  //     console.log({scroll,limit,velocity, direction,progress})
  //   })

  //   lenisRef.current = lenis;

  //   // Start the scroll animation
  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);


  const { error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
    initialData: page === 0 ? initialData : undefined,
  });

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-4xl font-bold ">Products</h2>
   
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data &&
            data.products &&
            data.products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.tags.join(", ")}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
     
        {isFetching ? <span> Loading...</span> : null}

        <div className="flex items-center justify-between mt-20 border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <span className="bg-[#429def] pt-2 pb-2 pl-2 pr-2 rounded text-white">
            Current Page: {page + 1}
          </span>

          <button
            className="bg-[#429def] pt-2 pb-2 pl-2 pr-2 rounded text-white"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 0}
          >
            Previous Page
          </button>
          <button
            className="bg-[#429def] pt-2 pb-2 pl-2 pr-2 rounded text-white"
            onClick={() => {
              if (!isPlaceholderData && data && data.total > (page + 1) * 10) {
                setPage((old) => old + 1);
              }
            }}
            disabled={
              isPlaceholderData || (data && data.total <= (page + 1) * 10)
            }
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;



// import Link from "next/link";
// import React, { useRef, useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Lenis from "lenis";
// import 'lenis/dist/lenis.css'

// const fetchProducts = async (page = 0) => {
//   try {
//     const res = await axios.get(
//       `https://dummyjson.com/products?limit=35&skip=${page * 35}`
//     );
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getServerSideProps = async () => {
//   const initialData = await fetchProducts();
//   return {
//     props: {
//       initialData,
//     },
//   };
// };

// function Products({ initialData }) {
//   const [page, setPage] = useState(0);
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     // Initialize Lenis
//     const lenis = new Lenis({
//       duration: 1.2, // Animation duration (default 1.2)
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function (default)
//       direction: "vertical", // Scroll direction (vertical or horizontal)
//       smooth: true, // Enable smooth scrolling (default true)
//       smoothTouch: false, // Enable smooth scrolling on touch devices (default false)
//       touchMultiplier: 2, // Multiply the scroll speed on touch devices (default 2)
//       infinite: false, // Allow infinite scroll (default false)
//     });

     

//     // Start the scroll animation
//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     // Scroll to top when page changes
//     if (lenisRef.current) {
//       lenisRef.current.scrollTo(0, { immediate: true });
      
//     }
//   }, [page]);

//   const { error, data, isFetching, isPlaceholderData } = useQuery({
//     queryKey: ["products", page],
//     queryFn: () => fetchProducts(page),
//     keepPreviousData: true,
//     initialData: page === 0 ? initialData : undefined,
//   });

//   if (error) {
//     return <h3>Error: {error.message}</h3>;
//   }

//   return (
//     <div className="bg-white" ref={lenisRef}>
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-center text-4xl font-bold ">Products</h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data &&
//             data.products &&
//             data.products.map((product) => (
//               <div key={product.id} className="group relative">
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <Link href={`/products/${product.id}`}>
//                     <img
//                       src={product.thumbnail}
//                       alt={product.title}
//                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                     />
//                   </Link>
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
//                       <Link href={`/products/${product.id}`}>
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {product.title}
//                       </Link>
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {product.tags.join(", ")}
//                     </p>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">
//                     ${product.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {isFetching ? <span> Loading...</span> : null}

//         <div className="flex items-center justify-between mt-20 border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//           <span className="bg-[#429def] pt-2 pb-2 pl-2 pr-2 rounded text-white">
//             Current Page: {page + 1}
//           </span>

//           <button
//             className="bg-[#429def] pt-2 pb-2 pl-2 pr-2 rounded text-white"
//             onClick={() => setPage((old) => Math.max(old - 1, 0))}
//             disabled={page === 0}
//           >
//             Previous Page
//           </button>
//           <button
//             className="bg-[#429def] pt-2 pb-2 pl-2 pr-2 rounded text-white"
//             onClick={() => {
//               if (!isPlaceholderData && data && data.total > (page + 1) * 10) {
//                 setPage((old) => old + 1);
//               }
//             }}
//             disabled={
//               isPlaceholderData || (data && data.total <= (page + 1) * 10)
//             }
//           >
//             Next Page
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;
