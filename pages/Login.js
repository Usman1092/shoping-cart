// import React, { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, facebookAuth } from "../config";
// import { provider } from "../config";
// import { signInWithPopup } from "firebase/auth";
// import { Router, useRouter } from "next/router";
// import nookies from 'nookies';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [fb, setFb] = useState("");
//   const [password, setPassword] = useState("");
//   const [value, setValue] = useState("");
//   const router = useRouter();
//   const createUser = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((value) => alert("successfully user created"))
//       .catch((error) => {
//         console.error("Error creating user:", error);
//         alert("Error creating user: " + error.message);
//       });
//   };

//   const handleClick = () => {
//     signInWithPopup(auth, provider)
//       .then((fbdata) => {
//         setValue(data.user.email);
//         localStorage.setItem("email", data.user.email);
//         router.push("/products");
//       })
//       .catch((error) => {
//         console.error("Error signing in with Google:", error);
//         alert("Error signing in with Google: " + error.message);
//       });
//   };

//   async function facebookAuthBtn() {
//     const user = await facebookAuth();
//     console.log("Facebook user", user);
//   }

//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//     setFb(localStorage.getItem("fb"));
//   }, []);
//   return (
//     <div>
//       <section class="bg-gray-50 dark:bg-gray-900">
//         <h1 className="text-center text-3xl font-bold pt-10">Login page</h1>
//         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>
//               <form class="space-y-4 md:space-y-6" onSubmit={createUser}>
//                 <div>
//                   <label
//                     for="email"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     vlaue={email}
//                     name="email"
//                     id="email"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="name@company.com"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="password"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     vlaue={password}
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>
//                 <div class="flex items-center justify-between">
//                   <div class="flex items-start">
//                     <div class="flex items-center h-5">
//                       <input
//                         id="remember"
//                         aria-describedby="remember"
//                         type="checkbox"
//                         class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                         required=""
//                       />
//                     </div>
//                     <div class="ml-3 text-sm">
//                       <label
//                         for="remember"
//                         class="text-gray-500 dark:text-gray-300"
//                       >
//                         Remember me
//                       </label>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button
//                   type="submit"
//                   class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Sign in
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleClick}
//                   class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Sign in With Google
//                 </button>
//                 <button
//                   type="button"
//                   onClick={facebookAuthBtn}
//                   class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Sign in With Facebook
//                 </button>
//                 <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Don’t have an account yet?{" "}
//                   <a
//                     href="#"
//                     class="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Sign up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, facebookAuth, fbauthprovider } from "../config";
import { useRouter } from "next/router";
import nookies from "nookies"; // Library for handling cookies
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createUser = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        nookies.set(undefined, "authToken", token, { path: "/" });
        Swal.fire({
          title: "success",
          text: "User Login Successfully!",
          icon: "success",
          confirmButtonText: "Continue",
        });

        setTimeout(() => {
          setLoading(true);
          router.push("/products"); // Redirect to products page after successful login
        }, 3000);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Error Logging in with Email" + error.message,
          icon: "error",
          confirmButtonText: "close",
        });
      });
    setLoading(false);
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(async (data) => {
        const token = await data.user.getIdToken();
        nookies.set(undefined, "authToken", token, { path: "/" });
        Swal.fire({
          title: "success",
          text: "User Login Successfully With Google!",
          icon: "success",
          confirmButtonText: "Continue",
        });

        setTimeout(() => {
          setLoading(true);
          router.push("/products"); // Redirect to products page after successful login
        }, 3000);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Error Logging in with Google" + error.message,
          icon: "error",
          confirmButtonText: "close",
        });
      });
  };

  const facebookAuthBtn = () => {
    signInWithPopup(auth, fbauthprovider)
      .then(async (fbdata) => {
        const token = await fbdata.user.getIdToken();
        nookies.set(undefined, "authToken", token, { path: "/" });
        Swal.fire({
          title: "success",
          text: "User Login Successfully with Facebook!",
          icon: "success",
          confirmButtonText: "Continue",
        });

        setTimeout(() => {
          setLoading(true);
          router.push("/products"); // Redirect to products page after successful login
        }, 3000);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Error Logging in with Facebook" + error.message,
          icon: "error",
          confirmButtonText: "close",
        });
      });
  };

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <h1 className="text-center text-3xl font-bold pt-10">Login page</h1>
        <div class="flex flex-col items-center justify-center px-6 py-8 mt-10 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    vlaue={email}
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    vlaue={password}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="button"
                  class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={createUser}
                  disabled={loading}
                >
                  {loading ? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    "Sign in"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={loading}
                >
                  Sign in With Google Account
                </button>
                <button
                  type="button"
                  onClick={facebookAuthBtn}
                  class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={loading}
                >
                  Sign in With Facebook Account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
