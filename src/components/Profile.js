import "../styles/profile.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { sortEvents } from "./slices/UserDataSlice";

function Profile() {
  const currentUser = useSelector((state) => state.userData.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortEvents());
  }, []);

  return (
    <div className="profile">
      <div className="container">
        <h2 className="profile__title">Ваш профиль</h2>
        <span className="line"></span>
        <div className="profile__data-box">
          <div className="profile__data-set titles">
            <p className="profile__data title">Имя</p>
            <p className="profile__data title">Фамилия</p>
            <p className="profile__data title">Логин</p>
          </div>
          <div className="profile__data-set data">
            <p className="profile__data">{currentUser.userName}</p>
            <p className="profile__data">{currentUser.userSurname}</p>
            <p className="profile__data">{currentUser.userLogin}</p>
          </div>
        </div>
		<span className="line"></span>
        <div className="profile__events">
          <h2 className="profile__events--title">Ваши события</h2>
          <div className="events__list">
            {currentUser.userEvents.map((event, index) => {
              return (
                <div key={index} className="event">
                  <p className="event__date">
                    {format(new Date(event.start), "dd MMM yyyy", {
                      locale: ru,
                    })}
                  </p>
                  <p className="event__title">{event.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
