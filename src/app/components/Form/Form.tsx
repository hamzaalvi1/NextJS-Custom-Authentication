"use client";
import React, { useState } from "react";

function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleFormValueChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  return (
    <div className="main-form">
      <form>
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
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default Form;
