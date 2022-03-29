import React, { useState, useEffect } from 'react';
import RedLine from '../RedLine/RedLine';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';
const Hour = ({
  dataDay,
  dataHour,
  hourEvents,
  popupActiv,
  setPopupActiv,
  coordinates,
  setCoordinates,
  changeId,
  setChangeId,
}) => {
  
  let [nowTime, setNowTime] = useState(new Date());

  useEffect(() => {
    const flagInterval = setInterval(() => {
      setNowTime((nowTime = new Date()))
    }, 60000);
  return () => clearInterval(flagInterval);
  })

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {dataDay === nowTime.getDate() && dataHour === nowTime.getHours() && (
        <RedLine nowTime={nowTime} />
      )}

      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            changeId={changeId}
            setChangeId={setChangeId}
            id={id}
          />
        );
      })}
    </div>
  );
};;

export default Hour;
