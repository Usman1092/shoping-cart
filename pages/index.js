import Image from "next/image";
import React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Login from "./Login";



export default function Home() {
 
  return (
    <div>
      <Login />
    </div>
  );
}
