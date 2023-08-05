import React from "react";
import Link from "next/link";
import { Form } from "../components/Form";

async function SignUpPage() {
 

  return (
    <div className="all-pages">
      <h2>Welcome to SignUp Page</h2>
      <Form btnTitle="Sign Up" apiUrl="http://localhost:3000/api/auth/signup"/>
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/profile"}>Profile</Link>
      </div>
    </div>
  );
}

export default SignUpPage;
