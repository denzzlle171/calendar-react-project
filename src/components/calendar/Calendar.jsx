import React, {useState} from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import PopUp from '../popUp/PopUp';
import './calendar.scss';

const Calendar = ({ weekDates, events, setEvent }) => {

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
            events={events}
            setEvent={setEvent}
          />
          <Week
            weekDates={weekDates}
            events={events}
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            changeId={changeId}
            setChangeId={setChangeId}
          />
        </div>
      </div>
    </section>
  );
};


export default Calendar;

