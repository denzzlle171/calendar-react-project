import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';

const Day = ({
  dataDay,
  dayEvents,
  popupActiv,
  setPopupActiv,
  coordinates,
  setCoordinates,
  changeId,
  setChangeId,
}) => {
  

  const hours = Array(24)
    .fill()
    .map((val, index) => index);
//  console.log(dataDay === new Date().getDate());
  return (
    <div className="calendar__day" data-day={dataDay}>
      
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            changeId={changeId}
            setChangeId={setChangeId}
            dataDay={dataDay}
          />
        );
      })}
    </div>
  );
};;

export default Day;
