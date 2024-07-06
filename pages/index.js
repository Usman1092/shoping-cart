import Image from "next/image";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Login from "./Login";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Home() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      <h1 className="text-center text-2xl font-bold pt-5"> go to Login page</h1>
    </div>
  );
}
