import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function App() {
  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Sign up</h1>

      <label>First Name:</label>
      <input type="text" name="firstname" />
      <label>Last Name:</label>
      <input type="text" name="lastname" />

      <label>Gender:</label>
      <select name="gender">
        <option>Select ...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Email:</label>
      <input type="email" name="email" />

      <label>About you:</label>
      <textarea type="text" name="about" />

      <input type="submit" value="Create Account" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
