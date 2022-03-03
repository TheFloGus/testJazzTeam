import React, { useState } from "react";
import { addEvent, sortEvents } from "../../../assets/slices/UserDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import EventDrawer from "./EventDrawer";
import '../../../assets/styles/events.css'

function EventEditor({ date, setModalOpen }) {
  const [name, setName] = useState("");
  const currentUser = useSelector((state) => state.userData.currentUser);
  const dispatch = useDispatch();

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      if (name) {
        let newEvent = {
          title: name,
          start: date,
        };
        dispatch(addEvent(newEvent));
        dispatch(sortEvents());
		setName('')
      } else {
        alert("Введите название события");
      }
    }
  }

  function addEventHandler() {
    if (name) {
      let newEvent = {
        title: name,
        start: date,
      };
      dispatch(addEvent(newEvent));
      dispatch(sortEvents());
	  setName('')
    } else {
      alert("Введите название события");
    }
  }

  return (
    <div className="event-editor" onMouseDown={() => setModalOpen(false)}>
      <div className="event-box" onMouseDown={(e) => e.stopPropagation()}>
        <h2 className="event-editor__title">
          Cобытия{" "}
          {format(new Date(date), "d MMMM yyyy", {
            locale: ru,
          })}
        </h2>
        <input
          className="event-editor__name"
          type="text"
          placeholder="Новое событие"
          onKeyPress={handleKeyPress}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="event-editor__add" onClick={addEventHandler}>
          Добавить
        </button>

        {currentUser.userEvents
          .filter((event) => event.start === date)
          .reverse()
          .map((event, index) => {
            return (
              <div key={index}>
                <EventDrawer event={event} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EventEditor;
