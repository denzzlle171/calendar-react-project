import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';


const Day = ({
  dataDay,
  dayEvents,
  popupActiv,
  setPopupActiv,
  setCoordinates,
  changeId,
  setChangeId,
  day,
}) => {

  const hours = Array(24)
    .fill()
    .map((val, index) => index);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            day={day}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            setCoordinates={setCoordinates}
            changeId={changeId}
            setChangeId={setChangeId}
          />
        );
      })}
    </div>
  );
};;;

Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array,
  popupActiv: PropTypes.bool.isRequired,
  setPopupActiv: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  changeId: PropTypes.string,
  setChangeId: PropTypes.func.isRequired,
};

export default Day;
