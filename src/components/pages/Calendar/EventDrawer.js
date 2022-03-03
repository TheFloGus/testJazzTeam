import React, { useState } from "react";
import { removeEvent, editEvent } from "../../../assets/slices/UserDataSlice";
import { useDispatch } from "react-redux";

function EventDrawer({ event }) {
  const [editEnabled, setEditEnabled] = useState(false);
  const [value, setValue] = useState(event.title);
  const dispatch = useDispatch();

  function saveHandler() {
    if (value) {
      dispatch(editEvent({ event, value }));
      setValue(value);
      setEditEnabled(false);
    } else {
      alert("Введите название");
    }
  }

  return (
    <>
      {editEnabled ? (
        <div className="event-editor__event">
          <input
		  className="event-editor__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <div className="event-editor__buttons">
            <button className="event-editor__button save" onClick={saveHandler}>
              Сохранить
            </button>
            <button
              className="event-editor__button cancel"
              onClick={() => {
                setEditEnabled(false);
                setValue(event.title);
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div className="event-editor__event">
          <p>{event.title}</p>
          <div className="event-editor__buttons">
            <button
              className="event-editor__button edit"
              onClick={() => setEditEnabled(true)}
            >
              Редактировать
            </button>
            <button
              className="event-editor__button delete"
              onClick={() => dispatch(removeEvent(event))}
            >
              
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EventDrawer;
