import React from "react";
import Link from "next/link";
import { Form } from "../components/Form";
interface ILoginProps {
  params: {};
  searchParams: { callbackUrl: string };
}
function LoginPage(props: ILoginProps) {
  const {
    searchParams: { callbackUrl },
  } = props;

  return (
    <div className="all-pages">
      <h2>Welcome to Login Page</h2>
      <Form btnTitle="login" isLogin={true} callbackUrl={callbackUrl} />
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default LoginPage;
