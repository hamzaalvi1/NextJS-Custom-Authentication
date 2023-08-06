import React from "react";
import Link from "next/link";

const getMe = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/getMe");
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

async function ProfilePage() {
  // const userData = getMe();
  // const user = await userData;
  // console.log(user);
  return (
    <div className="all-pages">
      <h2>Welcome to Profile Page</h2>
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
