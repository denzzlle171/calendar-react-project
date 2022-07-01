import React from 'react';
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({
  height,
  marginTop,
  title,
  time,
  setPopupActiv,
  setCoordinates,
  id,
  setChangeId,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const eventClick = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
    setPopupActiv(true);
    setChangeId(id);
  };

  return (
    <div style={eventStyle} className="event" onClick={eventClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string,
  time: PropTypes.string.isRequired,
  setPopupActiv: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  setChangeId: PropTypes.func.isRequired,
};

export default Event;
