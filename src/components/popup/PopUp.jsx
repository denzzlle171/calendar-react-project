import React from 'react';
import './popUp.scss';

const PopUp = ({
  popupActiv,
  setPopupActiv,
  coordinates,
  changeId,
  events,
  setEvent,
}) => {
  const deleteEvent = () => {
    const newEvents = events.filter((elem) => elem.id !== changeId);
    console.log(newEvents);
    setEvent((events = newEvents));
    setPopupActiv((popupActiv = false));
  };

  return (
    <div className={popupActiv ? 'popup' : 'popup-hiden'}>
      <div
        className="popup__overlay"
        onClick={() => setPopupActiv((popupActiv = false))}
      ></div>
      <div
        style={{ left: coordinates.x, top: coordinates.y }}
        className="popup__content"
      >
        <button onClick={deleteEvent} className="delete-event-btn">
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};
export default PopUp;



