import React from "react";
import Link from "next/link";
import { Form } from "../components/Form";
function LoginPage() {


  return (
    <div className="all-pages">
      <h2>Welcome to Login Page</h2>
      <Form
        btnTitle="login"
        isLogin={true}
        apiUrl="http://localhost:3000/api/auth/login"
      />
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default LoginPage;
