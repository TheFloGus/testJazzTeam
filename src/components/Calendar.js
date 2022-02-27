import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ruLocale from "@fullcalendar/core/locales/ru";
import { useSelector } from "react-redux";
import "../styles/calendar.css";
import Search from "./Search";
import EventEditor from "./EventEditor";

function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedDate, setClickedDate] = useState("");
  const currentUser = useSelector((state) => state.userData.currentUser);
  const calendarRef = useRef();
  

  function goToDate(date) {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(date);
  }

  return (
    <div className="calendar">
      <div className="container">
        <Search goToDate={goToDate} />
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={currentUser.userEvents}
          locale={ruLocale}
          dateClick={(arg) => {
			setClickedDate(arg.dateStr);
            setModalOpen(true);
          }}
        />
		{modalOpen && <EventEditor date={clickedDate} setModalOpen={setModalOpen}/>}
      </div>
    </div>
  );
}

export default Calendar;
