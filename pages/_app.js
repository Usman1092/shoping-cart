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
