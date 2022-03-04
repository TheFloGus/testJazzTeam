import React from "react";
import { format, isSameDay, isToday, isSameMonth } from "date-fns";
import { useSelector } from "react-redux";

function Day({ day, pick, setClickedDate, setModalOpen }) {
  const currentUser = useSelector((state) => state.userData.currentUser);
  return (
    <div
      className={isToday(day) ? "calendar__day today" : "calendar__day"}
      onClick={() => {
        setClickedDate(day);
        setModalOpen(true);
      }}
    >
      <div className={isSameMonth(day, pick) ? null : "neighbour-month"}>
        {format(new Date(day), "dd")}
      </div>
      <div className="calendar__event">
        {currentUser.userEvents
          .filter((event) => isSameDay(new Date(event.start), day))
          .reverse()
          .map((event, index) => (
            <div key={index} className="event__name">
              {event.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Day;
