import { format, addMonths, subMonths } from "date-fns";
import { ru } from "date-fns/locale";

function CalendarHeader({ date, setPick }) {
  return (
    <div className="calendar__header">
      <div className="calendar__buttons">
        <button
          onClick={() => {
            setPick(subMonths(date, 1));
          }}
          className="months__button"
        >
          {String.fromCharCode(9664)}
        </button>
        <div className="month__name">
          {format(date, "LLL", { locale: ru }).charAt(0).toUpperCase() +
            format(date, "LLL", { locale: ru }).slice(1)}{" "}
          {format(date, "yyyy")}
        </div>
        <button
          onClick={() => {
            setPick(addMonths(date, 1));
          }}
          className="months__button"
        >
          {String.fromCharCode(9654)}
        </button>
        <button
          onClick={() => {
            setPick(new Date());
          }}
          className="months__button today"
        >
          Сегодня
        </button>
      </div>
      <div className="header__names">
        {[
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота",
          "Воскресенье",
        ].map((day, index) => (
          <div className="header__name" key={index}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarHeader;
