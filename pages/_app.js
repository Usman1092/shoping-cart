// import "@/styles/globals.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import store, { persistor } from "./Redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// const queryClient = new QueryClient();
// export default function App({ Component, pageProps }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           {" "}
//           <Component {...pageProps} />
//         </PersistGate>
//       </Provider>
//     </QueryClientProvider>
//   );
// }

//2nd FINAL CODE
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "../Redux/store";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
const queryClient = new QueryClient();
 function App({ Component, pageProps }) {
  return (

      <QueryClientProvider client={queryClient}>
        {" "}
        <div>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider></div>
      </QueryClientProvider>

  );
}
export default dynamic (() => Promise.resolve(App), {ssr: false})




// import React, { useEffect, useRef } from "react";
// import Lenis from "@studio-freight/lenis";

// const App = () => {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     // Initialize Lenis
//     const lenis = new Lenis({
//       duration: 1.2, // Animation duration (default 1.2)
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function (default)
//       direction: "horizontal", // Scroll direction (vertical or horizontal)
//       smooth: true, // Enable smooth scrolling (default true)
//       smoothTouch: false, // Enable smooth scrolling on touch devices (default false)
//       touchMultiplier: 2, // Multiply the scroll speed on touch devices (default 2)
//       // infinite:true,
//     });
//     // lenis.on('scroll', (e) => {
//     //   console.log(e)
//     // })
//     lenis.on('scroll', ({scroll,limit,velocity, direction,progress}) => {
//       console.log({scroll,limit,velocity, direction,progress})
//     })

//     lenisRef.current = lenis;

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

//   return (
//     <div  >
//       <section style={{ height: "100vh", backgroundColor: "#ff8c00" }}>
//         <h1>Scroll Down</h1>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum. Why do we use it? It is a long
//           established fact that a reader will be distracted by the readable
//           content of a page when looking at its layout. The point of using Lorem
//           Ipsum is that it has a more-or-less normal distribution of letters, as
//           opposed to using 'Content here, content here', making it look like
//           readable English. Many desktop publishing packages and web page
//           editors now use Lorem Ipsum as their default model text, and a search
//           for 'lorem ipsum' will uncover many web sites still in their infancy.
//           Various versions have evolved over the years, sometimes by accident,
//           sometimes on purpose (injected humour and the like). Where does it
//           come from? Contrary to popular belief, Lorem Ipsum is not simply
//           random text. It has roots in a piece of classical Latin literature
//           from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
//           professor at Hampden-Sydney College in Virginia, looked up one of the
//           more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//           going through the cites of the word in classical literature,
//           discovered the undoubtable source. Lorem Ipsum comes from sections
//           1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//           of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
//           on the theory of ethics, very popular during the Renaissance. The
//           first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
//           a line in section 1.10.32. The standard chunk of Lorem Ipsum used
//           since the 1500s is reproduced below for those interested. Sections
//           1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
//           also reproduced in their exact original form, accompanied by English
//           versions from the 1914 translation by H. Rackham. Lorem Ipsum is
//           simply dummy text of the printing and typesetting industry. Lorem
//           Ipsum has been the industry's standard dummy text ever since the
//           1500s, when an unknown printer took a galley of type and scrambled it
//           to make a type specimen book. It has survived not only five centuries,
//           but also the leap into electronic typesetting, remaining essentially
//           unchanged. It was popularised in the 1960s with the release of
//           Letraset sheets containing Lorem Ipsum passages, and more recently
//           with desktop publishing software like Aldus PageMaker including
//           versions of Lorem Ipsum. Why do we use it? It is a long established
//           fact that a reader will be distracted by the readable content of a
//           page when looking at its layout. The point of using Lorem Ipsum is
//           that it has a more-or-less normal distribution of letters, as opposed
//           to using 'Content here, content here', making it look like readable
//           English. Many desktop publishing packages and web page editors now use
//           Lorem Ipsum as their default model text, and a search for 'lorem
//           ipsum' will uncover many web sites still in their infancy. Various
//           versions have evolved over the years, sometimes by accident, sometimes
//           on purpose (injected humour and the like). Where does it come from?
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It
//           has roots in a piece of classical Latin literature from 45 BC, making
//           it over 2000 years old. Richard McClintock, a Latin professor at
//           Hampden-Sydney College in Virginia, looked up one of the more obscure
//           Latin words, consectetur, from a Lorem Ipsum passage, and going
//           through the cites of the word in classical literature, discovered the
//           undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
//           1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
//           Evil) by Cicero, written in 45 BC. This book is a treatise on the
//           theory of ethics, very popular during the Renaissance. The first line
//           of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
//           section 1.10.32. The standard chunk of Lorem Ipsum used since the
//           1500s is reproduced below for those interested. Sections 1.10.32 and
//           1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
//           reproduced in their exact original form, accompanied by English
//           versions from the 1914 translation by H. Rackham. Lorem Ipsum is
//           simply dummy text of the printing and typesetting industry. Lorem
//           Ipsum has been the industry's standard dummy text ever since the
//           1500s, when an unknown printer took a galley of type and scrambled it
//           to make a type specimen book. It has survived not only five centuries,
//           but also the leap into electronic typesetting, remaining essentially
//           unchanged. It was popularised in the 1960s with the release of
//           Letraset sheets containing Lorem Ipsum passages, and more recently
//           with desktop publishing software like Aldus PageMaker including
//           versions of Lorem Ipsum.
//         </p>
//       </section>
//       <section style={{ height: "100vh", backgroundColor: "#1e90ff" }}>
//         <h1>Keep Scrolling</h1>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

//         </p>
//        <div className="image-Container"> 
//         <img src="/vercel.svg" style={{width:"500px" ,height:"500px"}}  alt="Image description" />
//        <img src="/vercel.svg" style={{width:"500px" ,height:"500px"}}  alt="Image description" />
//        <img src="/vercel.svg" style={{width:"500px" ,height:"500px"}}  alt="Image description" />
//        <img src="/vercel.svg" style={{width:"500px" ,height:"500px"}}  alt="Image description" /></div>
//        <img src="/vercel.svg" style={{width:"500px" ,height:"500px"}}  alt="Image description" />
//        <img src="/vercel.svg" style={{width:"500px" ,height:"500px"}}  alt="Image description" />
//       </section>
//       <section style={{ height: "100vh", backgroundColor: "#32cd32" }}>
//         <h1>You made it!</h1>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

//        </p>
//       </section>
//     </div>
//   );
// };

// export default App;
