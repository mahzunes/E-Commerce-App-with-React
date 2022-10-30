import React, { useState } from "react";
import { login } from "../firebase";
import "../App.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginHandle } from "../store/auth";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);

    if (user) {
      dispatch(loginHandle(user));
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <div className="loginContainer">
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
            </div>
            <div class="input-field">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <a href="#" class="link">
              Forgot Your Password?
            </a>
          </div>
          <div class="action">
            <button>
              <Link className="registerLink" to={"/register"}>
                Click here to Register
              </Link>
            </button>
            <button>Sign in</button>
          </div>
        </form>
      </div>

      <p className="loginDesc">Discover OUZO's unique experience!</p>
      <p className="loginDesctwo">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magni
        dolores facilis consequatur, amet debitis!.
      </p>
    </div>
  );
}

export default Login;
