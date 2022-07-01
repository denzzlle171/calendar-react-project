import React, { useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import PopUp from '../popup/PopUp';
import './calendar.scss';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, events, fetchEvents }) => {
  const [popupActiv, setPopupActiv] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [changeId, setChangeId] = useState(null);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />

      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <PopUp
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            coordinates={coordinates}
            changeId={changeId}
            fetchEvents={fetchEvents}
          />
          <Week
            weekDates={weekDates}
            events={events}
            setPopupActiv={setPopupActiv}
            setCoordinates={setCoordinates}
            setChangeId={setChangeId}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  setEvent: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Calendar;
