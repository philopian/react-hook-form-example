import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>

      <label>First Name:</label>
      <input type="text" name="firstname" ref={register} />

      <label>Last Name:</label>
      <input type="text" name="lastname" ref={register} />

      <label>Gender:</label>
      <select name="gender" ref={register}>
        <option>Select ...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Email:</label>
      <input type="email" name="email" ref={register} />

      <label>About you:</label>
      <textarea type="text" name="about" ref={register} />

      <input
        type="submit"
        name="submit"
        value="Create Account"
        ref={register}
      />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
