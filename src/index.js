import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>

      <label>First Name:</label>
      <input
        type="text"
        name="firstname"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.firstname && errors.firstname.type === "required" && (
        <p>This is required</p>
      )}
      {errors.firstname && errors.firstname.type === "minLength" && (
        <p>This needs to be more than 3 characters</p>
      )}

      <label>Last Name:</label>
      <input type="text" name="lastname" ref={register({ required: true })} />
      {errors.lastname && <p>This is required</p>}

      <label>Gender:</label>
      <select name="gender" ref={register({ required: true })}>
        <option>Select ...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p>This is required</p>}

      <label>Email:</label>
      <input type="email" name="email" ref={register({ required: true })} />
      {errors.email && <p>This is required</p>}

      <label>About you:</label>
      <textarea type="text" name="about" ref={register({ required: false })} />

      <input
        className="submit"
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
