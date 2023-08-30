"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function ProfilePage() {
  const [userData, setUserData]: any = useState({});
  const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/me");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      if (Object.keys(result).length) {
        setUserData(result?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="all-pages">
      <h2>Welcome to profile Page {""}</h2>
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
