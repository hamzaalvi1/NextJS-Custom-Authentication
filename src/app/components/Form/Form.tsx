"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
interface formProps {
  btnTitle: string;
  isLogin?: boolean;
  apiUrl: string;
}

function Form(props: formProps) {
  const { btnTitle, isLogin = false, apiUrl } = props;
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [btnText, setBtnText] = useState(btnTitle);
  const router = useRouter();

  const handleFormValueChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const getUserCredentials = await signIn("credentials", {
        ...formValues,
      });
      console.log(getUserCredentials, "getUserCredentials");
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div className="main-form">
      <form onSubmit={handleFormSubmit}>
        {!isLogin && (
          <label htmlFor="username">
            Username
            <input
              onChange={handleFormValueChange}
              type="text"
              name="username"
              placeholder={"Enter Your Username"}
              value={formValues.username}
            />
          </label>
        )}
        <label htmlFor="email">
          Email
          <input
            onChange={handleFormValueChange}
            type="email"
            name="email"
            placeholder={"Enter Your Email"}
            value={formValues.email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={handleFormValueChange}
            type="password"
            name="password"
            placeholder={"Enter Your Password"}
            value={formValues.password}
          />
        </label>
        <button type="submit">{btnText}</button>
      </form>
    </div>
  );
}

export default Form;
