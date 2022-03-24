import React from 'react';

import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  popupActiv,
  setPopupActiv,
  coordinates,
  setCoordinates,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const eventClick = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY});
    setPopupActiv((popupActiv = true));
  };
  
  return (
    <div style={eventStyle} className="event" onClick={eventClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;


// coordinates = { x: 0, y: 0 };