import React, { useState, useEffect } from 'react';
import RedLine from '../redline/RedLine';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';

const Hour = ({
  dataHour,
  hourEvents,
  popupActiv,
  setPopupActiv,
  setCoordinates,
  changeId,
  setChangeId,
  day,
}) => {
  let [nowTime, setNowTime] = useState(new Date());

  useEffect(() => {
    const flagInterval = setInterval(() => {
      setNowTime((nowTime = new Date()));
    }, 60000);
    return () => clearInterval(flagInterval);
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      
      {day.toDateString() === nowTime.toDateString() &&
        dataHour === nowTime.getHours() && <RedLine nowTime={nowTime} />}

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
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
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
