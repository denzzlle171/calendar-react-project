import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({
  weekDates,
  events,
  setPopupActiv,
  setCoordinates,

  setChangeId,
}) => {

  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        return (
          <Day
            day={dayStart}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            setPopupActiv={setPopupActiv}
            setCoordinates={setCoordinates}
            setChangeId={setChangeId}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  events: PropTypes.array.isRequired,
  setPopupActiv: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  setChangeId: PropTypes.func.isRequired,
};

export default Week;
