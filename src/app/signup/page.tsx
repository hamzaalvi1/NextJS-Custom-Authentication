import React from "react";
import Link from "next/link";
import { Form } from "../components/Form";
function SignUpPage() {
  return (
    <div className="all-pages">
      <h2>Welcome to SignUp Page</h2>
      <Form />
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/profile"}>Profile</Link>
      </div>
    </div>
  );
}

export default SignUpPage;
