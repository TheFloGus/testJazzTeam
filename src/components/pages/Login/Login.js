import "../../../assets/styles/login.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { toggleLoggedIn, setCurrentUser } from "../../../assets/slices/UserDataSlice";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();

  function resetHandler() {
    setLogin("");
    setPassword("");
  }

  function loginHandler(e) {
    e.preventDefault();
    if (login && password) {
      const currentUser = users.find(
        (user) =>
          user.userLogin.toLowerCase() === login.toLowerCase() &&
          user.userPassword === password
      );

      if (currentUser) {
        dispatch(toggleLoggedIn());
        dispatch(setCurrentUser(currentUser));
        <Navigate to="/profile" />;
      } else {
        alert("Invalid login or password");
      }
    } else {
      alert("Please enter the data");
    }
  }

  return (
    <div className="login__page">
      <div className="container">
        <div className="login">
          <form className="login__form">
            <div className="login__fields">
              <div className="login__field">
                <label htmlFor="login">Логин</label>
                <input
                  className="login__form--input"
                  type="text"
                  placeholder="login"
                  name="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                ></input>
              </div>
              <div className="login__field">
                <label htmlFor="password">Пароль</label>
                <input
                  className="login__form--input"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="login__buttons">
              <button
                type="reset"
                className="form__button reset"
                onClick={resetHandler}
              >
                Очистить
              </button>
              <button
                type="submit"
                className="form__button submit"
                onClick={(e) => loginHandler(e)}
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
