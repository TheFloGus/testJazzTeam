import React, { Suspense } from "react";
import "../../assets/styles/navigation.css";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SpinnerRoundFilled } from "spinners-react";
import Footer from "./Footer";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Info = React.lazy(() => import("../pages/Info/Info"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const Calendar = React.lazy(() => import("../pages/Calendar/Calendar"));

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  const currentUser = useSelector((state) => state.userData.currentUser);

  return (
    <>
      <header className="navigation">
        <div className="container">
          <div className="nav__items">
            <div className="nav__items--main">
              <NavLink to="/" className="nav__link">
                <div className="nav__button">Домой</div>
              </NavLink>
              <NavLink to="/info" className="nav__link">
                <div className="nav__button">Инфо</div>
              </NavLink>

              {isLoggedIn ? (
                <NavLink to="/calendar" className="nav__link">
                  <div className="nav__button">Календарь</div>
                </NavLink>
              ) : (
                <div></div>
              )}
            </div>
            <div className="nav__items--side">
              {isLoggedIn ? (
                <NavLink to="/profile" className="nav__link">
                  <div className="nav__button">
                    Здравствуйте, {currentUser.userName}!
                  </div>
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav__link">
                  <div className="nav__button">Логин</div>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="page">
        <Suspense
          fallback={
            <div className="center-spinner">
              <SpinnerRoundFilled
                size={50}
                thickness={100}
                speed={100}
                color="#bf85fe"
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            {
              <Route
                path="/login"
                element={
                  isLoggedIn ? <Navigate to="/profile" /> : <Login />
                }
              />
            }
            {
              <Route
                path="/profile"
                element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
              />
            }
            {
              <Route
                path="/calendar"
                element={isLoggedIn ? <Calendar /> : <Navigate to="/login" />}
              />
            }
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}
