import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({
  weekDates,
  events,
  popupActiv,
  setPopupActiv,
  setCoordinates,
  changeId,
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
};

Week.propTypes = {
  events: PropTypes.array.isRequired,
  popupActiv: PropTypes.bool.isRequired,
  setPopupActiv: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  changeId: PropTypes.string,
  setChangeId: PropTypes.func.isRequired,
};

export default Week;
