import React, { useState } from 'react';
import './popUp.scss';
// import events from '../../gateway/events.js';



const PopUp = ({ popupActiv,setPopupActiv, coordinates}) => {

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



