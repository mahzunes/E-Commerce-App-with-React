import React, { useState } from "react";
import { register } from "../firebase";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div class="testbox">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div class="accounttype">
          <input
            type="radio"
            value="None"
            id="radioOne"
            name="account"
            checked
          />
          <label for="radioOne" class="radio" chec>
            Personal
          </label>
          <input type="radio" value="None" id="radioTwo" name="account" />
          <label for="radioTwo" class="radio">
            Company
          </label>
        </div>
        <hr />
        <label id="icon" for="name">
          <i class="icon-envelope "></i>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label id="icon" for="name">
          <i class="icon-user"></i>
        </label>
        <input type="text" placeholder="Name" required />
        <label id="icon" for="name">
          <i class="icon-shield"></i>
        </label>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div class="gender">
          <input type="radio" value="None" id="male" name="gender" checked />
          <label for="male" class="radio" chec>
            Male
          </label>
          <input type="radio" value="None" id="female" name="gender" />
          <label for="female" class="radio">
            Female
          </label>
        </div>
        <div className="registerButtonContainer">
          <button
            className="registerButton"
            type="submit"
            disabled={!email || !password}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
