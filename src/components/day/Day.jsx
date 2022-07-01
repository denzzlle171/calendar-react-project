import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';


const Day = ({
  dataDay,
  dayEvents,
  setPopupActiv,
  setCoordinates,
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
            setPopupActiv={setPopupActiv}
            setCoordinates={setCoordinates}
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
  setPopupActiv: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  changeId: PropTypes.string,
  setChangeId: PropTypes.func.isRequired,
};

export default Day;
