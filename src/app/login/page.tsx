import React from "react";
import Link from "next/link";
function LoginPage() {
  return <div className="all-pages">
    <h2>Welcome to Login Page</h2>
    <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
  </div>;
}

export default LoginPage;
