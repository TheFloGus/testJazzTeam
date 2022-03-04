import React, { useState, useEffect } from "react";
import "../../../assets/styles/calendar.css";
import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  format,
} from "date-fns";
import Day from "./Day";
import Search from "./Search";
import CalendarHeader from "./CalendarHeader";
import EventEditor from "./EventEditor";

function Calendar2() {
  const [pick, setPick] = useState(new Date());
  const [data, setData] = useState(takeMonth(pick));
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setData(takeMonth(pick));
  }, [pick]);

  function takeWeek(start = new Date()) {
    let date = startOfWeek(startOfDay(start), { weekStartsOn: 1 }); //выбираем первый день недели которая содержит в себе первый день месяца

    return function () {
      const week = [...Array(7)].map((_, i) => addDays(date, i)); //в массив добавляем этот день и каждый последующий до конца недели
      date = addDays(week[6], 1); // начинаем новую неделю добавляя 1 день к последнему дню массива
      return week;
    };
  }

  function takeMonth(start = new Date()) {
    let month = [];
    let date = start;

    const weekGen = takeWeek(startOfMonth(date)); //генерируем недели с той даты, которая нам нужна

    for (let i = 0; i < 6; i++) {
      // создаем 6 недель, чтобы наш календарь всегда был одного размера в 6 строк и 7 столбцов
      month.push(weekGen());
    }

    return month;
  }

  function goToDate(dateStr) {
    setPick(new Date(dateStr));
  }

  return (
    <div className="calendar">
      <div className="container">
        <Search goToDate={goToDate} />
        <CalendarHeader date={pick} setPick={setPick} />
        {data.map((week, index) => (
          <div key={index} className="calendar__week">
            {week.map((day, index) => (
              <div key={index}>
                <Day
                  day={day}
                  pick={pick}
                  setClickedDate={setPick}
                  setModalOpen={setModalOpen}
                />
              </div>
            ))}
          </div>
        ))}

        {modalOpen && (
          <EventEditor
            date={format(new Date(pick), "yyyy-MM-dd")}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default Calendar2;
