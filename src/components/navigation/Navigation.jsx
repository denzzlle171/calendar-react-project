import React from 'react';
import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ weekDates }) => {

    return (
      <header className="calendar__header">
        {weekDates.map((dayDate) => (
          <div className="calendar__day-label day-label">
            <div
              className={
                dayDate.getDate() === new Date().getDate() ? 'mark' : 'not_mark'
              }
            >
              <span className="day-label__day-name">
                {days[dayDate.getDay()]}
              </span>
              <span className="day-label__day-number">{dayDate.getDate()}</span>
            </div>
          </div>
        ))}
      </header>
    );
  };

export default Navigation;
// "mark not_mark"




