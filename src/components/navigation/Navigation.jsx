import React from 'react';
import { days } from '../../utils/dateUtils.js';
import './navigation.scss';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
 
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div key={dayDate.getDate()} className="calendar__day-label day-label">
          <div
            className={
              dayDate.toDateString() === new Date().toDateString()
                ? 'mark'
                : 'not_mark'
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

Navigation.propTypes = {
  weekDates: PropTypes.array,
};

export default Navigation;





